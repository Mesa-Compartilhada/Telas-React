import { useState } from "react";
import { addEndereco } from "../../lib/api/endereco";
import { addEmpresa } from "../../lib/api/empresa";
import { useNavigate } from "react-router-dom";
import { DadosBasicos } from "./components/DadosBasicos";
import { Endereco } from "./components/Endereco";
import { DadosLogin } from "./components/DadosLogin";
const bcrypt = require('bcryptjs')

export default function CadDoadores() {

  const navigate = useNavigate();

  // JSON que armazena as informações da empresa
  const [empresa, setEmpresa] = useState({})
  // JSON que armazena as informações do endereço (é armazenado separadamente no banco de dados)
  const [endereco, setEndereco] = useState({})
  // State para mensagens de erro nos inputs
  const [mensagens, setMensagens] = useState({})

  function validarDados(dados) {
    let nome, cnpj, tipo, categoria, cep, numero, email, senha, confirmacaoDeSenha
    let r = true
    if (pagina === 1) {
      if (!dados.nome || dados.nome.length <= 0) {
        nome = "Insira o nome da empresa"
        r = false
      }
      if (!dados.cnpj || dados.cnpj.length <= 0) {
        cnpj = "Insira o CNPJ da empresa"
        r = false
      }
      if (!dados.tipo || dados.tipo === "0") {
        tipo = "Selecione o tipo da empresa"
        r = false
      }
      if (!dados.categoria || dados.categoria === "0") {
        categoria = "Selecione a categoria da empresa"
        r = false
      }
    }
    else if (pagina === 2) {
      if (!dados.cep || dados.cep.length <= 0) {
        cep = "Insira um CEP válido"
        r = false
      }
      if (!dados.numero || dados.numero.length <= 0) {
        numero = "Insira um número válido"
        r = false
      }
    }
    else if (pagina === 3) {
      if (!dados.email || dados.email.length <= 0) {
        email = "Insira um email válido"
        r = false
      }
      if (!dados.senha || dados.senha.length <= 0) {
        senha = "Insira uma senha válida"
        r = false
      }
      if (!dados.confirmacaoDeSenha || dados.confirmacaoDeSenha.length <= 0 || dados.senha != dados.confirmacaoDeSenha) {
        confirmacaoDeSenha = "Confirme sua senha corretamente"
        r = false
      }
    }
    setMensagens({ ...mensagens, nome, cnpj, tipo, categoria, cep, numero, email, senha, confirmacaoDeSenha })
    console.log(mensagens)
    return r
  }

  async function cadastrarEmpresa() {
    // Validação dos dados
    if (validarDados({ ...empresa, ...endereco })) {
      // Enviando dados para a função que chama a rota POST da API
      let enderecoAdicionado = await addEndereco(endereco)

      let senha = await bcrypt.hash(empresa.senha, 10)

      const novaEmpresa = {
        ...empresa,
        tipo: parseInt(empresa.tipo),
        categoria: parseInt(empresa.categoria),
        status: "1",
        senha: senha,
        confirmacaoDeSenha: senha,
        enderecoId: enderecoAdicionado.id
      }

      await addEmpresa(novaEmpresa)
      navigate("/login")
    }
  }

  // Função para preencher campos do endereço automaticamente
  async function preencherEndereco(cep) {
    // API (também retorna latitude e longitude para usar em mapas depois): https://github.com/raniellyferreira/awesomeapi-cep
    let result = await fetch(`https://cep.awesomeapi.com.br/json/${cep.target.value}`, {
      method: "GET"
    }
    )
    let endereco = await result.json()
    // O número e o complemento são adicionados pelos próprios inputs
    setEndereco({
      cep: cep.target.value,
      logradouro: endereco.address,
      bairro: endereco.district,
      cidade: endereco.city,
      estado: endereco.state,
      pais: "Brasil",
    })
  }

  const [pagina, setPagina] = useState(1)

  function avançarPagina(dados) {
    console.log(dados)
    if (validarDados(dados)) {
      setPagina(pagina + 1)
    }
  }

  return (
    <>
      <div className="container p-5">
        <h1>Cadastre sua empresa</h1>

        <div className="mt-5 mb-5 text-center">
          <div className="mb-2">
            <img className={pagina !== 1 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/490660/company.svg" alt="Ícone de empresa" width={pagina !== 1 ? 35 : 60} />
            <img className={pagina !== 2 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/383565/location-pin.svg" alt="Ícone de ponto no mapa" width={pagina !== 2 ? 35 : 60} />
            <img className={pagina !== 3 ? "opacity-25" : ""} src="https://www.svgrepo.com/show/416019/account-user-avatar.svg" alt="Ícone de acesso de usuário" width={pagina !== 3 ? 35 : 60} />
          </div>

          <button className="btn btn-info text-white mt-2 mr-2" onClick={() => setPagina(pagina - 1)} disabled={pagina <= 1}>{"Voltar"}</button>
          <button className="btn btn-info text-white mt-2" onClick={() => avançarPagina({ ...empresa, ...endereco })} disabled={pagina >= 3}>{"Avançar"}</button>
        </div>

        <form>
          {
            pagina === 1 ? <DadosBasicos mensagens={mensagens} setMensagens={setMensagens} setPagina={setPagina} empresa={empresa} setEmpresa={setEmpresa} />
              : pagina === 2 ? <Endereco mensagens={mensagens} setMensagens={setMensagens} setPagina={setPagina} endereco={endereco} setEndereco={setEndereco} preencherEndereco={preencherEndereco} />
                : <DadosLogin mensagens={mensagens} setMensagens={setMensagens} setPagina={setPagina} empresa={empresa} setEmpresa={setEmpresa} cadastrarEmpresa={cadastrarEmpresa} />
          }
        </form>
      </div>
    </>
  );
}
