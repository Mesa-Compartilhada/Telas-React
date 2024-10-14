import { useNavigate } from "react-router-dom";
import DadosDoacao from "./components/dadosDoacao";
import { useState } from "react";
import { addDoacao } from "../../lib/api/doacao";
import { AuthData } from "../../auth/AuthWrapper";

export default function CadDoacao() {
  const navigate = useNavigate();
  const data = new Date().toLocaleDateString();
  const { user } = AuthData()
  // JSON que armazena as informações da empresa
  const [doacao, setDoacao] = useState({});
  // State para mensagens de erro nos inputs
  const [mensagens, setMensagens] = useState({});
  function validarDados(dados) {
    debugger;
    let nome,
      descricao,
      observacao,
      tipo,
      conservacao,
      dataFabricacao,
      dataValidade,
      dataRetirada,
      horaRetiradaMin,
      horaRetiradaMax;
    let r = true;
    if (!dados.nome || dados.nome.length <= 0) {
      nome = "Insira o nome da empresa";
      r = false;
    }
    if (!dados.descricao || dados.descricao.length <= 0) {
      descricao = "Insira a descricao da doação";
      r = false;
    }
    if (!dados.observacao || dados.observacao.length <= 0) {
      observacao = "Insira a observacao da doação";
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
    if (!dados.horaRetiradaMin || dados.horaRetiradaMin.length <= 0) {
      horaRetiradaMin = "Confirme sua hora de retirada corretamente";
      r = false;
    }
    if (!dados.horaRetiradaMax || dados.horaRetiradaMax.length <= 0) {
      horaRetiradaMax = "Confirme sua hora de retirada corretamente";
      r = false;
    }
    setMensagens({
      ...mensagens,
      nome,
      descricao,
      observacao,
      tipo,
      conservacao,
      dataFabricacao,
      dataValidade,
      dataRetirada,
      horaRetiradaMin,
      horaRetiradaMax,
    });
    return r;
  }

  async function cadastrarDoacao() {
    
    // Validação dos dados
    console.log(validarDados({ ...doacao }));
    
    if (validarDados({ ...doacao })) {
      // Enviando dados para a função que chama a rota POST da API
      const novaDoacao = {
        ...doacao,
        nome: doacao.nome,
        descricao: doacao.descricao,
        observacao: doacao.observacao,
        horarioMin: doacao.horaRetiradaMin,
        horarioMax: doacao.horaRetiradaMax,
        tipoAlimento: parseInt(doacao.tipo),
        tipoArmazenamento: parseInt(doacao.conservacao),
        dataFabricacao: doacao.dataFabricacao,
        dataValidade: doacao.dataValidade,
        dataCriada: data,
        dataMaxRetirada: doacao.dataRetirada,
        empredaDoadoraId: user.id
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
            className="btn btn-info text-black mt-2"
            onClick={() => cadastrarDoacao()}
          >
            Cadastrar
          </button>
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
