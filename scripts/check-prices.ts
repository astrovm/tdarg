// Loads live prices from Alfa Beta and fails if any ingredient has none.
// Run: bun run check-prices
import { INGREDIENT_IDS } from "@/lib/medications/alfabeta";
import { fetchAlfabetaPrices } from "@/lib/medications/server";
import { brandName, formatMedicationPresentation, pricePerMg } from "@/lib/medications/utils";

const started = performance.now();
const { data } = await fetchAlfabetaPrices();
const seconds = ((performance.now() - started) / 1000).toFixed(1);

for (const ingredient of Object.keys(INGREDIENT_IDS)) {
  const meds = data.filter((med) => med.name === ingredient);
  console.log(`\n${ingredient}: ${meds.length}`);
  for (const med of meds) {
    const perMg = pricePerMg(med);
    console.log(
      `  ${brandName(med.brand)} ${med.strength} | ${formatMedicationPresentation(med)} | ${med.laboratory} | $${med.price}${perMg ? ` | $${perMg.toFixed(2)}/mg` : ""}`,
    );
  }
}

const missing = Object.keys(INGREDIENT_IDS).filter((i) => !data.some((med) => med.name === i));
console.log(`\n${data.length} presentations in ${seconds}s`);

if (missing.length > 0) {
  console.error(`No prices for: ${missing.join(", ")}`);
  process.exit(1);
}
