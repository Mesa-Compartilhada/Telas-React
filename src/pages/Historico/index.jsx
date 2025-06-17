import React, { useEffect, useState } from "react";
import { AuthData } from "../../auth/AuthWrapper.js";
import { getDoacoesByFilter, getDoacoesEmpresa } from "../../lib/api/doacao.js";
import LinhaDoacoes  from "./components/LinhaDoacoes.jsx";
import LinhaDoacoesSkeleton from "./components/LinhaDoacoesSkeleton.jsx";
import { STATUS_DOACAO } from "../../constants/doacao.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";

export default function Historico() {
  const { user } = AuthData();
  const [dados, setDados] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const pegarDados = async () => {
    let resultado
    if(user.tipo === TIPO_EMPRESA.DOADORA) {
      resultado = await getDoacoesByFilter({ "status": [STATUS_DOACAO.CONCLUIDA, STATUS_DOACAO.CANCELADA], "empresaDoadoraId": user.id });
    }
    else {
    
      resultado = await getDoacoesByFilter({ "status": [STATUS_DOACAO.CONCLUIDA, STATUS_DOACAO.CANCELADA], "empresaRecebedoraId": user.id });
    }
    console.log(resultado)
    setDados(resultado);
    setIsLoading(false)
  };
  useEffect(() => {
    pegarDados();
  }, [user]);
  
  return (
    <div>
      <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50 h-dvh">
        <div className="mx-10 lg:mx-20 my-4 border-4 p-10 shadow-xl rounded-xl gradiente h-3/4 overflow-y-scroll">
          <table class="w-full text-left table-auto min-w-max">
            <thead className="">
              <tr>
                <th class="w-[150px] p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Nome
                  </p>
                </th>
                <th class="w-[150px] p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Data criada
                  </p>
                </th>
                <th class="w-[150px] p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Data encerrada
                  </p>
                </th>
                <th class="w-[150px] p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Status
                  </p>
                </th>
                <th class="w-[150px] p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Tipo
                  </p>
                </th>
                <th class="w-[50px] p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                isLoading
                &&
                <LinhaDoacoesSkeleton />
              }
              {
                !isLoading
                &&
                dados
                &&
                dados.map((doacao) => {
                  return <LinhaDoacoes key={doacao.id} doacao={doacao}/>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
