import InputField from "../inputs/InputField.jsx"
import { recuperarSenha } from "../../lib/api/empresa.js";
import { useState } from "react";

export default function FormSenha({ token, callback }){
    const [senha, setSenha] = useState()
    const [mensagem, setMensagem] = useState()
    return(
        <>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recuperação de Senha</h1>
                <div>
                    <div className="mb-4">
                        <InputField type="password" change={(e) => { setSenha(e.target.value) }} label="Nova senha:" id={"senha"}></InputField>
                    </div>
                    <div className="mb-4">
                        <InputField type="password" change={() => {}} label="Repita sua nova senha:" id={"novaSenha"}></InputField>
                    </div>
                    <button className="btn-primary" onClick={async () => {
                        callback()
                        const result = await recuperarSenha(token, senha)
                        setMensagem(result.message)
                    }}>Enviar</button>
                </div>
                <small className="text-xs">{mensagem ? mensagem : '\u00A0'}</small>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Lembrou sua senha? <a href="/login" className="text-blue-500 hover:underline">Ir para o Login</a>
                </p>
        </>
    )
}