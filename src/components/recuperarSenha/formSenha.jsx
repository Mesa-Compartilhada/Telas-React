import InputField from "../inputs/InputField.jsx"
import { recuperarSenha } from "../../lib/api/empresa.js";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FormSenha({ token, callback }){
    const [senha, setSenha] = useState("")
    const [confirmacaoDeSenha, setConfirmacaoDeSenha] = useState("")
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField type="password" change={(e) => { setSenha(e.target.value) }} label="Nova senha:" id={"senha"}></InputField>
                    </div>
                    <div className="mb-4">
                        <InputField type="password" change={(e) => {setConfirmacaoDeSenha(e.target.value)}} label="Repita sua nova senha:" id={"novaSenha"}></InputField>
                    </div>
                    <button className="btn-primary" onClick={async (e) => {
                        e.preventDefault()
                        if(senha.length >= 8 && senha === confirmacaoDeSenha) {
                            const result = await recuperarSenha(token, senha)
                            if(result.status) {
                                setTimeout(() => {
                                    toast.success(result.message)
                                    callback()
                                }, 3000)
                            }
                            else {
                                toast.error(result.message)
                            }
                        }
                        else {
                            toast.error("As senhas não coincidem")
                        }
                    }}>Enviar</button>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}