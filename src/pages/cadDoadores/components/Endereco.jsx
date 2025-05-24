import InputField from "../../../components/inputs/InputField"

export function Endereco(props) {
  const { mensagens, endereco, setEndereco } = props

  // Função para preencher campos do endereço automaticamente
  async function preencherEndereco(cep) {
    cep = cep.target.value
    if(cep.length >= 8) { 
      // API (também retorna latitude e longitude para usar em mapas depois): https://github.com/raniellyferreira/awesomeapi-cep
      let result = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`, {
        method: "GET"
      })
      let dadosCep = await result.json()
      // O número e o complemento são adicionados pelos próprios inputs
      setEndereco({
        ...endereco,
        cep: cep,
        logradouro: dadosCep.address,
        bairro: dadosCep.district,
        cidade: dadosCep.city,  
        estado: dadosCep.state,
        pais: "Brasil",
        latitude: parseFloat(dadosCep.lat),
        longitude: parseFloat(dadosCep.lng)
      })
      
    }
    else {
      setEndereco({
        ...endereco,
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        pais: "Brasil",
        latitude: "",
        longitude: ""
      })
    }
  }

  return(
    <div className="flex flex-col gap-5">
      <h4 className="text-2xl mb-2">Endereço do estabelecimento:</h4>
      
      <div className="grid grid-cols-1 gap-2">
        <InputField type={"text"} label={"CEP"} name={"cep"} id={"cep"} defaultValue={endereco.cep} msg={mensagens.cep} change={(e) => {
          preencherEndereco(e)
        }} />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <InputField type={"text"} label={"Logradouro"} name={"logradouro"} id={"logradouro"} defaultValue={endereco.logradouro} msg={mensagens.logradouro} disabled={true}/>
        <InputField type={"text"} label={"Bairro"} name={"bairro"} id={"bairro"} defaultValue={endereco.bairro} msg={mensagens.bairro} disabled={true} />
      </div>


      <div className="grid grid-cols-2 gap-2">
        <InputField type={"text"} label={"Cidade"} name={"cidade"} id={"cidade"} defaultValue={endereco.cidade} msg={mensagens.cidade} disabled={true} />
        <InputField type={"text"} label={"Estado"} name={"estado"} id={"estado"} defaultValue={endereco.estado} msg={mensagens.estado} disabled={true} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <InputField type={"text"} label={"Número"} name={"numero"} id={"numero"} defaultValue={endereco.numero} msg={mensagens.numero} change={(e) => setEndereco({...endereco, numero: e.target.value})} />
        <InputField type={"text"} label={"Complemento"} name={"complemento"} id={"complemento"} defaultValue={endereco.complemento} msg={mensagens.complemento} change={(e) => setEndereco({...endereco, complemento: e.target.value})} />
      </div>
    </div>
  )
}