import InputField from "../../components/inputs/InputField"
import { AuthData } from "../../auth/AuthWrapper.js";
import { getEmpresaById } from "../../lib/api/empresa.js";

export default function Forms1(){
    const { user } = AuthData()
    console.log(user)
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <form>
                    <div className="mb-4">
                        <InputField change={() => {  }}  label="E-mail"></InputField>
                    </div>
                </form>
                <p class="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}