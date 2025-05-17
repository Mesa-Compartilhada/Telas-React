import { useState } from "react"
import { ArrowLeft } from "@phosphor-icons/react"
import FormEmail from "../../../components/recuperarSenha/formEmail"
import FormToken from "../../../components/recuperarSenha/formToken"
import FormSenha from "../../../components/recuperarSenha/formSenha"

export default function FormRecuperarSenha({ user }) {
    const [pagina, setPagina] = useState(1)
    const [token, setToken] = useState()
    return(
        <div className="p-6">
            {
                pagina === 1
                &&
                <FormEmail emailAtual={user.email} callback={() => { setPagina(2) }}/>
            }
            {
                pagina === 2
                &&
                <FormToken callback={(token) => { 
                    setPagina(3)
                    setToken(token)
                 }}/>
            }
            {
                pagina === 3
                &&
                <FormSenha token={token} callback={() => {  }}/>
            }
            {
                pagina > 1
                &&
                <button className="btn-primary flex items-center gap-2 my-4" onClick={() => setPagina(pagina > 1 ? pagina-1 : "")}><ArrowLeft /> Voltar</button>
            }
        </div>
    )
}