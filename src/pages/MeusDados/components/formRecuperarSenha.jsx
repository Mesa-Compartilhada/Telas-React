import { useState } from "react"
import FormEmail from "../../../components/RecuperaSenha/formEmail"
import FormToken from "../../../components/RecuperaSenha/formToken"
import FormSenha from "../../../components/RecuperaSenha/formSenha"

export function FormRecuperarSenha(props) {
    const [pagina, setPagina] = useState(1)
    const { user } = props
    return(
        <div>
            {
                pagina === 1
                &&
                <FormEmail emailAtual={user.email} callback={() => { setPagina(2) }}/>
            }
            {
                pagina === 2
                &&
                <FormToken callback={() => { setPagina(3) }}/>
            }
            {
                pagina === 3
                &&
                <FormSenha callback={() => {  }}/>
            }
            {
                pagina > 1
                &&
                <button className="btn-primary" onClick={() => setPagina(pagina > 1 ? pagina-1 : "")}>Voltar</button>
            }
        </div>
    )
}