import { useEffect, useState } from "react"
import { getDoacoes } from "../../lib/api/doacao"
import { CardDoacao } from "./components/CardDoacao"

export function ListaDoacoes() {
  const [doacoes, setDoacoes] = useState([])

  useEffect(() => {
    const getListaDeDoacoes = async () => {
      let result = await getDoacoes()
      setDoacoes(result)
    }
    getListaDeDoacoes()
  }, [])

  return(
    <>
      {
        doacoes.length > 0
        ? <div className="flex gap-2">
         { doacoes.map((doacao) => 
            <CardDoacao doacao={ doacao } />
          ) } 
        </div>
         
        : <div className="flex flex-col gap-2 max-w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md">
            <p>Não há doações disponíveis</p>
          </div>
      }
    </>
  )
}