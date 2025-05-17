import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/inputs/InputField";
import seta from "../../assets/seta_voltar.svg";
import logo from "../../assets/MC_Logo.svg"
import { AuthData } from "../../auth/AuthWrapper";
import { toast } from "react-toastify";


export default function Login() {

  const navigate = useNavigate()
  const { loginUser } = AuthData()
  const [dadosLogin, setDadosLogin] = useState({})
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
    if(!dadosLogin.senha || dadosLogin.senha.length < 8) {
      senha = "A senha deve ter no mínimo 8 caracteres"
      r = false
    }
    setMensagens({email, senha})
    return r
  }

  async function fazerLogin() {
    validarDados()
    if(dadosLogin.email && dadosLogin.senha) {
      const result = await loginUser(dadosLogin.email, dadosLogin.senha);
      if(result) {
        navigate("/dashboard")
      }
      else {
        toast.error("Dados incorretos")
      }
    }
  }

  return (
    <>
      <div className="centraliza">
        <div className="shadow-xl rounded-2xl p-7 gradiente" style={{ width: "44rem" }}>
          <div className="flex flex-col">
            <Link className="text-xs ml-3 flex gap-1 flex-row-reverse" to={"/"}>
              <img src={seta} className="w-4" alt="" />
              voltar ao inicio
            </Link>
            <img src={logo} className="md:w-64 w-40 pt-2 md:p-3 self-center" alt="" />
            <h5 className="text-xl">Login</h5>
            <form className="mt-3 flex flex-col gap-2">
              <InputField type={"email"} label={"Email"} name={"email"} id={"email"} msg={mensagens.email} change={(e) => setDadosLogin({...dadosLogin, email: e.target.value})} />
              
              <InputField type={"password"} label={"Senha"} name={"senha"} id={"senha"} msg={mensagens.senha} change={(e) => setDadosLogin({...dadosLogin, senha: e.target.value})} />

              <button
                className="btn-primary"
                type="button"
                onClick={() => fazerLogin()}
              >
                <span className="edge"></span>
                <span className="front">Entrar</span>
              </button>
              <Link className="text-xs" to={"/cadastro"}>Não possui cadastro?</Link>
              <Link className="text-xs" to={"/recuperar-senha"}>Esqueceu sua senha?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
