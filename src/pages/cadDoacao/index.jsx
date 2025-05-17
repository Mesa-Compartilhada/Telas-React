import { useNavigate } from "react-router-dom";
import DadosDoacao from "./components/dadosDoacao";
import { useState } from "react";
import { addDoacao } from "../../lib/api/doacao";
import { AuthData } from "../../auth/AuthWrapper";
import Header from "../../components/Header_V2.jsx";
import { toast } from "react-toastify";

export default function CadDoacao() {
  const navigate = useNavigate();
  const data = new Date().toISOString().split("T")[0];
  const { user } = AuthData();
  // JSON que armazena as informações da empresa
  const [doacao, setDoacao] = useState({});
  // State para mensagens de erro nos inputs
  const [mensagens, setMensagens] = useState({});
  function validarDados(dados) {
    let nome,
      descricao,
      quantidade,
      unidadeMedida,
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
      nome = "Insira o nome da doação";
      r = false;
    }
    if (!dados.descricao || dados.descricao.length <= 0) {
      descricao = "Insira a descricao da doação";
      r = false;
    }

    if (!dados.descricao || dados.quantidade.length <= 0) {
      quantidade = "Insira a quantidade da doação";
      r = false;
    }

    if (!dados.descricao || dados.unidadeMedida.length <= 0) {
      unidadeMedida = "Insira a unidade de medida da doação";
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
    if (!dados.conservacao || dados.conservacao === "0") {
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
      quantidade,
      unidadeMedida,
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
    if (validarDados({ ...doacao })) {
      // Enviando dados para a função que chama a rota POST da API
       let quantidadeConvertida = doacao.unidadeMedida === "2" || doacao.unidadeMedida === "4" ? doacao.quantidade * 1000 : doacao.quantidade
      const novaDoacao = {
        ...doacao,
    
        nome: doacao.nome,
        descricao: doacao.descricao,
        quantidade: quantidadeConvertida,
        unidadeMedida: doacao.unidadeMedida === "1" || doacao.unidadeMedida === "2" ? "2": "1",
        observacao: doacao.observacao,
        horarioMin: doacao.horaRetiradaMin,
        horarioMax: doacao.horaRetiradaMax,
        tipoAlimento: parseInt(doacao.tipo),
        tipoArmazenamento: parseInt(doacao.conservacao),
        dataFabricacao: doacao.dataFabricacao,
        dataValidade: doacao.dataValidade,
        dataCriada: data,
        dataMaxRetirada: doacao.dataRetirada,
        empresaDoadoraId: user.id,
      };
      await addDoacao(novaDoacao);
      toast.success("Doação cadastrada")
      navigate("/dashboard");
    }
  }
  return (
    <>
      <Header />
      <div className="centraliza !h-full">
        <div className="mx-10 lg:mx-20 my-4 md:w-3/5 border-4 p-10 shadow-xl rounded-2xl gradiente">
          <h1 className="text-3xl text-center">Cadastre sua Doação</h1>
          <br />
          <form>
            <DadosDoacao
              mensagens={mensagens}
              setMensagens={setMensagens}
              doacao={doacao}
              setDoacao={setDoacao}
            />
          </form>

          <div className="mt-5 mb-5 text-center h-">
            <button
              className="btn btn-primary text-black mt-2 w-2/6 h-full"
              onClick={() => cadastrarDoacao()}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
