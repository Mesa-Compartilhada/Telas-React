import React, { useEffect, useState } from "react";
import Header from "../../components/Header_V2.jsx/index.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { getEmpresaById } from "../../lib/api/empresa.js";
import FormAtualizar from "./components/FormAtualizar.jsx";
import { AuthData } from "../../auth/AuthWrapper.js";

export default function MeusDados(){
    const { user } = AuthData()
    const [dados, setDados] = useState(null)
    const [dadosAtualizados, setDadosAtualizados] = useState(null)
    const pegarDados = async() => {
        let resultado = await getEmpresaById(user.id)
        setDados(resultado.empresa)
    }
    useEffect(() => {
        pegarDados()
    }, [])

    const [isActive, setIsActive] = useState(false)
    return(
        <body>
            {dados ? 
                <>
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
                                        <span className="border border-gray-300 rounded p-3 bg-gray-50">{dados.categoria}</span>
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
                                        <FormAtualizar dados={dados} dadosAtualizados={dadosAtualizados} setDadosAtualizados={setDadosAtualizados} setIsActive={setIsActive} />
                                    </Modal>}
                            </div>                       
                    </div>
                    </div>
                </>
            : ""
            }
        </body>
    )
}