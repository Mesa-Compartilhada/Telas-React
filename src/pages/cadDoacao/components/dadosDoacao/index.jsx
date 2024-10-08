import InputField from "../../../../components/inputs/InputField";
import SelectField from "../../../../components/inputs/SelectField";

export default function DadosDoacao(props) {
  const { mensagens, setMensagens, doacao, setDoacao } = props;

  // Categorias de doacao para preencher os dropdown
  const categoriaDoacao = {
    1: "Caseira",
    2: "Industrializado",
    3: "Perecível",
    4: "Não Perecível",
    5: "In Natura",
  };
  const formaConservacao = {
    1: "Armazenamento em local seco",
    2: "Pronto para consumo",
    3: "Refrigeração",
    4: "Congelamento",
  };

  return (
    <>
      <h3>Dados da doação:</h3>
      <InputField
        change={(e) => setDoacao({ ...doacao, nome: e.target.value })}
        defaultValue={doacao.nome}
        hint={mensagens.nome ?? ""}
        disabled={false}
        id={"nomeDoacao"}
        label={"Nome da doação:"}
        msg={mensagens.nome}
        name={"nomeDoacao"}
        type={"text"}
      />
      <InputField
        change={(e) => setDoacao({ ...doacao, qtd: e.target.value })}
        defaultValue={doacao.qtd}
        hint={mensagens.qtd ?? ""}
        disabled={false}
        id={"qtdAlimentos"}
        label={"Quantidade de alimentos:"}
        msg={mensagens.qtd}
        name={"qtdAlimentos"}
        type={"number"}
      />
      <SelectField
        change={(e) => setDoacao({ ...doacao, tipo: e.target.value })}
        defaultValue={doacao.tipo}
        disabled={false}
        id={"tipoAlimento"}
        label={"Tipo do Alimento"}
        msg={mensagens.tipo ?? ""}
        name={"tipoAlimento"}
        options={categoriaDoacao}
      />
      <SelectField
        change={(e) => setDoacao({ ...doacao, conservacao: e.target.value })}
        defaultValue={doacao.conservacao}
        disabled={false}
        id={"modoConservacao"}
        label={"Modo de Conservação"}
        msg={mensagens.conservacao ?? ""}
        name={"modoConservacao"}
        options={formaConservacao}
      />
      <InputField
        change={(e) => setDoacao({ ...doacao, dataFabricacao: e.target.value })}
        defaultValue={doacao.dataFabricacao}
        hint={mensagens.dataFabricacao ?? ""}
        disabled={false}
        id={"dataFabricacao"}
        label={"Data de fabricação:"}
        msg={mensagens.dataFabricacao}
        name={"dataFabricacao"}
        type={"date"}
      />
      <InputField
        change={(e) => setDoacao({ ...doacao, dataValidade: e.target.value })}
        defaultValue={doacao.dataValidade}
        hint={mensagens.dataValidade ?? ""}
        disabled={false}
        id={"dataValidade"}
        label={"Data de validade:"}
        msg={mensagens.dataValidade}
        name={"dataValidade"}
        type={"date"}
      />
      <h3>Dados da retirada:</h3><br />
      <InputField
        change={(e) => setDoacao({ ...doacao, dataRetirada: e.target.value })}
        defaultValue={doacao.dataRetirada}
        hint={mensagens.dataRetirada ?? ""}
        disabled={false}
        id={"dataRetirada"}
        label={"Data máx de retirada:"}
        msg={mensagens.dataRetirada}
        name={"dataRetirada"}
        type={"date"}
      />
      <InputField
        change={(e) => setDoacao({ ...doacao, horaRetirada: e.target.value })}
        defaultValue={doacao.horaRetirada}
        hint={mensagens.horaRetirada ?? ""}
        disabled={false}
        id={"horaRetirada"}
        label={"Horário max de retirada:"}
        msg={mensagens.horaRetirada}
        name={"horaRetirada"}
        type={"date"}
      />
    </>
  );
}
