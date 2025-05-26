import { useContext, useState } from "react"
import Modal from "../../modal/Modal";
import { Link } from "react-router-dom";
import { updateStatusDoacao } from "../../../lib/api/doacao";
import { AuthData } from "../../../auth/AuthWrapper";
import { STATUS_DOACAO } from "../../../constants/doacao";
import { DashboardContext } from "../../../pages/Dashboard";
import { TIPO_EMPRESA } from "../../../constants/empresa";

import icon_ok from "../../../assets/icon_ok.svg"
import icon_time from "../../../assets/icon_time.svg"
import { Basket, Trash } from "@phosphor-icons/react";

export function CardDoacao({ doacao }) {
  const { user } = AuthData()
  const tipoEmpresa = TIPO_EMPRESA[user.tipo]
  const { doacoesAlteradas, setDoacoesAlteradas } = useContext(DashboardContext)

  const [isSolicitarActive, setIsSolicitarActive] = useState(false);
  const [isCancelarSolicitacaoActive, setIsCancelarSolicitacaoActive] = useState(false);
  const [isConcluirActive, setIsConcluirActive] = useState(false);
  const [isCancelarDoacao, setIsCancelarDoacao] = useState(false)

  return (
    <div className="min-w-64 max-w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md my-6 ">
      <div className="flex flex-col px-4 transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer z-0" onClick={() => {
      
      }} key={doacao.id}>
        <p className="text-lg truncate">{doacao.nome}</p>
        <Link className="text-xs truncate link-default w-fit" to={`/perfil/${ doacao.empresaDoadora?.id }`}>{doacao.empresaDoadora?.nome ?? ""}</Link> 
        <div className="flex flex-row gap-2 my-2">
          <small className="opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataMaxRetirada}</small>
          <small className={`${doacao.status === STATUS_DOACAO.DISPONIVEL ? "bg-green-700" : "bg-yellow-700"} opacity-80 text-white p-1 rounded-md text-xs truncate`}>{doacao.status}</small>
        </div>
        <p className="opacity-80 text-sm truncate">{doacao.descricao}</p>
        <p className="opacity-80 text-sm truncate">{doacao.observacao}</p>

      </div>
      <div className="transform transition-transform duration-200 hover:scale-105">

      </div>
      <div className="flex flex-col gap-2 px-4">
        {
          doacao.status === STATUS_DOACAO.DISPONIVEL
          ?
          (
            user.tipo === TIPO_EMPRESA.RECEBEDORA
            ?
            <button className="btn-secondary w-fit my-2" onClick={() => setIsSolicitarActive(!isSolicitarActive)}><Basket size={20} /></button>
            :
            <button className="btn-red w-fit my-2" onClick={() => setIsCancelarDoacao(!isCancelarDoacao)}><Trash size={20} /></button>
          )
          : doacao.status === STATUS_DOACAO.ANDAMENTO
          && 
          (
            user.tipo === TIPO_EMPRESA.RECEBEDORA
            &&
            <button className="btn-red w-fit my-2" onClick={() => setIsCancelarSolicitacaoActive(!isCancelarSolicitacaoActive)}><Trash size={20} /></button>
          )
        }

        {
          doacao.status === STATUS_DOACAO.ANDAMENTO && user.tipo === TIPO_EMPRESA.DOADORA
          &&
          <button className="my-2 p-2 rounded-md bg-azul text-branco w-1/2 hover:bg-opacity-80" onClick={() => setIsConcluirActive(!isConcluirActive)}>
            { !doacao.empresaDoadoraConcluida ? "Confirmar entrega" : "Cancelar confirmação de entrega" }
          </button>
        }
        {
          doacao.status === STATUS_DOACAO.ANDAMENTO && user.tipo === TIPO_EMPRESA.RECEBEDORA
          &&
          <button className="my-2 p-2 rounded-md bg-azul text-branco w-1/2 hover:bg-opacity-80" onClick={() => setIsConcluirActive(!isConcluirActive)}>
            { !doacao.empresaRecebedoraConcluida ? "Confirmar recebimento" : "Cancelar confirmação de recebimento" }
          </button>
        }
        
        {
          isSolicitarActive
          &&
          <Modal setIsActive={setIsSolicitarActive}>
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-2xl">Confirmar Solicitação</h1>
              <p className="text-gray-500">Após a doação ser solicitada, receba o alimento nas dependências da empresa</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="btn-primary" onClick={() => [updateStatusDoacao(STATUS_DOACAO.ANDAMENTO, doacao.id, user.id, user.id).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsSolicitarActive(false)]}>Confirmar solicitação</button>
                <button className="btn-gray" onClick={() => setIsSolicitarActive(false)}>Cancelar</button>
              </div>
            </div>
          </Modal>
        }

        {
          isCancelarSolicitacaoActive
          &&
          <Modal setIsActive={setIsCancelarSolicitacaoActive}>
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-2xl">Cancelar Solicitação</h1>
              <p className="text-gray-500">Após a solicitação ser cancelada, a doação ficará disponível para outras instituições a solicitarem.</p>
              <p className="text-gray-500">Deseja prosseguir mesmo assim??</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="btn-red" onClick={() => [updateStatusDoacao(STATUS_DOACAO.DISPONIVEL, doacao.id, user.id, user.id).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsCancelarSolicitacaoActive(false)]}>Prosseguir</button>
                <button className="btn-gray" onClick={() => setIsCancelarSolicitacaoActive(false)}>Voltar</button>
              </div>
            </div>
          </Modal>
        }

        {
          isConcluirActive && tipoEmpresa === TIPO_EMPRESA.DOADORA
          &&
          <Modal setIsActive={setIsConcluirActive}>
            <div className="flex flex-col gap-4 p-4 text-gray-700">
              
              <h1 className="text-2xl text-black">Entrega</h1>
              <div className="flex flex-row">
                <p>{`${doacao.empresaRecebedora.nome}:`} </p> 
                <img src={ doacao.empresaRecebedoraConcluida ? icon_ok : icon_time } alt="Ícone de OK" className="size-4 ml-2 mt-1" />
              </div>

              <div className="flex flex-row">
                <p>Você:</p> 
                <img src={ doacao.empresaDoadoraConcluida ? icon_ok : icon_time } alt="Ícone de OK" className="size-4 ml-2 mt-1" />
              </div>

              <p>{ !doacao.empresaDoadoraConcluida ? "Deseja confirmar a entrega da doação?" : "Deseja prosseguir com o cancelamento da confirmação da entrega?" }</p>

              <div className="grid grid-cols-2 gap-2">
                <button className="btn-primary" onClick={() => [updateStatusDoacao(STATUS_DOACAO.CONCLUIDA, doacao.id, user.id).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsConcluirActive(false)]}>
                  {
                    !doacao.empresaDoadoraConcluida ? "Confirmar" : "Prosseguir"
                  }
                </button>
                <button className="btn-gray" onClick={() => setIsConcluirActive(false)}>Cancelar</button>
              </div>
            </div>
          </Modal>
        }

        {
          isConcluirActive && tipoEmpresa === TIPO_EMPRESA.RECEBEDORA
          &&
          <Modal setIsActive={setIsConcluirActive}>
            <div className="flex flex-col gap-4 p-4 text-gray-700">
              
              <h1 className="text-2xl text-black">Recebimento</h1>
              
              <div className="flex flex-row">
                <p>{`${doacao.empresaDoadora.nome}:`} </p> 
                <img src={ doacao.empresaDoadoraConcluida ? icon_ok : icon_time } alt="Ícone de OK" className="size-4 ml-2 mt-1" />
              </div>

              <div className="flex flex-row">
                <p>Você:</p> 
                <img src={ doacao.empresaRecebedoraConcluida ? icon_ok : icon_time } alt="Ícone de OK" className="size-4 ml-2 mt-1" />
              </div>
              
              <p>{ !doacao.empresaRecebedoraConcluida ? "Deseja confirmar o recebimento da doação?" : "Deseja prosseguir com o cancelamento da confirmação de recebimento?" }</p>

              <div className="grid grid-cols-2 gap-2">
                <button className="btn-primary" onClick={() => [updateStatusDoacao(STATUS_DOACAO.CONCLUIDA, doacao.id, user.id).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsConcluirActive(false)]}>
                  {
                    !doacao.empresaRecebedoraConcluida ? "Confirmar" : "Prosseguir"
                  }
                </button>
                <button className="btn-gray" onClick={() => setIsConcluirActive(false)}>Cancelar</button>
              </div>
            </div>
          </Modal>
        }

        {
          isCancelarDoacao
          &&
          <Modal setIsActive={setIsCancelarDoacao}>
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-2xl">Cancelar Doação</h1>
              <p>Após o cancelamento, sua doação ficará indisponível e não poderá ser solicitada pelas instituições</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="btn-red" onClick={() => [updateStatusDoacao(STATUS_DOACAO.CANCELADA, doacao.id, user.id).then(() => setDoacoesAlteradas(doacoesAlteradas+1)), setIsCancelarDoacao(false)]}>Confirmar</button>
                <button className="btn-gray" onClick={() => setIsCancelarDoacao(false)}>Manter doação</button>
              </div>
            </div>
          </Modal>
        }
      </div>     
    </div>
  )
}