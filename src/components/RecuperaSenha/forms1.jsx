import InputField from "../../components/inputs/InputField"
import { useState } from "react";
import { getPasswordToken } from "../../lib/api/empresa.js";

export default function Forms1() {
    const [email, setEmail] = useState()
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField change={(e) => { setEmail(e.target.value) }} label="E-mail" type="email" id={"email"} ></InputField>
                        <button className="text-white mt-2 mr-2 bg-l-Abobora p-2 rounded-md disabled:opacity-80 enabled:hover:bg-opacity-80" 
                            onClick={(e) => { 
                                e.preventDefault()
                                getPasswordToken(email) 
                            }}>Enviar</button>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}