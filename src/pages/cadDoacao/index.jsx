import { useNavigate } from "react-router-dom";
import DadosDoacao from "./components/dadosDoacao";
import { useState } from "react";
import { addDoacao } from "../../lib/api/doacao";

export default function CadDoacao() {
    const navigate = useNavigate();

    // JSON que armazena as informações da empresa
    const [doacao, setDoacao] = useState({})
    // State para mensagens de erro nos inputs
    const [mensagens, setMensagens] = useState({})
  
    function validarDados(dados) {
      let nome_doacao, qtd, tipo, conservacao, data_fabricacao, data_validade, data_retirada, hora_retirada
      let r = true
        if (!dados.nome_doacao || dados.nome_doacao.length <= 0) {
            nome_doacao = "Insira o nome da empresa"
          r = false
        }
        if (!dados.qtd || dados.qtd.length <= 0) {
            qtd = "Insira o CNPJ da empresa"
          r = false
        }
        if (!dados.tipo || dados.tipo === "0") {
          tipo = "Selecione o tipo da doação"
          r = false
        }
        if (!dados.conservacao || dados.conservacao.length <= 0) {
            conservacao = "Selecione o modo de conservação"
          r = false
        }
        if (!dados.data_fabricacao || dados.data_fabricacao.length <= 0) {
            data_fabricacao = "Insira uma data de fabricação válida"
          r = false
        }
        if (!dados.data_validade || dados.data_validade.length <= 0) {
            data_validade = "Insira uma data de validade válida"
          r = false
        }
        if (!dados.data_retirada || dados.data_retirada.length <= 0) {
            data_retirada = "Insira uma data de retirada válida"
          r = false
        }
        if (!dados.hora_retirada || dados.hora_retirada.length <= 0) {
            hora_retirada = "Confirme sua hora de retirada corretamente"
          r = false
        }
      setMensagens({ ...mensagens, nome_doacao, qtd, tipo, conservacao, data_fabricacao, data_validade, data_retirada, hora_retirada })
      console.log(mensagens)
      return r
    }
  
    async function cadastrarDoacao() {
      // Validação dos dados
      if (validarDados({ ...doacao })) {
        // Enviando dados para a função que chama a rota POST da API  
        const novaDoacao = {
          ...doacao,
          nome_doacao: doacao.nome_doacao,
          tipo: parseInt(doacao.tipo),
          conservacao: parseInt(doacao.conservacao),
          qtd: doacao.qtd,
          data_fabricacao: doacao.data_fabricacao,
          data_validade: doacao.data_validade,
          data_retirada: doacao.data_retirada,
          hora_retirada: doacao.hora_retirada
        }
  
        await addDoacao(novaDoacao)
        navigate("/home")
      }
    }
    return (
        <>
            <div className="container p-5">
                <h1>Cadastre sua Doação</h1>

                <div className="mt-5 mb-5 text-center">
                <button className="btn btn-info text-white mt-2" onClick={() => cadastrarDoacao()}>Cadastrar</button>
                    {/* <div className="mb-2">
                        <img className={pagina !== 1 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/490660/company.svg" alt="Ícone de empresa" width={pagina !== 1 ? 35 : 60} />
                        <img className={pagina !== 2 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/383565/location-pin.svg" alt="Ícone de ponto no mapa" width={pagina !== 2 ? 35 : 60} />
                        <img className={pagina !== 3 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/416019/account-user-avatar.svg" alt="Ícone de acesso de usuário" width={pagina !== 3 ? 35 : 60} />
                    </div>

                    <button className="btn btn-info text-white mt-2 mr-2" onClick={() => setPagina(pagina - 1)} disabled={pagina <= 1}>{"Voltar"}</button>
                     */}
                </div>

                <form>
                        <DadosDoacao mensagens={mensagens} setMensagens={setMensagens} doacao={doacao} setDoacao={setDoacao} />
                </form>
            </div>
        </>
    )
}