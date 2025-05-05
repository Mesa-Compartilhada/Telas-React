import InputField from "../inputs/InputField.jsx"
import { AuthData } from "../../auth/AuthWrapper.js";

export default function FormToken({ callback }) {
    const { user } = AuthData()
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField change={(e) => {callback(e.target.value)}} id={"token"} label="Digite o token que enviamos ao seu email"></InputField>
                        <button className="btn-primary" onClick={() => callback()}>Enviar</button>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}