import { useState } from "react"
import InputField from "../../../components/inputs/InputField"
import TermosDeUso from "../../../components/termosDeUso/TermosDeUso"
import Modal from "../../../components/modal/Modal"

export function DadosLogin({ mensagens, empresa, setEmpresa, cadastrarEmpresa, aceitarTermos, setAceitarTermos }) {

  const [isTermosActive, setIsTermosActive] = useState(false)

  return(
    <div className="flex flex-col gap-5">
      <h4>Dados de login:</h4>
 
      <InputField type={"text"} label={"Email"} name={"email"} id={"email"} defaultValue={empresa.email} msg={mensagens.email} change={(e) => setEmpresa({...empresa, email: e.target.value})} />

      <InputField type={"password"} label={"Senha"} name={"senha"} id={"senha"} defaultValue={empresa.senha} msg={mensagens.senha} change={(e) => setEmpresa({...empresa, senha: e.target.value})} />
      
      <InputField type={"password"} label={"Confirmação de senha"} name={"confirmacaoDeSenha"} id={"confirmacaoDeSenha"} defaultValue={empresa.confirmacaoDeSenha} msg={mensagens.confirmacaoDeSenha} change={(e) => setEmpresa({...empresa, confirmacaoDeSenha: e.target.value})} />
      <p className="text-xs flex gap-2 items-center"><input type="checkbox" onChange={(e) => { setAceitarTermos(e.target.checked) }}></input> Li e concordo com os <button className="text-xs text-azul link-default w-fit" onClick={(e) => { 
        e.preventDefault()
        setIsTermosActive(true) 
        }}>termos de uso</button></p>

        {
        isTermosActive
        &&
        <Modal setIsActive={setIsTermosActive}>
          <TermosDeUso />
        </Modal>
      }
    </div>
  )
}