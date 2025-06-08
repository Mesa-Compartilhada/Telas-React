import { useEffect, useState } from "react";
import { CardDoacao } from "./components/CardDoacao";
import { Package } from "@phosphor-icons/react";
import { getDoacoesByFilter } from "../../lib/api/doacao";
import CardDoacaoSkeleton from "./components/CardDoacaoSkeleton";
import FiltroDoacoes from "./components/FiltroDoacoes";
import { TIPO_ALIMENTO } from "../../constants/doacao";

export function ListaDoacoes({ filtros, ativarFiltro }) {

  const [doacoes, setDoacoes] = useState([]);
  const [doacoesExibidas, setDoacoesExibidas] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const [tiposAlimentos, setTiposAlimentos] = useState([1, 2, 3, 4, 5])
  const [filtrando, setFiltrando] = useState(false)

  useEffect(() => {
    const getListaDeDoacoes = async () => {
      setIsLoading(true)
      let result = await getDoacoesByFilter(filtros);
      setDoacoes(result);
      setDoacoesExibidas(result)
      setIsLoading(false)
    };
    getListaDeDoacoes();
  }, [filtros]);

  // useEffect para quando alterar os filtros, atualizar lista LOCALMENTE
  useEffect(() => {
    setFiltrando(true)
    const novas = doacoes.filter((doacao) =>
      tiposAlimentos.includes(TIPO_ALIMENTO[doacao.tipoAlimento])
    )
    setDoacoesExibidas(novas)
    const timer = setTimeout(() => {
      setFiltrando(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [tiposAlimentos, doacoes])

  if(isLoading || filtrando) {
    return (
      <div>
        {
          ativarFiltro
          &&
          <FiltroDoacoes tiposAlimentos={ tiposAlimentos } setTiposAlimentos={ setTiposAlimentos } />
        }
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-y-scroll h-[300px] min-h-[300px] p-6 pb-8">
          <CardDoacaoSkeleton />
          <CardDoacaoSkeleton />
          <CardDoacaoSkeleton />
          <CardDoacaoSkeleton />
        </div>
      </div>
    )
  }
  if(!isLoading && doacoesExibidas.length > 0) {
    return (
      <div>
        {
          ativarFiltro
          &&
          <FiltroDoacoes tiposAlimentos={ tiposAlimentos } setTiposAlimentos={ setTiposAlimentos } />
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-y-scroll h-[300px] min-h-[300px] p-6 pb-8">
          {doacoesExibidas.map((doacao) => (
            <CardDoacao key={doacao.id} doacao={doacao} />
          ))}
        </div>
      </div>
    )
  }
  if(!isLoading && doacoesExibidas.length === 0) {
    return (
      <div>
        {
          ativarFiltro
          &&
          <FiltroDoacoes tiposAlimentos={ tiposAlimentos } setTiposAlimentos={ setTiposAlimentos } />
        }
        <div className="flex gap-2 bg-white rounded-xl p-10 shadow-gray-300 shadow-md items-center">
          <Package size={100} />
          <p className="text-lg">Não há doações disponíveis nessa lista no momento</p>
        </div>   
      </div>
    )
  }
}
