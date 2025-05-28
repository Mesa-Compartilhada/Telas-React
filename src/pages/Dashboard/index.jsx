// Components:
import Header from "../../components/Header_V2.jsx/index.jsx"
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

import { AuthData } from "../../auth/AuthWrapper.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";
import { getDoacoesByFilter, getDoacoesByStatus, getDoacoesByStatusAndEmpresaDoadoraId, getDoacoesByStatusAndEmpresaRecebedoraId } from "../../lib/api/doacao.js";
import { STATUS_DOACAO } from "../../constants/doacao.js";

import { createContext, useEffect, useState } from 'react';
import MapaDisponiveis from "./components/mapaDisponiveis.jsx";
import FiltroDoacoes from "../../components/listaDoacoes/components/FiltroDoacoes.jsx";

export const DashboardContext = createContext()

export default function Dashboard() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);

    const [mostrarMapa, setMostrarMapa] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setMostrarMapa(true);
          setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100); // força scroll no momento certo
        }, 100);
      
        return () => clearTimeout(timer);
      }, []);

      
    const { user } = AuthData()
    const [doacoesAlteradas, setDoacoesAlteradas] = useState(0)
    const [tiposAlimentos, setTiposAlimentos] = useState([1, 2, 3, 4, 5])

    return (
        <DashboardContext.Provider value={{doacoesAlteradas: doacoesAlteradas, setDoacoesAlteradas: setDoacoesAlteradas}}>
        <Header/>
        <p className={`mx-20 mb-10 text-sm ${user.tipo === TIPO_EMPRESA.DOADORA ? 'text-azul-escuro' : 'text-l-Abobora'}`} >{user.tipo === TIPO_EMPRESA.DOADORA ? `Obrigado por doar conosco, ${user.nome}!` : `Obrigado por fazer a diferença, ${user.nome}!`}</p>

        <section className="grid place-content-center pb-10 px-10 gap-4">
            {
                TIPO_EMPRESA.RECEBEDORA === user.tipo
                ?
                <>
                    <div className="flex justify-center">
                        <FiltroDoacoes tiposAlimentos={ tiposAlimentos } setTiposAlimentos={ setTiposAlimentos } />
                    </div>
                    <h1 className="text-2xl">Doações disponíveis</h1>
                    <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.DISPONIVEL], "tipoAlimento": tiposAlimentos }} />
                    <hr />
                    <h1 className="text-2xl">Suas solicitações em andamento</h1>
                    <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.ANDAMENTO], "empresaRecebedoraId": user.id }} />
                </>
                :
                <>
                    <div className="flex justify-center">
                        <FiltroDoacoes tiposAlimentos={ tiposAlimentos } setTiposAlimentos={ setTiposAlimentos } />
                    </div>
                    <h1 className="text-2xl">Suas doações disponíveis</h1>
                    <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.DISPONIVEL], "empresaDoadoraId": user.id, "tipoAlimento": tiposAlimentos }} />
                    <hr />
                    <h1 className="text-2xl">Suas doações em andamento</h1>
                    <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.ANDAMENTO], "empresaDoadoraId": user.id }} />
                </>
            }
        </section>

        { mostrarMapa && <MapaDisponiveis /> }

        </DashboardContext.Provider>
    )
}
