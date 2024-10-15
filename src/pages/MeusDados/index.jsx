import React, { useEffect, useState } from "react";
import Header from "../../components/Header_V2.jsx/index.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { getEmpresaById } from "../../lib/api/empresa.js";
import { AuthData } from "../../auth/AuthWrapper.js";

export default function MeusDados(){
const {user} = AuthData()
const pegarDados = async() => {
    let setardados = await getEmpresaById(user.id)
    setDados(setardados.empresa)
}
const [dados, setDados] = useState(null)
useEffect(() => {
    pegarDados()
    console.log("eae")
}, [])
const [isActive, setIsActive] = useState(false)
    return(
        <>
            {dados ? 
            <body>
                <Header></Header>
                <div className="centro">                   
                    <div className="mx-10 lg:mx-20 my-4 border-4 md:w-3/5 p-10 shadow-xl rounded-2xl gradiente">
                    <div className="flex flex-col gap-4 my-4">                    
                        <h2>
                            <span className="palavra">{dados.nome}</span>
                            <span className="palavra">Tipo: {dados.tipo}</span>
                            <span className="palavra">Categoria: {dados.categoria}</span>
                        </h2>
                        <h2>
                            <span className="palavra">CNPJ: {dados.cnpj}</span>
                        </h2>
                        <h2>
                            <span className="palavra">Estado: {dados.endereco.estado}</span>
                            <span className="palavra">Cidade: {dados.endereco.cidade}</span>
                        </h2> 
                        <h2>                        
                            <span className="palavra">Bairro: {dados.endereco.bairro}</span>
                        </h2>
                        <h2>
                        <span className="palavra">{dados.endereco.logradouro}</span>
                        <span className="palavra2">Nº{dados.endereco.numero}</span>
                        </h2>                           
                        <button className="btn-primary" onClick={() => setIsActive(true)}>Editar dados</button>
                        {isActive && <Modal setIsActive = {setIsActive}>
                            <div>
                                <h2>Editar dados</h2>
                                <p>Dados a serem editados</p>
                                <button className="btn-red" onClick={() => setIsActive(false)}>Cancelar</button>
                                <button className="btn-primary">Salvar</button>
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