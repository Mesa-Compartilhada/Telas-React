export function Endereco(props) {
  const { mensagens, endereco, setEndereco } = props

  // Função para preencher campos do endereço automaticamente
  async function preencherEndereco(cep) {
    cep = cep.target.value
    if(cep.length >= 8) { 
      // API (também retorna latitude e longitude para usar em mapas depois): https://github.com/raniellyferreira/awesomeapi-cep
      let result = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`, {
        method: "GET"
      })
      let dadosCep = await result.json()
      // O número e o complemento são adicionados pelos próprios inputs
      setEndereco({
        ...endereco,
        cep: cep,
        logradouro: dadosCep.address,
        bairro: dadosCep.district,
        cidade: dadosCep.city,
        estado: dadosCep.state,
        pais: "Brasil",
      })
    }
    else {
      setEndereco({
        ...endereco,
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        pais: "Brasil",
      })
    }
  }

  return(
    <>
      <h4>Endereço do estabelecimento:</h4>
      <div className="form-row">
        <div className="col form-group">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            className="form-control"
            placeholder="00000-000"
            defaultValue={endereco.cep}
            onChange={(e) => {(e.target.value.length === 0 || e.target.value.length >= 8) && preencherEndereco(e) }
            }
          />
          <small className="form-text text-muted">
            {mensagens.cep ?? ""}
          </small>
        </div>
      </div>
      <div className="form-row">
        <div className="col form-group">
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Avenida Brasil"
            id="logradouro"
            value={endereco.logradouro || ""}
            disabled
          />
        </div>
        <div className="col form-group">
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            className="form-control"
            placeholder="Ex: Centro"
            value={endereco.bairro || ""}
            disabled
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col form-group">
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            className="form-control"
            placeholder="Ex: SP"
            value={endereco.cidade || ""}
            disabled
          />
        </div>
        <div className="col form-group">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            className="form-control"
            placeholder="Ex: SP"
            value={endereco.estado || ""}
            disabled
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-2">
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            className="form-control"
            placeholder="Ex: 123"
            value={endereco.numero || ""}
            onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
          />
          <small className="form-text text-muted">
            {mensagens.numero ?? ""}
          </small>
        </div>
        <div className="col form-group">
          <label htmlFor="complemento">Complemento:</label>
          <input
            type="text"
            id="complemento"
            className="form-control"
            placeholder="Ex: Apto 1"
            value={endereco.complemento || ""}
            onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
          />
        </div>
      </div>
    </>
  )
}