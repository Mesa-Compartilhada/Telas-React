import { useState } from "react"
import Modal from "../../modal/Modal";
import { Link } from "react-router-dom";
import { updateStatusDoacao } from "../../../lib/api/doacao";
import { AuthData } from "../../../auth/AuthWrapper";
import { STATUS_DOACAO } from "../../../constants/doacao";

export function CardDoacao(props) {
  const { doacao } = props
  const { user } = AuthData()

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md" key={doacao.id}>
      <p className="text-lg truncate">{doacao.nome}</p>
      <a className="opacity-80 text-xs truncate" href="#">{doacao.empresaDoadora.nome}</a>
      <div className="flex flex-row gap-2 my-2">
        <small className="opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataMaxRetirada}</small>
        <small className={`${doacao.status === STATUS_DOACAO.DISPONIVEL ? "bg-green-700" : "bg-yellow-700"} opacity-80 text-white p-1 rounded-md text-xs truncate`}>{doacao.status}</small>
      </div>
      <p className="opacity-80 text-sm">{doacao.descricao}</p>
      <p className="opacity-80 text-sm">{doacao.observacao}</p>
      {
        doacao.status === STATUS_DOACAO.DISPONIVEL
        ?
        <button className="my-2 p-2 rounded-md bg-l-Abobora text-branco w-1/2 hover:bg-opacity-80" onClick={() => setIsActive(!isActive)}>Solicitar</button>
        :
        <button className="my-2 p-2 rounded-md bg-l-Abobora text-branco w-1/2 hover:bg-opacity-80" onClick={() => updateStatusDoacao(STATUS_DOACAO.DISPONIVEL, doacao.id, user.id)}>Cancelar Solicitação</button>
      }
      
      {
        isActive
        &&
        <Modal setIsActive={setIsActive}>
          <div className="flex flex-col">
            <h1 className="text-2xl">Confirmar Solicitação</h1>
            <p className="text-gray-500">Confirme os detalhes da doação solicitada</p>
            <Link to={"/termos"}>Termos e condições</Link>
            <div className="grid grid-cols-2">
              <button className="btn-primary" onClick={() => [updateStatusDoacao(STATUS_DOACAO.ANDAMENTO, doacao.id, user.id), setIsActive(false)]}>Confirmar</button>
              <button className="btn-red" onClick={() => setIsActive(false)}>Cancelar</button>
            </div>
          </div>
        </Modal>
      }
    </div>
  )
}