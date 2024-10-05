import { useState } from "react";
import { login } from "../../lib/api/empresa";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/inputs/InputField";

import logo from "../../assets/MC_Logo.svg"


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
          const { id, tipo } = result
          const usuario = { id, tipo }
          localStorage.setItem("user-mesa-compartilhada", JSON.stringify(usuario))
          setMensagens({})
          navigate("/dashboard")
      }
      else {
        setMensagem("Dados incorretos")
      }
    }
  }

  return (
    <>
      <div className="centraliza">
        <div className="shadow-xl rounded-2xl p-7 gradiente" style={{ width: "44rem" }}>
          <div className="flex flex-col">
            <img src={logo} className="md:w-64 w-40 pt-2 md:p-3 self-center" alt="" />
            <h5 className="text-xl">Login</h5>
            <small className="text-xs ml-2 opacity-80 my-2">{mensagem || <>&nbsp;</>}</small>
            <form className="mt-3 flex flex-col gap-2">
              <InputField type={"email"} label={"Email"} name={"email"} id={"email"} msg={mensagens.email} change={(e) => setDadosLogin({...dadosLogin, email: e.target.value})} />
              
              <InputField type={"password"} label={"Senha"} name={"senha"} id={"senha"} msg={mensagens.senha} change={(e) => setDadosLogin({...dadosLogin, senha: e.target.value})} />

              <button
                className="btn-primary"
                type="button"
                onClick={() => fazerLogin()}
              >
                <span className="edge"></span>
                <span className="front">Enviar</span>
              </button>
              <Link className="text-xs" to={"/cadastro"}>Não possui cadastro?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
