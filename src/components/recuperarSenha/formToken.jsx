import InputField from "../inputs/InputField.jsx"
import { verificarToken } from "../../lib/api/empresa.js";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FormToken({ callback }) {
    const [token, setToken] = useState("")
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField change={(e) => {setToken(e.target.value)}} id={"token"} label="Digite o token que enviamos ao seu email"></InputField>
                        <button className="btn-primary" onClick={async (e) => {
                            e.preventDefault()
                            if(token) {
                                const result = await verificarToken(token)
                                result.status ? toast.success("Token válido") : toast.error("Token expirado ou inválido")
                                if(result.status) {
                                    setTimeout(() => {
                                        callback(token)
                                    }, 3000)
                                }
                            }
                        }}>Enviar</button>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}