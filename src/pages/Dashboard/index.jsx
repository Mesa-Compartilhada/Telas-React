// Components:
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

import { AuthData } from "../../auth/AuthWrapper.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";
import { getDoacoesByFilter, getDoacoesByStatus, getDoacoesByStatusAndEmpresaDoadoraId, getDoacoesByStatusAndEmpresaRecebedoraId } from "../../lib/api/doacao.js";
import { STATUS_DOACAO } from "../../constants/doacao.js";

import { createContext, useEffect, useState } from 'react';
import MapaDisponiveis from "./components/mapaDisponiveis.jsx";
import { HandHeart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const DashboardContext = createContext()

export default function Dashboard() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);

    const [mostrarMapa, setMostrarMapa] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setMostrarMapa(true);
          setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100);
        }, 100);
      
        return () => clearTimeout(timer);
      }, []);

      
    const { user } = AuthData()
    const [doacoesAlteradas, setDoacoesAlteradas] = useState(0)

    return (
        <DashboardContext.Provider value={{doacoesAlteradas: doacoesAlteradas, setDoacoesAlteradas: setDoacoesAlteradas}}>
        <p className={`mx-20 mb-10 text-sm ${user.tipo === TIPO_EMPRESA.DOADORA ? 'text-azul-escuro' : 'text-l-Abobora'}`} >{user.tipo === TIPO_EMPRESA.DOADORA ? `Obrigado por doar conosco, ${user.nome}!` : `Obrigado por fazer a diferença, ${user.nome}!`}</p>

        <section className="grid place-content-center pb-10 px-10">
            {
                TIPO_EMPRESA.RECEBEDORA === user.tipo
                ?
                <div>
                    <h1 className="text-2xl my-4">Doações disponíveis</h1>
                    <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.DISPONIVEL] }} ativarFiltro={true} />
                    <hr />
                    <h1 className="text-2xl my-4">Suas solicitações em andamento</h1>
                    <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.ANDAMENTO], "empresaRecebedoraId": user.id }} />
                </div>
                :
                <div>
                    <div className="my-4">
                        <Link to={"/cadastro-doacao"} className="btn-primary w-fit m-auto text-xl flex items-center gap-2 mb-10 hover:text-white hover:opacity-80"><HandHeart size={40} />Doar agora</Link>
                        <h1 className="text-2xl my-4">Suas doações disponíveis</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.DISPONIVEL], "empresaDoadoraId": user.id }} ativarFiltro={true} />
                    </div>
                    <hr />
                    <div className="my-4">
                        <h1 className="text-2xl my-4">Suas doações em andamento</h1>
                        <ListaDoacoes getDoacoes={getDoacoesByFilter} filtros={{ "status": [STATUS_DOACAO.ANDAMENTO], "empresaDoadoraId": user.id }} />
                    </div>
                </div>
            }
        </section>

        { mostrarMapa && <MapaDisponiveis /> }

        </DashboardContext.Provider>
    )
}
