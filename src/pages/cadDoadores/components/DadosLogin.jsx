import InputField from "../../../components/inputs/InputField"

export function DadosLogin(props) {
  const { mensagens, empresa, setEmpresa, cadastrarEmpresa } = props
  return(
    <div className="flex flex-col gap-5">
      <h4>Dados de login:</h4>
 
      <InputField type={"text"} label={"Email"} name={"email"} id={"email"} defaultValue={empresa.email} msg={mensagens.email} change={(e) => setEmpresa({...empresa, email: e.target.value})} />

      <InputField type={"password"} label={"Senha"} name={"senha"} id={"senha"} defaultValue={empresa.senha} msg={mensagens.senha} change={(e) => setEmpresa({...empresa, senha: e.target.value})} />
      
      <InputField type={"password"} label={"Confirmação de senha"} name={"confirmacaoDeSenha"} id={"confirmacaoDeSenha"} defaultValue={empresa.confirmacaoDeSenha} msg={mensagens.confirmacaoDeSenha} change={(e) => setEmpresa({...empresa, confirmacaoDeSenha: e.target.value})} />

      <button className="text-white pushable mt-2 bg-l-Abobora p-2 rounded-md disabled:opacity-80 enabled:hover:bg-opacity-80" type="button" onClick={() => cadastrarEmpresa()}>
        <span className="edge"></span>
        <span className="front">Enviar</span>
      </button>
    </div>
  )
}