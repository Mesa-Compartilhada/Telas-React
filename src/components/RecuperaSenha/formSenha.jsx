import InputField from "../inputs/InputField.jsx"
import { AuthData } from "../../auth/AuthWrapper.js";
import { recuperarSenha } from "../../lib/api/empresa.js";

export default function FormSenha({ token, callback }){
    const { user } = AuthData()
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField type="password" change={(e) => { callback(e.target.value) }} label="Nova senha:" id={"senha"}></InputField>
                    </div>
                    <div className="mb-4">
                        <InputField type="password" change={() => {}} label="Repita sua nova senha:" id={"novaSenha"}></InputField>
                    </div>
                    <button className="btn-primary" onClick={() => {
                        callback()
                        recuperarSenha(token, )
                    }}>Enviar</button>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}