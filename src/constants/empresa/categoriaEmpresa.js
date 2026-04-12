export const CategoriaDoadora = Object.freeze({
  RESTAURANTE: 1,
  HORTIFRUTTI: 2,
  MERCADO: 3,
  PADARIA: 4,
  FASTFOOD: 5,
  ADEGA: 6,
});

export const CategoriaDoadoraByCodigo = {
  1: "RESTAURANTE",
  2: "HORTIFRUTTI",
  3: "MERCADO",
  4: "PADARIA",
  5: "FASTFOOD",
  6: "ADEGA",
};

export const CategoriaDoadoraLabel = {
  RESTAURANTE: "Restaurante",
  HORTIFRUTTI: "Hortifrutti",
  MERCADO: "Mercado",
  PADARIA: "Padaria",
  FASTFOOD: "Fast food",
  ADEGA: "Adega",
};

export const CategoriaRecebedora = Object.freeze({
  ONG: 1,
  OSC: 2,
  RELIGIOSA: 3,
  BANCODEALIMENTOS: 4,
});

export const CategoriaRecebedoraByCodigo = {
  1: "ONG",
  2: "OSC",
  3: "RELIGIOSA",
  4: "BANCODEALIMENTOS",
};

export const CategoriaRecebedoraLabel = {
  ONG: "ONG",
  OSC: "OSC",
  RELIGIOSA: "Religiosa",
  BANCODEALIMENTOS: "Banco de alimentos",
};

export function getCategoriaEmpresaLabel(tipo, codigo) {
  if(tipo === 1) {
    const key = CategoriaDoadoraByCodigo[codigo];
    return CategoriaDoadoraLabel[key] || "Desconhecido";
  }
  else {
    const key = CategoriaRecebedoraByCodigo[codigo];
    return CategoriaRecebedoraLabel[key] || "Desconhecido";
  }
}