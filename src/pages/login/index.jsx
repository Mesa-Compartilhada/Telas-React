import { useState } from "react";
import { getEmpresaByEmail } from "../../lib/api/empresa";
import { useNavigate } from "react-router-dom";
const bcrypt = require("bcryptjs")

export default function Login() {

  const navigate = useNavigate()
  const [dadosLogin, setDadosLogin] = useState({});
  const [mensagem, setMensagem] = useState()

  async function fazerLogin() {
    if(dadosLogin.email && dadosLogin.senha) {
      const result = await getEmpresaByEmail(dadosLogin.email);
      if(result) {
        if(await bcrypt.compare(dadosLogin.senha, result.senha)) {
          const { id, cnpj, tipo, categoria, nome, email, status, endereco, doacoes } = result
          const usuario = { id, cnpj, tipo, categoria, nome, email, status, endereco, doacoes }
          localStorage.setItem("user", JSON.stringify(usuario))
          setMensagem("")
          navigate("/")
        } 
        else {
          setMensagem("Senha incorreta")
        }
      }
      else {
        setMensagem("Email inválido")
      }
    }
  }

  return (
    <>
      <div className="container-fluid centraliza">
        <div className="card vidro" style={{ width: "44rem" }}>
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <p className="text-sm">{mensagem}</p>
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
