export const TipoAlimento = Object.freeze({
  CASEIRO: 1,
  INDUSTRIALIZADO: 2,
  PERECIVEL: 3,
  NAO_PERECIVEL: 4,
  INNATURA: 5,
});

export const TipoAlimentoByCodigo = {
  1: "CASEIRO",
  2: "INDUSTRIALIZADO",
  3: "PERECIVEL",
  4: "NAO_PERECIVEL",
  5: "INNATURA",
};

export const TipoAlimentoLabel = {
  CASEIRO: "Caseiro",
  INDUSTRIALIZADO: "Industrializado",
  PERECIVEL: "Perecível",
  NAO_PERECIVEL: "Não perecível",
  INNATURA: "In natura",
};

export function getTipoAlimentoLabel(codigo) {
  const key = TipoAlimentoByCodigo[codigo];
  return TipoAlimentoLabel[key] || "Desconhecido";
}