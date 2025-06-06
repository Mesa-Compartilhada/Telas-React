import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../pages/Dashboard";
import { CardDoacao } from "./components/CardDoacao";
import { Package } from "@phosphor-icons/react";
import { getDoacoesByFilter } from "../../lib/api/doacao";

export function ListaDoacoes({ getDoacoes, params = [], filtros }) {
  const { doacoesAlteradas, setDoacoesAlteradas } =
    useContext(DashboardContext);

  const [doacoes, setDoacoes] = useState(null);

  
  useEffect(() => {
    const getListaDeDoacoes = async () => {
      let result = await getDoacoesByFilter(filtros);
      setDoacoes(result);
    };
    getListaDeDoacoes();
  }, [filtros]);


  return (
    <>
      {doacoes != null && doacoes.length > 0 ? (
        <div className="flex justify-around flex-wrap overflow-y-auto inset-6">
          {doacoes.map((doacao) => (
            <CardDoacao key={doacao.id} doacao={doacao} />
          ))}
        </div>
      ) : (
        <div className="flex gap-2  bg-white rounded-xl p-10 shadow-gray-300 shadow-md items-center">
          <Package size={100} />
          <p className="text-lg">Não há doações disponíveis nessa lista no momento</p>
        </div>
      )}
    </>
  );
}
