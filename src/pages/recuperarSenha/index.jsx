import React, { useState } from "react";
import Header from "../../components/Header_V2.jsx/index.jsx";
import { recuperarSenha } from "../../lib/api/empresa.js";
import FormEmail from "../../components/recuperarSenha/formEmail.jsx";
import FormToken from "../../components/recuperarSenha/formToken.jsx";
import FormSenha from "../../components/recuperarSenha/formSenha.jsx";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
export default function RecuperarSenha() {
    const [pagina, setPagina] = useState(1);
    function avançarPagina() {
        setPagina(pagina + 1);
    }
    const [token, setToken] = useState()
    const [senha, setSenha] = useState()
    return(
        <>
                <>
                    <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover h-screen bg-opacity-50">
                        <div className="justify-center items-center mx-5 lg:mx-40 my-4 border-4 md:w-3/5 p-5 shadow-xl rounded-2xl  gradiente">
                            <div className="bg-white shadow-lg rounded-lg p-8 w-full">                   
                                <div>
                                    <form>
                                            {pagina === 1 ? (
                                                <FormEmail callback={() => {
                                                    avançarPagina()
                                                }}
                                                />
                                            ) : pagina === 2 ? (
                                                <FormToken callback={ (token) => {
                                                    setToken(token)
                                                    avançarPagina()
                                                }
                                                }
                                                />
                                            ) : (
                                                <FormSenha token={ token } callback={ (senha) => {
                                                    setSenha(senha)
                                                }
                                                }
                                                />
                                            )}
                                    </form>
                                    <div className="flex flex-row">
                                        <button className="btn-primary flex disabled:opacity-70" onClick={() => setPagina(pagina - 1)} disabled={pagina <= 1}><ArrowLeft size={20} /> Voltar</button>
                                        {
                                            pagina === 3
                                            &&
                                            <Link to={"/login"} className="btn-primary">Finalizar</Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        </>
    )
}