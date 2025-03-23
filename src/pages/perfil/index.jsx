import { Link, useParams } from "react-router-dom"
import { AuthData } from "../../auth/AuthWrapper"
import { useEffect, useState } from "react"
import { getEmpresaById } from "../../lib/api/empresa"
import { CardPerfil } from "./components/CardPerfil"
import Header from "../../components/Header_V2.jsx"
import { PieChartDoacoes } from "./components/PieChartDoacoes.jsx"

export const Perfil = () => {
    const { user } = AuthData()
    const { id } = useParams()

    const [perfil, setPerfil] = useState()

    const getPerfil = async () => {
        let result
        if(id) {
            result = await getEmpresaById(id)
        }
        else {
            result = await getEmpresaById(user.id)
        }
        
        if(result.empresa) {
            setPerfil(result.empresa)
        }
    }

    useEffect(() => {
        getPerfil()
    }, [user])

    return (
        <>
            <Header />
            {
                perfil &&
                <div className="text-center flex flex-col gap-2">
                    <CardPerfil empresa={perfil} />
                    {
                        perfil.id === user.id
                        &&
                        <Link to={"/meus-dados"}>Alterar seus dados</Link>
                    }
                    <PieChartDoacoes empresa={perfil}/>
                </div>
            }

            {
                !perfil &&
                <p>Perfil não encontrado</p>
            }

            
        </>
    )
}