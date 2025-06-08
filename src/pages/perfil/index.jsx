import { Link, useParams } from "react-router-dom"
import { AuthData } from "../../auth/AuthWrapper"
import { useEffect, useState } from "react"
import { getEmpresaById } from "../../lib/api/empresa"
import { CardPerfil } from "../../components/perfil/CardPerfil.jsx"
import { PieChartDoacoes } from "./components/PieChartDoacoes.jsx"
import { SmileySad } from "@phosphor-icons/react"
import CardPerfilSkeleton from "./components/CardPerfilSkeleton.jsx"

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
            <CardPerfilSkeleton />
        )
    }

    if(!isLoading && perfil) {
        return (
            <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50 h-dvh">
                <div className="mx-10 lg:mx-20 my-4 border-4 p-10 shadow-xl rounded-xl gradiente h-3/4">
                    <CardPerfil empresa={perfil} />
                    {
                        perfil.id === user.id
                        &&
                        <Link className="link-default w-fit m-auto" to={"/meus-dados"}>Alterar seus dados</Link>
                    }
                    <PieChartDoacoes empresa={perfil}/>
                </div>
            </div>
        )
    }

    if(!isLoading && !perfil) {
        return (
            <div className="bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50 h-dvh">
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