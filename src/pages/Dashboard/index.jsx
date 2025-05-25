// Components:
import Header from "../../components/Header_V2.jsx/index.jsx"
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

import { AuthData } from "../../auth/AuthWrapper.js";
import { TIPO_EMPRESA } from "../../constants/empresa.js";
import { getDoacoesByStatus, getDoacoesByStatusAndEmpresaDoadoraId, getDoacoesByStatusAndEmpresaRecebedoraId } from "../../lib/api/doacao.js";
import { STATUS_DOACAO } from "../../constants/doacao.js";

import { createContext, useState } from 'react';
import MapaDisponiveis from "./components/mapaDisponiveis.jsx";

export const DashboardContext = createContext()

export default function Dashboard() {
    const { user } = AuthData()
    const [doacoesAlteradas, setDoacoesAlteradas] = useState(0)

    return (
        <DashboardContext.Provider value={{doacoesAlteradas: doacoesAlteradas, setDoacoesAlteradas: setDoacoesAlteradas}}>
        <Header/>

        <section className="grid place-content-center pb-10 px-10 gap-4">
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

        <MapaDisponiveis />

        </DashboardContext.Provider>
    )
}
