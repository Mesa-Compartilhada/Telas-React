import { useParams } from "react-router-dom"
import { AuthData } from "../../auth/AuthWrapper"
import { useEffect, useState } from "react"
import { getEmpresaById } from "../../lib/api/empresa"

export const Perfil = () => {
    const { user } = AuthData()
    const { id } = useParams()

    const [perfil, setPerfil] = useState()

    const getPerfil = async () => {
        const result = await getEmpresaById(id)
        if(result.empresa) {
            setPerfil(result.empresa)
        }
    }

    useEffect(() => {
        getPerfil()
    }, [user])

    return (
        <>
            {
                perfil &&
                user.id === perfil.id
                &&
                <div>
                    <p>Seu Perfil: </p>
                    <p>{perfil.nome}</p>    
                </div>
                
            }

            {   
                perfil &&
                user.id !== perfil.id
                &&
                <div>
                    <p>Perfil de: </p>
                    <p>{perfil.nome}</p>    
                </div>
            }

            {
                !perfil &&
                <p>Perfil não encontrado</p>
            }

            
        </>
    )
}