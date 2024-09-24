import { useState } from "react";
import { login } from "../../lib/api/empresa";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()
  const [dadosLogin, setDadosLogin] = useState({})
  const [mensagem, setMensagem] = useState()
  const [mensagens, setMensagens] = useState({
    email: "",
    senha: ""
  })

  function validarDados() {
    let r = true
    let email, senha
    if(!dadosLogin.email || dadosLogin.email.length < 1) {
      email = "Insira o email"
      r = false
    }
    if(!dadosLogin.senha || dadosLogin.senha.length <= 8) {
      senha = "A senha deve ter no mínimo 8 caracteres"
      r = false
    }
    console.log(mensagens)
    setMensagens({email, senha})
    return r
  }

  async function fazerLogin() {
    validarDados()
    if(dadosLogin.email && dadosLogin.senha) {
      const result = await login(dadosLogin.email, dadosLogin.senha);
      if(result) {
          const { id, cnpj, tipo, categoria, nome, email, status, endereco, doacoes } = result
          const usuario = { id, cnpj, tipo, categoria, nome, email, status, endereco, doacoes }
          localStorage.setItem("user", JSON.stringify(usuario))
          setMensagens({})
          navigate("/")
      }
      else {
        setMensagem("Dados incorretos")
      }
    }
  }

  return (
    <>
      <div className="centraliza">
        <div className="" style={{ width: "44rem" }}>
          <div className="card-body">
            <h5 className="text-2xl">Login</h5>
            <small>{mensagem || <>&nbsp;</>}</small>
            <form className="mt-3">
              <div className="form-group">
                <label htmlFor="email">Digite seu email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="contato@empresa.com.br"
                  required="required"
                  onChange={(e) => setDadosLogin({ ...dadosLogin, email: e.target.value })}
                />
                <small>{mensagens.email || ""}</small>
              </div>

              <div className="form-group">
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Senha"
                  onChange={(e) => setDadosLogin({ ...dadosLogin, senha: e.target.value })}
                />
                <small>{mensagens.senha}</small>
              </div>

              <button
                className="pushable btn btn-info"
                type="button"
                onClick={() => fazerLogin()}
              >
                <span className="edge"></span>
                <span className="front">Enviar</span>
              </button>
              <a className="btn btn-outline-link" href="/cadastro">
                Não possui cadastro?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
