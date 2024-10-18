// Components:
import Header from "../../components/Header_V2.jsx/index.jsx"
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

//API
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useRef, useEffect, useState, createContext } from 'react';

import { AuthData } from "../../auth/AuthWrapper.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";
import { getDoacoes, getDoacoesByStatus, getDoacoesByStatusAndEmpresaDoadoraId, getDoacoesByStatusAndEmpresaRecebedorId, getDoacoesEmpresa } from "../../lib/api/doacao.js";
import { STATUS_DOACAO } from "../../constants/doacao.js";

export const DashboardContext = createContext()

export default function Dashboard() {
    
    const mapElement = useRef();
    const [map, setMap] = useState({});
    const { user } = AuthData()
    const [doacoesAlteradas, setDoacoesAlteradas] = useState(0)

    const [coordenadas, setCoordenadas] = useState(null);
    async function getListaDoacoes() {
        let doacao = await getDoacoesByStatus(STATUS_DOACAO.DISPONIVEL)
        let temp = []
        doacao.forEach(item => {
            let coordenada = {lng:item.empresaDoadora.endereco.longitude, lat:item.empresaDoadora.endereco.latitude}
            temp.push(coordenada)
        });
        setCoordenadas(temp)
    } 
    useEffect(() => {
        let map = tt.map({
            key: "aiGyPvdRv0jDJEKp1FFXqSyMbAunpuNH",
            container: mapElement.current,
            center: [-46.61991444711061, -23.68551324571913],
            zoom: 14
        });
        getListaDoacoes()
        setMap(map);
        return () => map.remove();
    }, []);

    useEffect(() => {
        if (coordenadas) {
            let mapa = map
            var marker 
            coordenadas.forEach(item => {
                marker = new tt.Marker()
                .setLngLat(item)
                .addTo(mapa);
                console.log(item)
            });
            setMap(mapa)
                
        }
    }, [coordenadas]); 

    return (
        <DashboardContext.Provider value={{doacoesAlteradas: doacoesAlteradas, setDoacoesAlteradas: setDoacoesAlteradas}}>
        <>
          <Header/>
            <div className="flex justify-center items-center pb-10">
                <div ref={mapElement} className="w-[1000px] h-[480px]"></div>
            </div>

            <section className="grid place-content-center p-24 gap-4">
                {
                    TIPO_EMPRESA.RECEBEDORA === user.tipo
                    ?
                    <>
                        <h1 className="text-2xl">Doações disponíveis</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatus} params={[STATUS_DOACAO.DISPONIVEL]} />
                        <hr />
                        <h1 className="text-2xl">Suas solicitações em andamento</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByStatusAndEmpresaRecebedorId} params={[STATUS_DOACAO.ANDAMENTO, user.id]} />
                    </>
                    :
                    <>
                        <h1 className="text-2xl">Suas doações</h1>
                        <ListaDoacoes getDoacoes={getDoacoesEmpresa} params={[user.id]} />
                    </>
                }
            </section>
        </>
        </DashboardContext.Provider>
    )
}
