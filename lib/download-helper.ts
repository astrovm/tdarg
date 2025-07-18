export const downloadDocument = (content: string, filename: string) => {
  const blob = new Blob([content], {
    type: "text/markdown",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};