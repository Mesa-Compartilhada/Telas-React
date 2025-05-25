import React, { useEffect, useState } from "react";
import { AuthData } from "../../auth/AuthWrapper.js";
import Header from "../../components/Header_V2.jsx";
import { getDoacoesEmpresa } from "../../lib/api/doacao.js";
import LinhaDoacoes  from "./components/LinhaDoacoes.jsx";

export default function Historico() {
  const { user } = AuthData();
  const [dados, setDados] = useState(null);
  const pegarDados = async () => {
    let resultado = await getDoacoesEmpresa(user.id);
    resultado = resultado.filter(doacao => {
      return doacao.status === "CONCLUIDA" || doacao.status === "CANCELADA"
    })
    setDados(resultado);
  };
  useEffect(() => {
    pegarDados();
  }, []);
  return (
    <body>
      {dados ? (
        <>
          <Header></Header>
          <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50 h-dvh">
            <div className="mx-10 lg:mx-20 my-4 border-4 md:w-3/5 p-10 shadow-xl rounded-xl gradiente h-3/4 overflow-y-scroll">
              <table class="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Nome
                      </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Data criada
                      </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Data encerrada
                      </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Status
                      </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Tipo
                      </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((doacao) => {
                    return <LinhaDoacoes key={doacao.id} doacao={doacao}/>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </body>
  );
}
