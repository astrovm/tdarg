/** Split an optional heading from a legislation bullet, preserving unlabelled text. */
export function splitBullet(text: string): { label: string | null; body: string } {
  const separatorIndex = text.indexOf(":");
  if (separatorIndex === -1) return { label: null, body: text };
  return {
    label: text.slice(0, separatorIndex),
    body: text.slice(separatorIndex + 1).trim(),
  };
}
