import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../pages/Dashboard";
import { CardDoacao } from "./components/CardDoacao";
import { Package } from "@phosphor-icons/react";
import { getDoacoesByFilter } from "../../lib/api/doacao";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import CardDoacaoSkeleton from "./components/CardDoacaoSkeleton";

export function ListaDoacoes({ getDoacoes, params = [], filtros }) {
  const { doacoesAlteradas, setDoacoesAlteradas } =
    useContext(DashboardContext);

  const [doacoes, setDoacoes] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    const getListaDeDoacoes = async () => {
      let result = await getDoacoesByFilter(filtros);
      setDoacoes(result);
    };
    getListaDeDoacoes();
  }, [filtros]);

  useEffect(() => {
    if(doacoes !== null) {
      setIsLoading(false)
    }
  }, [doacoes])

  if(isLoading) {
    return (
      <div className="flex justify-center flex-wrap overflow-y-auto gap-5 inset-6">
        <CardDoacaoSkeleton />
        <CardDoacaoSkeleton />
        <CardDoacaoSkeleton />
        <CardDoacaoSkeleton />
      </div>
    )
  }
  if(!isLoading && doacoes.length > 0) {
    return (
      <div className="flex justify-center flex-wrap overflow-y-auto h-[calc(50vh-50px)] gap-5 inset-6">
        {doacoes.map((doacao) => (
          <CardDoacao key={doacao.id} doacao={doacao} />
        ))}
      </div>
    )
  }
  if(!isLoading && doacoes.length === 0) {
    return (
      <div className="flex gap-2 bg-white rounded-xl p-10 shadow-gray-300 shadow-md items-center">
        <Package size={100} />
        <p className="text-lg">Não há doações disponíveis nessa lista no momento</p>
      </div>   
    )
  }
}
