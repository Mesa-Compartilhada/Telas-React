import { useContext, useState } from "react"
import Modal from "../../modal/Modal";
import { Link } from "react-router-dom";
import { updateStatusDoacao } from "../../../lib/api/doacao";
import { AuthData } from "../../../auth/AuthWrapper";
import { STATUS_DOACAO } from "../../../constants/doacao";
import { DashboardContext } from "../../../pages/Dashboard";
import { TIPO_EMPRESA } from "../../../constants/empresa";

export function CardDoacao({ doacao }) {
  const { user } = AuthData()
  const { doacoesAlteradas, setDoacoesAlteradas } = useContext(DashboardContext)

  const [isSolicitarActive, setIsSolicitarActive] = useState(false);
  const [isCancelarActive, setIsCancelarActive] = useState(false);

  return (
    <div className="flex flex-col w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md my-6" key={doacao.id}>
      <p className="text-lg truncate">{doacao.nome}</p>
      <a className="opacity-80 text-xs truncate" href="#">{doacao.empresaDoadora?.nome ?? ""}</a>
      <div className="flex flex-row gap-2 my-2">
        <small className="opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataMaxRetirada}</small>
        <small className={`${doacao.status === STATUS_DOACAO.DISPONIVEL ? "bg-green-700" : "bg-yellow-700"} opacity-80 text-white p-1 rounded-md text-xs truncate`}>{doacao.status}</small>
      </div>
      <p className="opacity-80 text-sm truncate">{doacao.descricao}</p>
      <p className="opacity-80 text-sm truncate">{doacao.observacao}</p>
      {
        user.tipo === TIPO_EMPRESA.RECEBEDORA
        &&
        (
          doacao.status === STATUS_DOACAO.DISPONIVEL
          ?
          <button className="my-2 p-2 rounded-md bg-l-Abobora text-branco w-1/2 hover:bg-opacity-80" onClick={() => setIsSolicitarActive(!isSolicitarActive)}>Solicitar</button>
          :
          <button className="my-2 p-2 rounded-md bg-l-Abobora text-branco w-1/2 hover:bg-opacity-80" onClick={() => setIsCancelarActive(!isCancelarActive)}>Cancelar Solicitação</button>
        )
      }
      
      {
        isSolicitarActive
        &&
        <Modal setIsActive={setIsSolicitarActive}>
          <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl">Confirmar Solicitação</h1>
            <p className="text-gray-500">Confirme os detalhes da doação solicitada</p>
            <Link rel="noopener noreferrer" target="_blank" to={"/termos"}>Termos e condições</Link>
            <div className="grid grid-cols-2">
              <button className="btn-primary" onClick={() => [updateStatusDoacao(STATUS_DOACAO.ANDAMENTO, doacao.id, user.id,).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsSolicitarActive(false)]}>Confirmar Solicitação</button>
              <button className="btn-red" onClick={() => setIsSolicitarActive(false)}>Cancelar</button>
            </div>
          </div>
        </Modal>
      }

      {
        isCancelarActive
        &&
        <Modal setIsActive={setIsCancelarActive}>
          <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl">Cancelar Solicitação</h1>
            <p className="text-gray-500">Confirme os detalhes da doação solicitada a ser cancelada</p>
            <div className="grid grid-cols-2">
              <button className="btn-primary" onClick={() => [updateStatusDoacao(STATUS_DOACAO.DISPONIVEL, doacao.id, user.id).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsCancelarActive(false)]}>Confirmar Cancelamento</button>
              <button className="btn-red" onClick={() => setIsCancelarActive(false)}>Cancelar</button>
            </div>
          </div>
        </Modal>
      }
    </div>
  )
}