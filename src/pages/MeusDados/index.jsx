import React, { useEffect, useState } from "react";
import Header from "../../components/Header_V2.jsx/index.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { getEmpresaById } from "../../lib/api/empresa.js";
import { AuthData } from "../../auth/AuthWrapper.js";
import InputField from "../../components/inputs/InputField.jsx";
import SelectField from "../../components/inputs/SelectField.jsx";
import { CATEGORIA_DOADORA, CATEGORIA_RECEBEDORA, STATUS_EMPRESA, TIPO_EMPRESA } from "../../constants/empresa.js";

export default function MeusDados(){
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
const {user} = AuthData()
const pegarDados = async() => {
    let setardados = await getEmpresaById(user.id)
    setDados(setardados.empresa)
}
const [dados, setDados] = useState(null)
useEffect(() => {
    pegarDados()
}, [])
const [isActive, setIsActive] = useState(false)

const [dadosAtualizados, setDadosAtualizados] = useState(null)
useEffect(() => {
    setDadosAtualizados(dados)
    console.log(dadosAtualizados)
}, [dados])



const atualizarDados = async() => {
    if(dadosAtualizados)
    setDadosAtualizados({...dadosAtualizados, 
    tipo: TIPO_EMPRESA[dados.tipo] === TIPO_EMPRESA.DOADORA ? 1 : 2,
    enderecoId: dadosAtualizados.endereco.id, 
    status: STATUS_EMPRESA[dados.status],
    categoria: TIPO_EMPRESA[dados.tipo] === TIPO_EMPRESA.DOADORA ? parseInt(CATEGORIA_DOADORA[dadosAtualizados.categoria]) : parseInt(CATEGORIA_RECEBEDORA[dadosAtualizados.categoria])
})
    console.log(dadosAtualizados)
}
    return(
        <>
            {dados ? 
            <body>
                <Header></Header>
                <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50">                   
                    <div className="mx-10 lg:mx-20 my-4 border-4 md:w-3/5 p-10 shadow-xl rounded-2xl gradiente">                 
                        <h2>
                            <span className=" text-black text-xl mb-4 mr-[400px]">{dados.nome} </span>
                        </h2>
                            <div className=" bg-white rounded-lg shadow-md p-6">
                                    <h2 className=" text-gray-500 text-xl mb-4">Seus Dados</h2>
                                    <div className="mb-4 flex text-sm items-center">
                                        <span className="text-gray-600  mr-2">Tipo: </span>
                                        <span className="border border-gray-300  rounded p-3 bg-gray-50 mr-[60px]">{dados.tipo}</span>
                                        
                                        <span className="text-gray-600 mr-2">Categoria: </span>
                                        <span className="border border-gray-300 text-xs rounded p-3 bg-gray-50">{dados.categoria}</span>
                                    </div>
                                    <div className="mb-4 flex text-sm items-center">
                                        <span className="text-gray-600 mr-2">CNPJ: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50 mr-5">{dados.cnpj}</span>
                                        <span className="text-gray-600 mr-2">Email: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50 mr-5">{dados.email}</span>
                                    </div>
                                    <div className="border-t-2 border-grey w-full my-5"></div>
                                        <h1 className="text-gray-500 text-xl mb-4">Endereço: </h1>
                                    <div className="mb-4 flex text-sm items-center">
                                        <span className="text-gray-500 mr-2">Estado:</span>
                                        <span className="border border-gray-300 rounded  p-2 bg-gray-50 mr-5">{dados.endereco.estado}</span>
                                        
                                        <span className="text-gray-600 mr-2">Cidade:</span>
                                        <span className="border border-gray-300 rounded  p-2 bg-gray-50 mr-5">{dados.endereco.cidade}</span>

                                        <span className="text-gray-600 mr-2">Bairro: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50">{dados.endereco.bairro}</span>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        
                                    </div>
                                    
                                    <div className="mb-4 flex text-sm items-center">
                                        <span className="text-gray-600 mr-2">Logradouro: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50 mr-5">{dados.endereco.logradouro}</span>

                                        <span className="text-gray-600 mr-2">N°: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50">{dados.endereco.numero}</span>
                                    </div>
                                    <button className="btn-primary" onClick={() => setIsActive(true)}>Editar dados</button>
                                    {isActive && <Modal setIsActive = {setIsActive}>
                                        <div>
                                        <h1 className=" text-black text-2xl mb-4"></h1>
                                        <div className="bg-white rounded-lg shadow-md p-10">
                                            <h2 className=" text-gray-500 text-2xl mb-10" >Dados a serem editados</h2>
                                            <div className="mb-4 flex gap-1 items-center ">
                                                <InputField id={"nomeEmpresa"} name={"nomeEmpresa"} type={"text"} msg={""} change={(e) => setDadosAtualizados({...dadosAtualizados, nome: e.target.value})} label={"Nome:"} defaultValue={dados.nome}></InputField> 
                                            </div>
                                            <div className="mb-4 flex gap-1 items-center">
                                            {
                                                TIPO_EMPRESA[dados.tipo] === TIPO_EMPRESA.DOADORA
                                                ? <SelectField name={"categoriaEmpresa"} label={"Categoria:"} id={"categoriaEmpresa"} options={categoriaDoadora} msg={""} defaultValue={CATEGORIA_DOADORA[dados.categoria]}  change={(e) => setDadosAtualizados({...dadosAtualizados, categoria: parseInt(e.target.value)})} />
                                                : <SelectField name={"categoriaEmpresa"} label={"Categoria:"} id={"categoriaEmpresa"} options={categoriaRecebedora} msg={""} defaultValue={CATEGORIA_RECEBEDORA[dados.categoria]}  change={(e) => setDadosAtualizados({...dadosAtualizados, categoria: parseInt(e.target.value)})} />
                                            }
                                            </div>
                                            <div className="mb-4 flex gap-1 items-center">
                                            <InputField id={"emailEmpresa"} name={"emailEmpresa"} msg={""}  change={(e) => setDadosAtualizados({...dadosAtualizados, email: e.target.value})} label={"Email:"} defaultValue={dados.email}></InputField> 
                                            </div>
                                            <div className="mb-4 flex gap-1 items-center">
                                            <InputField type={"password"} id={"senhaEmpresa"} name={"senhaEmpresa"} msg={""}  change={(e) => setDadosAtualizados({...dadosAtualizados, senha: e.target.value})} label={"Confirme sua senha:"}></InputField> 
                                            </div>
                                                    <button className="btn-red mr-[160px]" onClick={() => setIsActive(false)}>Cancelar</button>
                                                    <button className="btn-primary" onClick={() => atualizarDados()}>Salvar</button>
                                            </div>
                                            
                                        </div>
                                    </Modal>}
                            </div>                       
                    </div>
                    </div>
            </body>
            : ""
            }
        </>
    )
}