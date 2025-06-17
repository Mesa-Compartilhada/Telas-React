import { MapPin, Envelope, User } from "@phosphor-icons/react"
import { TIPO_EMPRESA } from "../../constants/empresa"
import { useEffect, useState } from "react"
import { STATUS_DOACAO } from "../../constants/doacao"
export  const CardPerfil = ({ empresa }) => {
    const [doacoesRecentes, setDoacoesRecentes] = useState(0)

    /* useEffect(() => {
        if(empresa.tipo === TIPO_EMPRESA.DOADORA) {
            let doacoes = empresa.doacoes.filter((item) => {
                let data = new Date()
                data.setMonth(data.getMonth() - 1)
                data.setHours(0, 0, 0, 0)

                let dataEncerrada = new Date(item.dataEncerrada)
                dataEncerrada.setHours(0, 0, 0, 0)

                if(item.status === STATUS_DOACAO.CONCLUIDA && dataEncerrada >= data) {
                    return true
                }
                return false
            })
            setDoacoesRecentes(doacoes)
        }
    }, []) */

    return (
        <div className="w-fit bg-white rounded-xl p-6 shadow-gray-300 shadow-md m-auto">
            <div className="flex flex-col items-center gap-2">
                <div className=" rounded-full border-2 border-black p-2">{ <User className="opacity-60" size={100} />}</div>
                <p>{ empresa.nome }</p>
                <p>{ empresa.categoria.split("")[0]+empresa.categoria.substring(1).toLowerCase() } - { empresa.tipo.split("")[0]+empresa.tipo.substring(1).toLowerCase() }</p>
                
                <div className="flex content-center gap-2">
                    { <MapPin size={20} /> } <span className="cursor-pointer" title={empresa.endereco.cep}>{ empresa.endereco.bairro} </span>
                    { <Envelope size={20} /> }<span className="cursor-pointer" title={empresa.email}> Entre em contato</span>
                </div>
                {/* {
                    <div className="bg-green-500 text-white p-2 rounded-lg">
                        <p>{ doacoesRecentes.length > 0 ? doacoesRecentes.length : 0 } doações concluídas</p>
                    </div>
                } */}
            </div>
        </div>
        
    )
}