import React, { useEffect, useState } from "react";
import Header from "../../components/Header_V2.jsx/index.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { getEmpresaById } from "../../lib/api/empresa.js";
import { AuthData } from "../../auth/AuthWrapper.js";
import InputField from "../../components/inputs/InputField.jsx";
import SelectField from "../../components/inputs/SelectField.jsx";
import { CATEGORIA_RECEBEDORA, TIPO_EMPRESA } from "../../constants/empresa.js";

export default function MeusDados(){
const categoriaDoadora = {
    0: "Selecione uma categoria",
    1: "Restaurante", 
    2: "Hortifrutti", 
    3: "Mercado", 
    4: "Padaria", 
    5: "Fast Food",
    6: "Outro"
}
const categoriaRecebedora = {
    0: "Selecione uma categoria",
    1: "Organização não governamental", 
    2: "Organização Religiosa", 
    3: "Unidade básica de saúde",
    4: "Outro"
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
    return(
        <>
            {dados ? 
            <body>
                <Header></Header>
                <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover bg-opacity-50">                   
                    <div className="mx-10 lg:mx-20 my-4 border-4 md:w-3/5 p-10 shadow-xl rounded-2xl gradiente">                 
                        <h2>
                            <span className=" text-black text-2xl mb-4 mr-[400px]">{dados.nome} </span>
                            <span className=" text-black ">{dados.email}</span>
                        </h2>
                        <div className="linha-preta"></div>
                            <div className=" bg-white rounded-lg shadow-md p-6">
                                    <h2 className=" text-gray-500 text-2xl mb-4">Seus Dados</h2>
                                    <div className="mb-4 flex items-center">
                                        <span className="text-gray-600 mr-2">Tipo: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50 mr-[60px]">{dados.tipo}</span>
                                        
                                        <span className="text-gray-600 mr-2">categoria: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50">{dados.categoria}</span>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <span className="text-gray-600 mr-2">CNPJ: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50 mr-4">{dados.cnpj}</span>
                                    </div>
                                    <div className="linha-preta"></div>
                                        <h1 className="text-gray-500 text-2xl mb-4">Endereço: </h1>
                                    <div className="mb-4 flex items-center">
                                        <span className="text-gray-600 mr-2">Estado:</span>
                                        <span className="border border-gray-300 rounded p-2 bg-gray-50 mr-5">{dados.endereco.estado}</span>
                                        
                                        <span className="text-gray-600 mr-2">Cidade:</span>
                                        <span className="border border-gray-300 rounded p-2 bg-gray-50 mr-5">{dados.endereco.cidade}</span>

                                        <span className="text-gray-600 mr-2">Bairro: </span>
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50">{dados.endereco.bairro}</span>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        
                                    </div>
                                    
                                    <div className="mb-4 flex items-center">
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
                                            <h2 className=" text-gray-500 text-2xl mb-4">Dados a serem editados</h2>
                                            <div className="mb-4 flex gap-1 items-center">
                                                <InputField id={"nomeEmpresa"} name={"nomeEmpresa"} type={"text"} msg={""} change={(e) => console.log(e.target.value)} label={"Nome:"} defaultValue={dados.nome}></InputField> 
                                            </div>
                                            <div className="mb-4 flex gap-1 items-center">
                                            {
                                                TIPO_EMPRESA[dados.tipo] === TIPO_EMPRESA.DOADORA
                                                ? <SelectField name={"categoriaEmpresa"} label={"Categoria de estabelecimento:"} id={"categoriaEmpresa"} options={categoriaDoadora} msg={""} defaultValue={dados.categoria}  change={(e) => console.log(e.target.value)} />
                                                : <SelectField name={"categoriaEmpresa"} label={"Categoria de instituição:"} id={"categoriaEmpresa"} options={categoriaRecebedora} msg={""} defaultValue={dados.categoria}  change={(e) => console.log(e.target.value)} />
                                            }
                                            </div>
                                            <div className="mb-4 flex gap-1 items-center">
                                            <InputField id={"emailEmpresa"} name={"emailEmpresa"} msg={""}  change={(e) => console.log(e.target.value)} label={"Email:"} defaultValue={dados.email}></InputField> 
                                            </div>
                                                    <button className="btn-red mr-[160px]" onClick={() => setIsActive(false)}>Cancelar</button>
                                                    <button className="btn-primary">Salvar</button>
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