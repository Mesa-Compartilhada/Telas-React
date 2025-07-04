export const STATUS_DOACAO = {
  DISPONIVEL: "DISPONIVEL",
  ANDAMENTO: "ANDAMENTO",
  CONCLUIDA: "CONCLUIDA",
  CANCELADA: "CANCELADA"
}

export const TIPO_ALIMENTO = Object.freeze(
  (() => {
    const map = {
      CASEIRO: 1,
      INDUSTRIALIZADO: 2,
      PERECIVEL: 3,
      NAOPERECIVEL: 4,
      INNATURA: 5,
    };
    const reverse = Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
    return { ...map, ...reverse };
  })()
);


export const TIPO_ARMAZENAMENTO = {
  LOCALSECO: 1,
  PRONTOCONSUMO: 2,
  REFRIGERACAO: 3,
  CONGELAMENTO: 4
}