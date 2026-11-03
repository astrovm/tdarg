// Pages shaped like Alfa Beta's (www.alfabeta.net/precio/), trimmed to what
// the parser reads.

export type Offer = { sku: string; name: string; price: string; availability?: string };

// An ingredient's product list (lista_drogas_detalle.jsp?id=...)
export function ingredientPage(products: string[]): string {
  return products
    .map(
      (page, i) => `
                <form name="pr${i + 1}" action="${page}" method="post">
                    <input type="hidden" name="src" value="pr">
                    <input type="hidden" name="patron" value="${page.replace(".html", "").toUpperCase()}">
                </form>
                <form name="lab${i + 1}" action="srv" method="post">
                    <input type="hidden" name="src" value="prs">
                </form>
                <a class="rprod" href="javascript:document.pr${i + 1}.submit();">X</a>`,
    )
    .join("\n");
}

// A product's price page, with its schema.org Product. A null monodrug leaves
// out the "Monodroga" property.
export function productPage(
  name: string,
  laboratory: string,
  monodrug: string | null,
  offers: Offer[],
): string {
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    brand: { "@type": "Brand", name: laboratory },
    additionalProperty: [
      ...(monodrug === null
        ? []
        : [{ "@type": "PropertyValue", name: "Monodroga", value: monodrug }]),
      { "@type": "PropertyValue", name: "Accion terapeutica", value: "Estimulante SNC" },
    ],
    offers: offers.map((offer) => ({
      "@type": "Offer",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      ...offer,
    })),
  };

  return `<html><head>
    <script type="application/ld+json">{ "@type": "Organization", broken }</script>
    <script type="application/ld+json">
        ${JSON.stringify(product, null, 2)}
        </script>
    </head><body>${name} ${laboratory}</body></html>`;
}

// Real response headers: Alfa Beta serves ISO-8859-1
export function latin1Response(html: string): Response {
  return new Response(Uint8Array.from(html, (char) => char.charCodeAt(0)), {
    headers: { "content-type": "text/html;charset=iso-8859-1" },
  });
}
