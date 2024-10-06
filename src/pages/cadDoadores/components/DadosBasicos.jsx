import InputField from "../../../components/inputs/InputField"
import SelectField from "../../../components/inputs/SelectField"

export function DadosBasicos(props) {
  const { mensagens, empresa, setEmpresa } = props

  // Categorias de empresa para preencher os dropdown
  const categoriaDoadora = {
    0: "Selecione uma categoria",
    1: "Restaurante", 
    2: "Hortifrutti", 
    3: "Mercado", 
    4: "Padaria", 
    5: "Fast Food",
    6: "Outro"
  }
  const categoriaRecebedora = {
    0: "Selecione uma categoria",
    1: "Organização não governamental", 
    2: "Organização Religiosa", 
    3: "Unidade básica de saúde",
    4: "Outro"
  }

  return(
    <div className="flex flex-col gap-5">
      <h4 className="text-2xl mb-2">Dados básicos:</h4>
      
      <InputField type={"text"} label={"Nome fantasia"} name={"nome"} id={"nome"} defaultValue={empresa.nome} msg={mensagens.nome} change={(e) => setEmpresa({...empresa, nome: e.target.value})}/>
      
      <InputField type={"text"} label={"CNPJ"} name={"cnpj"} id={"cnpj"} defaultValue={empresa.cnpj} msg={mensagens.cnpj} hint={"Nunca vamos compartilhar seu CNPJ com ninguém."} change={(e) => setEmpresa({...empresa, cnpj: e.target.value})} />

      <SelectField name={"tipo"} label={"Tipo empresa:"} id={"tipo"} options={{0: "Selecione um tipo", 1: "Doadora", 2: "Recebedora"}} msg={mensagens.tipo} defaultValue={empresa.tipo} change={(e) => setEmpresa({...empresa, tipo: e.target.value})} />
      
      {
        empresa.tipo === "1"
        ? <SelectField name={"categoria"} label={"Categoria de estabelecimento:"} id={"categoria"} options={categoriaDoadora} msg={mensagens.categoria} defaultValue={empresa.categoria} disabled={!empresa.tipo || empresa.tipo === "0"} change={(e) => setEmpresa({...empresa, categoria: e.target.value})} />
        : <SelectField name={"categoria"} label={"Categoria de instituição:"} id={"categoria"} options={categoriaRecebedora} msg={mensagens.categoria} defaultValue={empresa.categoria} disabled={!empresa.tipo || empresa.tipo === "0"} change={(e) => setEmpresa({...empresa, categoria: e.target.value})} />
      }
    </div>
  )
}