import InputField from "../../components/inputs/InputField"
import { useState } from "react";
import { getPasswordToken } from "../../lib/api/empresa.js";

export default function FormEmail(props) {
    const [email, setEmail] = useState()
    const { emailAtual, callback } = props
    const [mensagem, setMensagem] = useState("")
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField change={(e) => { setEmail(e.target.value) }} label="E-mail" type="email" id={"email"} defaultValue={emailAtual} ></InputField>
                        <button className="btn-primary" 
                            onClick={async (e) => { 
                                e.preventDefault()
                                const result = await getPasswordToken(email)
                                setMensagem(result.message)
                                callback()
                            }}>Enviar
                        </button>
                        <button className="btn-primary" onClick={() => callback()}>
                            Já tenho um código
                        </button>
                    </div>
                </div>
                <small className="text-xs">{mensagem ? mensagem : '\u00A0'}</small>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}