export const TipoEmpresa = Object.freeze({
  DOADORA: 1,
  RECEBEDORA: 2,
});

export const TipoEmpresaByCodigo = {
  1: "DOADORA",
  2: "RECEBEDORA",
};

export const TipoEmpresaLabel = {
  DOADORA: "Doadora",
  RECEBEDORA: "Recebedora",
};

export function getTipoEmpresaLabel(codigo) {
  const key = TipoEmpresaByCodigo[codigo];
  return TipoEmpresaLabel[key] || "Desconhecido";
}