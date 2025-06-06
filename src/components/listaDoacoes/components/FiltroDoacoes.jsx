import { BeerBottle, Bread, Carrot, CoffeeBean, Fish, Funnel } from "@phosphor-icons/react";
import { useState } from "react";
export default function FiltroDoacoes({ tiposAlimentos, setTiposAlimentos }) {

    function filtrar(tipo) {
        if(!tiposAlimentos.includes(tipo)) {
            setTiposAlimentos([...tiposAlimentos, tipo])
        }
        else {
            setTiposAlimentos(tiposAlimentos.filter((item) => item !== tipo))
        }
    }

    const [abrirFiltros, setAbrirFiltros] = useState(false)

    return (
        <div className="flex justify-start gap-4">
            <div className="self-start">
                <button className="btn-primary" onClick={() => setAbrirFiltros(!abrirFiltros)}><Funnel size={20} /></button>
            </div>
            {
                abrirFiltros
                &&
                <div className="flex w-fit gap-3 justify-around text-xs min-w-64">
                    <button type="button" className={`btn-primary !bg-white !text-yellow-600 border-2 border-yellow-600 flex gap-2 items-center transform transition-transform duration-200 hover:scale-105 ${!tiposAlimentos.includes(1) && "opacity-30"}`} onClick={ () => filtrar(1) }> <Bread size={20} />Caseiro</button>
                    <button type="button" className={`btn-primary !bg-white !text-gray-500 border-2 border-gray-500 flex gap-2 items-center transform transition-transform duration-200 hover:scale-105 ${!tiposAlimentos.includes(2) && "opacity-50"}`} onClick={ () =>     filtrar(2) }><BeerBottle size={20} />Industrializado</button>
                    <button type="button" className={`btn-primary !bg-white !text-blue-500 border-2 border-blue-500 flex gap-2 items-center transform transition-transform duration-200 hover:scale-105 ${!tiposAlimentos.includes(3) && "opacity-50"}`} onClick={ () =>     filtrar(3) }><Fish size={20} /> Perecível</button>
                    <button type="button" className={`btn-primary !bg-white !text-red-500 border-2 border-red-500 flex gap-2 items-center transform transition-transform duration-200 hover:scale-105 ${!tiposAlimentos.includes(4) && "opacity-50"}`} onClick={ () =>       filtrar(4) }><CoffeeBean size={20} /> Não Perecível</button>
                    <button type="button" className={`btn-primary !bg-white !text-orange-500 border-2 border-orange-500 flex gap-2 items-center transform transition-transform duration-200 hover:scale-105 ${!tiposAlimentos.includes(5) && "opacity-50"}`} onClick={ () => filtrar(5) }> <Carrot size={20} />In natura</button>
                </div>
            }
        </div>
    )
}