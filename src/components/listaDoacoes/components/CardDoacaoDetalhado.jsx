import { Link } from "react-router-dom";
import { STATUS_DOACAO } from "../../../constants/doacao";
import { useState } from "react";

export function CardDoacaoDetalhado({ doacao }) {
  const [aba, setAba] = useState(1)

  return (
    <div className="p-2">
      <p className="text-lg truncate">{doacao.nome}</p>
      <Link className="text-xs truncate link-default w-fit" to={`/perfil/${ doacao.empresaDoadora?.id }`}>{doacao.empresaDoadora?.nome ?? ""}</Link> 

      <div className="flex items-center">
        <small className={`${doacao.status === STATUS_DOACAO.DISPONIVEL ? "bg-green-700" : "bg-yellow-700"} opacity-80 text-white p-1 rounded-md text-sm truncate`}>{doacao.status}</small>
      </div>

      <div className="my-4 flex flex-col gap-y-2">
        <p className="opacity-80 text-sm">{doacao.descricao}</p>
        <p className="opacity-80 text-sm">Obs: {doacao.observacao}</p>
      </div>

      <div className="flex flex-col gap-2 my-2">
        
        <div className="flex items-center">
          <label className="text-xs" htmlFor="">Data de validade: </label>
          <small className="w-fit opacity-80 bg-yellow-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataValidade}</small>
        </div>
      </div>

      <div className="flex flex-col justify-normal">
        <div className="flex gap-2 my-2">
          <button className="btn-primary disabled:opacity-50" onClick={() => setAba(1)} disabled={aba===1}>Especificações</button>
          <button className="btn-primary disabled:opacity-50" onClick={() => setAba(2)} disabled={aba===2}>Datas e horários</button>
        </div>
        {
          aba === 1
          ?
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <label className="text-xs" htmlFor="">Tipo de alimento: </label>
              <small className="w-fit opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs truncate">{doacao.tipoAlimento}</small>
            </div>
            <div className="flex items-center">
              <label className="text-xs" htmlFor="">Tipo de armazenamento: </label>
              <small className="w-fit opacity-80 bg-yellow-700 text-white p-1 rounded-md text-xs truncate">{doacao.tipoArmazenamento}</small>
            </div>
          </div>
          :
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <label className="text-xs" htmlFor="">Data máx. de retirada: </label>
              <small className="w-fit opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataMaxRetirada}</small>
            </div>
            <div className="flex items-center">
              <label className="text-xs" htmlFor="">Data de validade: </label>
              <small className="w-fit opacity-80 bg-yellow-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataValidade}</small>
            </div>
            <div className="flex items-center">
              <label className="text-xs" htmlFor="">Data de fabricação: </label>
              <small className="w-fit opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs truncate">{doacao.dataFabricacao}</small>
            </div>
          </div>
        }
      </div>
    </div>
  )
}