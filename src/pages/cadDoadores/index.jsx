import { useState } from "react";
import { addEndereco } from "../../lib/api/endereco";
import { addEmpresa } from "../../lib/api/empresa";
import { useNavigate } from "react-router-dom";
import { DadosBasicos } from "./components/DadosBasicos";
import { Endereco } from "./components/Endereco";
import { DadosLogin } from "./components/DadosLogin";
import icone_empresa from "./../../assets/icone_empresa.svg"
import icone_ponto_map from "./../../assets/icone_ponto_mapa.svg"
import icone_usuario from "./../../assets/icone_usuario.svg"
import { ListaDoacao } from "../../components/listaDoacoes/ListaDoacoes";

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
      if(!dados.senha || dados.senha.length < 8) {
        senha = "A senha deve ter pelo menos 8 dígitos"
        r = false
      }
      if(!dados.confirmacaoDeSenha || dados.confirmacaoDeSenha.length < 8) {
        confirmacaoDeSenha = "A senha deve ter pelo menos 8 dígitos"
        r = false
      }
    }
    setMensagens({ ...mensagens, nome, cnpj, tipo, categoria, cep, numero, email, senha, confirmacaoDeSenha })
    return r
  }

  async function cadastrarEmpresa() {
    // Validação dos dados
    if (validarDados({ ...empresa, ...endereco })) {
      // Enviando dados para a função que chama a rota POST da API
      let enderecoAdicionado = await addEndereco(endereco)
      if(enderecoAdicionado) {
        const novaEmpresa = {
          ...empresa,
          tipo: parseInt(empresa.tipo),
          categoria: parseInt(empresa.categoria),
          status: 1,
          enderecoId: enderecoAdicionado.id
        }
        
        let empresaAdicionada = await addEmpresa(novaEmpresa)
        if(empresaAdicionada) {
          navigate("/login")
        }
      }
    }
  }

  const [pagina, setPagina] = useState(1)

  function avançarPagina(dados) {
    console.log(endereco)
    if (validarDados(dados)) {
      setPagina(pagina + 1)
    }
  }

  return (
    <div className="">
      <div className="mx-16 lg:mx-80 my-4">
        <h1 className="text-4xl m-4">Cadastre sua empresa</h1>

        <div className="flex flex-col items-center gap-4 my-4">
          <div className="mb-2 flex flex-row">
            <img className={pagina !== 1 ? "opacity-25" : ""} src={icone_empresa} alt="Ícone de empresa" width={pagina !== 1 ? 35 : 60} />
            <img className={pagina !== 2 ? "opacity-25" : ""} src={icone_ponto_map} alt="Ícone de ponto no mapa" width={pagina !== 2 ? 35 : 60} />
            <img className={pagina !== 3 ? "opacity-25" : ""} src={icone_usuario} alt="Ícone de acesso de usuário" width={pagina !== 3 ? 35 : 60} />
          </div>
          <div className="flex flex-row">
            <button className="text-white mt-2 mr-2 bg-l-Abobora p-2 rounded-md disabled:opacity-80 enabled:hover:bg-opacity-80" onClick={() => setPagina(pagina - 1)} disabled={pagina <= 1}>{"Voltar"}</button>
            <button className="text-white mt-2 bg-l-Abobora p-2 rounded-md disabled:opacity-80 enabled:hover:bg-opacity-80" onClick={() => avançarPagina({ ...empresa, ...endereco })} disabled={pagina >= 3}>{"Avançar"}</button>
          </div>
        </div>

        <form>
          {
            pagina === 1 ? <DadosBasicos mensagens={mensagens} empresa={empresa} setEmpresa={setEmpresa} />
              : pagina === 2 ? <Endereco mensagens={mensagens} endereco={endereco} setEndereco={setEndereco} />
                : <DadosLogin mensagens={mensagens} empresa={empresa} setEmpresa={setEmpresa} cadastrarEmpresa={cadastrarEmpresa} />
          }
        </form>
      </div>
    </div>
  );
}
