import { useNavigate } from "react-router-dom";
import DadosDoacao from "./components/dadosDoacao";
import { useState } from "react";
import { addDoacao } from "../../lib/api/doacao";

export default function CadDoacao() {
  const navigate = useNavigate();

  // JSON que armazena as informações da empresa
  const [doacao, setDoacao] = useState({});
  // State para mensagens de erro nos inputs
  const [mensagens, setMensagens] = useState({});

  function validarDados(dados) {
    let nomeDoacao,
      qtd,
      tipo,
      conservacao,
      dataFabricacao,
      dataValidade,
      dataRetirada,
      horaRetirada;
    let r = true;
    if (!dados.nomeDoacao || dados.nomeDoacao.length <= 0) {
      nomeDoacao = "Insira o nome da empresa";
      r = false;
    }
    if (!dados.qtd || dados.qtd.length <= 0) {
      qtd = "Insira o CNPJ da empresa";
      r = false;
    }
    if (!dados.tipo || dados.tipo === "0") {
      tipo = "Selecione o tipo da doação";
      r = false;
    }
    if (!dados.conservacao || dados.conservacao.length <= 0) {
      conservacao = "Selecione o modo de conservação";
      r = false;
    }
    if (!dados.dataFabricacao || dados.dataFabricacao.length <= 0) {
      dataFabricacao = "Insira uma data de fabricação válida";
      r = false;
    }
    if (!dados.dataValidade || dados.dataValidade.length <= 0) {
      dataValidade = "Insira uma data de validade válida";
      r = false;
    }
    if (!dados.dataRetirada || dados.dataRetirada.length <= 0) {
      dataRetirada = "Insira uma data de retirada válida";
      r = false;
    }
    if (!dados.horaRetirada || dados.horaRetirada.length <= 0) {
      horaRetirada = "Confirme sua hora de retirada corretamente";
      r = false;
    }
    setMensagens({
      ...mensagens,
      nomeDoacao,
      qtd,
      tipo,
      conservacao,
      dataFabricacao,
      dataValidade,
      dataRetirada,
      horaRetirada,
    });
    console.log(mensagens);
    return r;
  }

  async function cadastrarDoacao() {
    // Validação dos dados
    if (validarDados({ ...doacao })) {
      // Enviando dados para a função que chama a rota POST da API
      const novaDoacao = {
        ...doacao,
        nomeDoacao: doacao.nomeDoacao,
        tipo: parseInt(doacao.tipo),
        conservacao: parseInt(doacao.conservacao),
        qtd: doacao.qtd,
        dataFabricacao: doacao.dataFabricacao,
        dataValidade: doacao.dataValidade,
        dataRetirada: doacao.dataRetirada,
        horaRetirada: doacao.horaRetirada,
      };

      await addDoacao(novaDoacao);
      navigate("/home");
    }
  }
  return (
    <>
      <div className="container p-5">
        <h1>Cadastre sua Doação</h1>

        <div className="mt-5 mb-5 text-center">
          <button
            className="btn btn-info text-white mt-2"
            onClick={() => cadastrarDoacao()}
          >
            Cadastrar
          </button>
          {/* <div className="mb-2">
                        <img className={pagina !== 1 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/490660/company.svg" alt="Ícone de empresa" width={pagina !== 1 ? 35 : 60} />
                        <img className={pagina !== 2 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/383565/location-pin.svg" alt="Ícone de ponto no mapa" width={pagina !== 2 ? 35 : 60} />
                        <img className={pagina !== 3 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/416019/account-user-avatar.svg" alt="Ícone de acesso de usuário" width={pagina !== 3 ? 35 : 60} />
                    </div>

                    <button className="btn btn-info text-white mt-2 mr-2" onClick={() => setPagina(pagina - 1)} disabled={pagina <= 1}>{"Voltar"}</button>
                     */}
        </div>

        <form>
          <DadosDoacao
            mensagens={mensagens}
            setMensagens={setMensagens}
            doacao={doacao}
            setDoacao={setDoacao}
          />
        </form>
      </div>
    </>
  );
}
