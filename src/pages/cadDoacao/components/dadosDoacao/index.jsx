import InputField from "../../../../components/inputs/InputField";
import SelectField from "../../../../components/inputs/SelectField";

export default function DadosDoacao(props) {
  const { mensagens, setMensagens, doacao, setDoacao } = props;

  // Categorias de doacao para preencher os dropdown
  const categoriaDoacao = {
    0: "Selecione uma categoria",
    1: "Caseira",
    2: "Industrializado",
    3: "Perecível",
    4: "Não Perecível",
    5: "In Natura",
  };
  const formaConservacao = {
    0: "Selecione uma forma de conservação",
    1: "Armazenamento em local seco",
    2: "Pronto para consumo",
    3: "Refrigeração",
    4: "Congelamento",
  };

  return (
    <div className="flex flex-col gap-5">
      <h3>Dados da doação:</h3>
      <InputField
        change={(e) => setDoacao({ ...doacao, nome: e.target.value })}
        defaultValue={doacao.nome}
        disabled={false}
        id={"nomeDoacao"}
        label={"Nome da doação:"}
        msg={mensagens.nome}
        name={"nomeDoacao"}
        type={"text"}
      />
      <InputField
        change={(e) => setDoacao({ ...doacao, descricao: e.target.value })}
        defaultValue={doacao.descricao}
        disabled={false}
        id={"descricao"}
        label={"Descricao da doação:"}
        msg={mensagens.descricao}
        name={"descricao"}
        type={"text"}
      />
      <InputField
        change={(e) => setDoacao({ ...doacao, observacao: e.target.value })}
        defaultValue={doacao.observacao}
        disabled={false}
        id={"observacao"}
        label={"Observação da doação:"}
        msg={mensagens.observacao}
        name={"observacao"}
        type={"text"}
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
        disabled={false}
        id={"dataValidade"}
        label={"Data de validade:"}
        msg={mensagens.dataValidade}
        name={"dataValidade"}
        type={"date"}
      />
      <h3>Dados da retirada:</h3>
      <InputField
        change={(e) => setDoacao({ ...doacao, dataRetirada: e.target.value })}
        defaultValue={doacao.dataRetirada}
        disabled={false}
        id={"dataRetirada"}
        label={"Data máx de retirada:"}
        msg={mensagens.dataRetirada}
        name={"dataRetirada"}
        type={"date"}
      />
      <InputField
        change={(e) =>
          setDoacao({ ...doacao, horaRetiradaMin: e.target.value })
        }
        defaultValue={doacao.horaRetiradaMin}
        disabled={false}
        id={"horaRetiradaMin"}
        label={"Horário min de retirada:"}
        msg={mensagens.horaRetiradaMin}
        name={"horaRetiradaMin"}
        type={"time"}
      />
      <InputField
        change={(e) =>
          setDoacao({ ...doacao, horaRetiradaMax: e.target.value })
        }
        defaultValue={doacao.horaRetiradaMax}
        disabled={false}
        id={"horaRetiradaMax"}
        label={"Horário max de retirada:"}
        msg={mensagens.horaRetiradaMax}
        name={"horaRetiradaMax"}
        type={"time"}
      />
    </div>
  );
}
