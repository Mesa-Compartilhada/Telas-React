import InputField from "../inputs/InputField"
import { useState } from "react";
import { getPasswordToken } from "../../lib/api/empresa";
import { toast } from "react-toastify";

export default function FormEmail({ emailAtual, callback }) {
    const [email, setEmail] = useState(emailAtual ?? "")
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField change={(e) => { setEmail(e.target.value) }} label="E-mail" type="email" id={"email"} defaultValue={emailAtual} ></InputField>
                        <div className="flex gap-4">
                            <button className="btn-primary" 
                                onClick={async (e) => { 
                                    e.preventDefault()
                                    if(email) {
                                        const result = await getPasswordToken(email)
                                        result.status ? toast.success(result.message) : toast.error(result.message)
                                        setTimeout(() => {
                                            callback()
                                        }, 3000)
                                    }
                                }}>Enviar
                            </button>
                            <button className="btn-primary" onClick={() => callback()}>
                                Já tenho um código
                            </button>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}