import React, { useState } from "react";
import _Forms1 from "../../components/RecuperaSenha/forms1.jsx"
import _Forms2 from "../../components/RecuperaSenha/forms2.jsx"
import _Forms3 from "../../components/RecuperaSenha/forms3.jsx"
import Header from "../../components/Header_V2.jsx";
export default function Principal(){
    const [pagina, setPagina] = useState(1);
    function avançarPagina() {
        setPagina(pagina + 1);
    }
    return(
        <>
                <>
                    <Header></Header>
                    <div className="flex justify-center items-center bg-[url('./assets/fundo_bolas_laranja_v2.svg')] bg-cover h-screen bg-opacity-50">
                        <div className="justify-center items-center mx-5 lg:mx-40 my-4 border-4 md:w-3/5 p-5 shadow-xl rounded-2xl  gradiente">
                            <div className="bg-white shadow-lg rounded-lg p-8 w-full">                   
                                <div>
                                    <form>
                                            {pagina === 1 ? (
                                                <_Forms1
                                                />
                                            ) : pagina === 2 ? (
                                                <_Forms2
                                                />
                                            ) : (
                                                <_Forms3
                                                />
                                            )}
                                    </form>
                                    <div className="flex flex-row">
                                        <button className="text-white mt-2 mr-2 bg-l-Abobora p-2 rounded-md disabled:opacity-80 enabled:hover:bg-opacity-80" onClick={() => setPagina(pagina - 1)} disabled={pagina <= 1}>{"Voltar"}</button>
                                        <button className="text-white mt-2 bg-l-Abobora p-2 rounded-md disabled:opacity-80 enabled:hover:bg-opacity-80"onClick={() => avançarPagina()} disabled={pagina >= 3}>{"Avançar"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        </>
    )
}