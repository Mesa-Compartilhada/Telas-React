export const STATUS_DOACAO = {
  DISPONIVEL: "DISPONIVEL",
  ANDAMENTO: "ANDAMENTO",
  CONCLUIDA: "CONCLUIDA",
  CANCELADA: "CANCELADA"
}

// export const TIPO_ALIMENTO = Object.freeze(
//   (() => {
//     const map = {
//       CASEIRO: 1,
//       INDUSTRIALIZADO: 2,
//       PERECIVEL: 3,
//       NAOPERECIVEL: 4,
//       INNATURA: 5,
//     };
//     const reverse = Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
//     return { ...map, ...reverse };
//   })()
// );