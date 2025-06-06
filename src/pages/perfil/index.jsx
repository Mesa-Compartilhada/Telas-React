import { Link, useParams } from "react-router-dom"
import { AuthData } from "../../auth/AuthWrapper"
import { useEffect, useState } from "react"
import { getEmpresaById } from "../../lib/api/empresa"
import { CardPerfil } from "../../components/perfil/CardPerfil.jsx"
import { PieChartDoacoes } from "./components/PieChartDoacoes.jsx"
import Skeleton from "react-loading-skeleton"
import { SmileySad, User } from "@phosphor-icons/react"

export const Perfil = () => {
    const { user } = AuthData()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
    }

    useEffect(() => {
        getPerfil()
    }, [user])

    if(isLoading) {
        return (
            <div>
                <div className="flex flex-col items-center gap-2">
                <Skeleton width={100} height={100} />
                <Skeleton width={200} />
                <div className="flex gap-4">
                    <Skeleton width={150} />
                    <Skeleton width={150} />
                </div>
                
                <p><Skeleton width={200} height={50} /></p>
                <Skeleton width={200} />
            </div>
            </div>
        )
    }

    if(!isLoading && perfil) {
        return (
            <>
                <div className="text-center flex flex-col gap-2">
                    <CardPerfil empresa={perfil} />
                    {
                        perfil.id === user.id
                        &&
                        <Link className="link-default w-fit m-auto" to={"/meus-dados"}>Alterar seus dados</Link>
                    }
                    <PieChartDoacoes empresa={perfil}/>
                </div>
            
                <p>Perfil não encontrado</p>
            </>
        )
    }

    if(!isLoading && !perfil) {
        return (
            <div>
                <div className="w-fit m-auto gap-2 bg-white rounded-xl p-10 shadow-gray-300 shadow-md">
                    <div className="flex items-center">
                        <SmileySad size={100} />
                        <p className="text-lg">O perfil buscado não pôde ser encontrado</p>
                    </div>
                    <p className="text-center">Verifique se acessou a página correta</p>
                </div>
            </div>
        )
    }
}