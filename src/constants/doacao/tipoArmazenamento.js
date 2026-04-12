export const TipoArmazenamento = Object.freeze({
  LOCALSECO: 1,
  PRONTOCONSUMO: 2,
  REFRIGERACAO: 3,
  CONGELAMENTO: 4,
});

export const TipoArmazenamentoByCodigo = {
  1: "LOCALSECO",
  2: "PRONTOCONSUMO",
  3: "REFRIGERACAO",
  4: "CONGELAMENTO",
};

export const TipoArmazenamentoLabel = {
  LOCALSECO: "Local seco",
  PRONTOCONSUMO: "Pronto para consumo",
  REFRIGERACAO: "Refrigeração",
  CONGELAMENTO: "Congelamento",
};

export function getTipoArmazenamentoLabel(codigo) {
  const key = TipoArmazenamentoByCodigo[codigo];
  return TipoArmazenamentoLabel[key] || "Desconhecido";
}