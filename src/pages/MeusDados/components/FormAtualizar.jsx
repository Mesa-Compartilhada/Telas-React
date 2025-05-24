import { useEffect, useState } from "react";
import { AuthData } from "../../../auth/AuthWrapper.js";
import InputField from "../../../components/inputs/InputField.jsx"; 
import SelectField from "../../../components/inputs/SelectField.jsx"; 
import { CATEGORIA_DOADORA, CATEGORIA_RECEBEDORA, TIPO_EMPRESA } from "../../../constants/empresa.js";
import { login, updateEmpresaById, getEmpresaById } from "../../../lib/api/empresa.js";
import { toast } from "react-toastify";

export default function FormAtualizar({ dados, dadosAtualizados, setDadosAtualizados, setIsActive }) {
    const { user } = AuthData()
    const [mensagens, setMensagens] = useState({})
    const categoriaDoadora = {
        1: "Restaurante", 
        2: "Hortifrutti", 
        3: "Mercado", 
        4: "Padaria", 
        5: "Fast Food"
    }
    const categoriaRecebedora = {
        1: "Organização não governamental", 
        2: "OSC", 
        3: "Religiosa",
        4: "Banco de Alimentos"
    }

    const atualizarDados = async () => {
        if(dadosAtualizados) {
            let novosDados = {
                nome: dadosAtualizados.nome,
                cnpj: dadosAtualizados.cnpj,
                tipo: TIPO_EMPRESA[dadosAtualizados.tipo] === TIPO_EMPRESA.DOADORA ? 1 : 2,
                categoria: parseInt(dadosAtualizados.categoria),
                enderecoId: dadosAtualizados.endereco.id,
                email: dadosAtualizados.email,
                senha: dadosAtualizados.senha,
            }
            if(validarDados(novosDados)) {
                let loginResult = await login(dados.email, novosDados.senha)
                let updateResult
                if(loginResult !== false) {
                    updateResult = await updateEmpresaById(user.id, novosDados)
                    setIsActive(false)
                    toast.success("Dados atualizados com sucesso")
                }
                else {
                    toast.error("Dados inválidos")
                }
            }
        }
    }

    const validarDados = (novosDados) => {
        let r = true
        let senha, nome, email
        if(!novosDados.senha || novosDados.senha.length < 8) {
            senha = "Insira uma senha válida"
            r = false
        }
        if(!novosDados.nome || novosDados.nome.length < 1) {
            nome = "Insira um nome válido"
            r = false
        }
        if(!novosDados.email || novosDados.email.length < 1) {
            email = "Insira um email válido"
            r = false
        }
        if(!r) {
            setMensagens({...mensagens, senha, nome, email})
        }
        else {
            setMensagens({})
        }
        return r
    }

    useEffect(() => {
        let temp = {...dados}
        temp.categoria = TIPO_EMPRESA[dados.tipo] === TIPO_EMPRESA.DOADORA 
        ? CATEGORIA_DOADORA[dados.categoria] : CATEGORIA_RECEBEDORA[dados.categoria]
        setDadosAtualizados(temp)
    }, [dados])
    return(
        <div>
            <h1 className=" text-black text-2xl mb-4"></h1>
            <div className="bg-white rounded-lg shadow-md p-10">
                <h2 className=" text-gray-500 text-2xl mb-10" >Dados a serem editados</h2>
                <div className="mb-4 flex gap-1 items-center ">
                    <InputField id={"nomeEmpresa"} name={"nomeEmpresa"} type={"text"} msg={mensagens.nome} change={(e) => setDadosAtualizados({...dadosAtualizados, nome: e.target.value})} label={"Nome:"} defaultValue={dados.nome}></InputField> 
                </div>
                <div className="mb-4 flex gap-1 items-center">
                    {
                    TIPO_EMPRESA[dados.tipo] === TIPO_EMPRESA.DOADORA
                    ? <SelectField name={"categoriaEmpresa"} label={"Categoria:"} id={"categoriaEmpresa"} options={categoriaDoadora} msg={mensagens.categoria} defaultValue={CATEGORIA_DOADORA[dados.categoria]}  change={(e) => setDadosAtualizados({...dadosAtualizados, categoria: e.target.value})} />
                    : <SelectField name={"categoriaEmpresa"} label={"Categoria:"} id={"categoriaEmpresa"} options={categoriaRecebedora} msg={mensagens.categoria} defaultValue={CATEGORIA_RECEBEDORA[dados.categoria]}  change={(e) => setDadosAtualizados({...dadosAtualizados, categoria: e.target.value})} />
                    }
                </div>
                <div className="mb-4 flex gap-1 items-center">
                    <InputField type={"email"} id={"emailEmpresa"} name={"emailEmpresa"} msg={mensagens.email}  change={(e) => setDadosAtualizados({...dadosAtualizados, email: e.target.value})} label={"Email:"} defaultValue={dados.email}></InputField> 
                </div>
                <div className="mb-4 flex gap-1 items-center">
                    <InputField type={"password"} id={"senhaEmpresa"} name={"senhaEmpresa"} msg={mensagens.senha} change={(e) => setDadosAtualizados({...dadosAtualizados, senha: e.target.value})} label={"Confirme sua senha:"}></InputField> 
                </div>
                <button className="btn-primary mr-[160px]" onClick={() => atualizarDados()}>Salvar</button>
                <button className="btn-gray" onClick={() => setIsActive(false)}>Cancelar</button>
            </div>
        </div>
    )
}