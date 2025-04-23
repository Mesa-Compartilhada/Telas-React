import InputField from "../../components/inputs/InputField"
import { AuthData } from "../../auth/AuthWrapper.js";

export default function Forms2({ callback }) {
    const { user } = AuthData()
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField change={(e) => {callback(e.target.value)}} id={"token"} label="Digite o token que enviamos ao seu email"></InputField>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}