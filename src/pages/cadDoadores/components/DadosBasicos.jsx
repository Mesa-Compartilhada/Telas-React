export function DadosBasicos(props) {
  const { mensagens, setMensagens, setPagina, empresa, setEmpresa } = props

  // Categorias de empresa para preencher os dropdown
  const categoriaDoadora = {
    1: "Restaurante", 
    2: "Hortifrutti", 
    3: "Mercado", 
    4: "Padaria", 
    5: "Fast Food",
    6: "Outro"
  }
  const categoriaRecebedora = {
    1: "Organização não governamental", 
    2: "Organização Religiosa", 
    3: "Unidade básica de saúde",
    4: "Outro"
  }

  return(
    <>
      <h4>Dados básicos:</h4>
      <div className="form-group">
        <label htmlFor="nome">Nome fantasia de sua empresa:</label>
        <input
          type="text"
          id="nome"
          className="form-control"
          placeholder="Nome fantasia"
          defaultValue={empresa.nome}
          onChange={(e) => setEmpresa({...empresa, nome: e.target.value})}
        />
        <small className="form-text text-muted">
          {mensagens.nome ?? ""}
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="cnpj"> CNPJ: </label>
        <input
          type="text"
          id="cnpj"
          className="form-control"
          placeholder="00.000.000/0000-00"
          defaultValue={empresa.cnpj}
          onChange={(e) => setEmpresa({...empresa, cnpj: e.target.value})}
        />
        <small className="form-text text-muted">
          Nunca vamos compartilhar seu CNPJ com ninguém.
        </small>
        <small className="form-text text-muted">
          {mensagens.cnpj ?? ""}
        </small>
      </div>
      
      <div className="form-group">
        <label htmlFor="tipo">Tipo da empresa:</label>
        <select name="tipo" id="tipo" className="form-control" onChange={(e) => setEmpresa({...empresa, tipo: e.target.value})} defaultValue={empresa.tipo}>
          <option value={0}>Selecione um tipo</option>
          <option value={1}>Doadora</option>
          <option value={2}>Recebedora</option>
        </select>
        <small className="form-text text-muted">
          {mensagens.tipo ?? ""}
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="categoria">
          { empresa.categoria === "1" 
            ? "Categoria de estabelecimento:" 
            : "Categoria de instituição:"
          }
        </label>
        <select className="form-control" id="categoria" disabled={ !empresa.tipo || empresa.tipo.length <= 0 } onChange={(e) => setEmpresa({ ...empresa, categoria: e.target.value })} defaultValue={empresa.categoria}>
          <option value="">Selecione uma categoria</option>
          {
            empresa.tipo === "1" 
            ? Object.keys(categoriaDoadora).map(key => <option key={key} value={key}>{categoriaDoadora[key]}</option>)
            : Object.keys(categoriaRecebedora).map(key => <option key={key} value={key}>{categoriaRecebedora[key]}</option>)
          }
        </select>
        <small className="form-text text-muted">
          {mensagens.categoria ?? ""}
        </small>
      </div>
    </>
  )
}