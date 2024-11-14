// Components:
import Header from "../../components/Header_V2.jsx/index.jsx"
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

//API
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useRef, useEffect, useState, createContext } from 'react';

import { AuthData } from "../../auth/AuthWrapper.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";
import { getDoacoes, getDoacoesByStatus, getDoacoesByStatusAndEmpresaDoadoraId, getDoacoesByStatusAndEmpresaRecebedoraId, getDoacoesEmpresa } from "../../lib/api/doacao.js";
import { STATUS_DOACAO } from "../../constants/doacao.js";

export const DashboardContext = createContext()

export default function Dashboard() {
    
    const mapElement = useRef();
    const [map, setMap] = useState({});
    const { user } = AuthData()
    const [doacoesAlteradas, setDoacoesAlteradas] = useState(0)

    const [popEmpresa, setPopEmpresa] = useState(null);
    async function getListaEmpresa() {
        let doacao = await getDoacoesByStatus(STATUS_DOACAO.DISPONIVEL)
        let tempPop = []
        doacao.forEach(item => {
            tempPop.push(item.empresaDoadora)
        });
        setPopEmpresa(tempPop)
    } 

    useEffect(() => {
        let map = tt.map({
            key: "aiGyPvdRv0jDJEKp1FFXqSyMbAunpuNH",
            container: mapElement.current,
            center: [-46.61991444711061, -23.68551324571913],
            zoom: 14
        });
        
        getListaEmpresa()
        setMap(map);
        return () => map.remove();
    }, []);

    useEffect(() => {
        if (popEmpresa) {
            let mapa = map
            var marker
            let popup
            var markerHeight = 50
            let popupOffsets = {
                'bottom': [0, -markerHeight]
            }
            popEmpresa.forEach(item => {
                popup = new tt.Popup({offset: popupOffsets, className: 'my-class'})
                .setLngLat({lng:item.endereco.longitude, lat:item.endereco.latitude})
                .setHTML(item.nome)
                .addTo(mapa);
                marker = new tt.Marker()
                .setLngLat({lng:item.endereco.longitude, lat:item.endereco.latitude}).setPopup(popup)
                .addTo(mapa)
            });
            setMap(mapa)
        }
    }, [popEmpresa]);

    return (
        <DashboardContext.Provider value={{doacoesAlteradas: doacoesAlteradas, setDoacoesAlteradas: setDoacoesAlteradas}}>
        <>
          <Header/>
            <div className="grid place-content-center py-4 px-24 gap-4">
                <h1 className="text-2xl">Localize empresas doadoras:</h1>
                <div ref={mapElement} className="w-[1160px] h-[360px]"></div>
            </div>

            <hr />

            <section className="grid place-content-center py-6 px-24 gap-2">
                {
                    TIPO_EMPRESA.RECEBEDORA === user.tipo
                    ?
                    <>
                        <h1 className="text-2xl">Doações disponíveis</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatus} params={[STATUS_DOACAO.DISPONIVEL]} />
                        <hr />
                        <h1 className="text-2xl">Suas solicitações em andamento</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatusAndEmpresaRecebedoraId} params={[STATUS_DOACAO.ANDAMENTO, user.id]} />
                    </>
                    :
                    <>
                        <h1 className="text-2xl">Suas doações disponíveis</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatusAndEmpresaDoadoraId} params={[STATUS_DOACAO.DISPONIVEL, user.id]} />
                        <hr />
                        <h1 className="text-2xl">Suas doações em andamento</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatusAndEmpresaDoadoraId} params={[STATUS_DOACAO.ANDAMENTO, user.id]} />
                    </>
                }
            </section>
        </>
        </DashboardContext.Provider>
    )
}
