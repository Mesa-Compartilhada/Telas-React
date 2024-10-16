import { useContext, useEffect, useState } from "react"
import { CardDoacao } from "./components/CardDoacao"
import { DashboardContext } from "../../pages/Dashboard"

export function ListaDoacoes({ getDoacoes, params = [] }) {
  const { doacoesAlteradas, setDoacoesAlteradas } = useContext(DashboardContext)

  const [doacoes, setDoacoes] = useState(null)

  useEffect(() => {
    getListaDeDoacoes()
  }, [doacoesAlteradas])

  const getListaDeDoacoes = async () => {
    let result = await getDoacoes(...params)
    setDoacoes(result)
  }

  return(
    <>
      {
        doacoes != null && doacoes.length > 0
        ? <div className="flex gap-2 overflow-x-auto">
         { doacoes.map((doacao) => 
            <CardDoacao key={doacao.id} doacao={ doacao } />
          ) } 
        </div>
         
        : <div className="flex flex-col gap-2 max-w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md">
            <p>Não há doações disponíveis</p>
          </div>
      }
    </>
  )
}