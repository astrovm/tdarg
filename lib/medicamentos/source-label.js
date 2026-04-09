function getMedicamentoSourceLabel(source) {
  return source === "farmacity" ? "Farmacity" : source;
}

module.exports = { getMedicamentoSourceLabel };
