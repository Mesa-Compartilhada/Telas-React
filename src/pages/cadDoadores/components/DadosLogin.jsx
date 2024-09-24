export function DadosLogin(props) {
  const { mensagens, empresa, setEmpresa, cadastrarEmpresa } = props
  return(
    <>
    <h4>Dados de login:</h4>
      <div className="form-group">
        <label htmlFor="email">Digite seu email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="contato@empresa.com.br"
          required="required"
          defaultValue={empresa.email}
          onChange={(e) => setEmpresa({...empresa, email: e.target.value})}
        />
        <small className="form-text text-muted">
          {mensagens.email ?? ""}
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="senha"
          placeholder="Senha"
          defaultValue={empresa.senha}
          onChange={(e) => setEmpresa({...empresa, senha: e.target.value})}
        />
        <small className="form-text text-muted">
          {mensagens.senha ?? ""}
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="confirmacaoDeSenha">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="confirmacaoDeSenha"
          placeholder="Confirmação de Senha"
          defaultValue={empresa.confirmacaoDeSenha}
          onChange={(e) => setEmpresa({...empresa, confirmacaoDeSenha: e.target.value})}
        />
        <small className="form-text text-muted">
          {mensagens.confirmacaoDeSenha ?? ""}
        </small>
      </div>

      <button className="btn btn-info text-white pushable rounded mt-2" type="button" onClick={() => cadastrarEmpresa()}>
        <span className="edge"></span>
        <span className="front">Enviar</span>
      </button>
    </>
  )
}