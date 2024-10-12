// Components:
import Header from "../../components/Header_V2.jsx/index.jsx"
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

//API
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useRef, useEffect, useState, createContext } from 'react';

import { AuthData } from "../../auth/AuthWrapper.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";
import { getDoacoesByStatus, getDoacoesEmpresa } from "../../lib/api/doacao.js";
import { STATUS_DOACAO } from "../../constants/doacao.js";

export const DashboardContext = createContext()

export default function Dashboard() {
    
    const mapElement = useRef();
    const [map, setMap] = useState({});
    const { user } = AuthData()
    const [doacoesAlteradas, setDoacoesAlteradas] = useState(0)

    useEffect(() => {
        let map = tt.map({
            key: "aiGyPvdRv0jDJEKp1FFXqSyMbAunpuNH",
            container: mapElement.current,
            center: [-46.61991444711061, -23.68551324571913],
            zoom: 14
        });
        setMap(map);
        return () => map.remove();
    }, []);

    return (
        <DashboardContext.Provider value={{doacoesAlteradas: doacoesAlteradas, setDoacoesAlteradas: setDoacoesAlteradas}}>
        <>
          <Header/>
            <div className="flex justify-center items-center pb-10">
                <div ref={mapElement} className="w-[1000px] h-[480px]"></div>
            </div>

            <section className="grid place-content-center gap-4">
                {
                    TIPO_EMPRESA.RECEBEDORA === user.tipo
                    ?
                    <>
                        <h1 className="text-2xl">Doações disponíveis</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatus} params={STATUS_DOACAO.DISPONIVEL} />
                        <hr />
                        <h1 className="text-2xl">Suas solicitações em andamento</h1>
                        <ListaDoacoes getDoacoes={getDoacoesEmpresa} params={user.id} />
                    </>
                    :
                    <>
                        <h1 className="text-2xl">Suas doações disponíveis</h1>
                        <ListaDoacoes getDoacoes={getDoacoesEmpresa} params={user.id} />
                    </>
                }
            </section>
        </>
        </DashboardContext.Provider>
    )
}
