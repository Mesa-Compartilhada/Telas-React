export function Endereco(props) {
  const { mensagens, setMensagens, setPagina, endereco, setEndereco, preencherEndereco } = props
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
            onChange={(e) => preencherEndereco(e)
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
            defaultValue={endereco.logradouro}
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
            defaultValue={endereco.bairro}
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
            defaultValue={endereco.cidade}
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
            defaultValue={endereco.estado}
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
            defaultValue={endereco.numero}
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
            defaultValue={endereco.complemento}
            onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
          />
        </div>
      </div>
    </>
  )
}