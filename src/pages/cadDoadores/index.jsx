import { useState } from "react";
import { addEndereco } from "../../lib/api/endereco";
import { addEmpresa } from "../../lib/api/empresa";
const bcrypt = require('bcryptjs')

export default function CadDoadores() {

  // Categorias de empresa para preencher os dropdown
  const categoriaDoadora = {
    1: "Restaurante", 
    2: "Hortifrutti", 
    3: "Mercado", 
    4: "Padaria", 
    5: "Fast Food",
    6: "Outro"
  }
  const categoriaRecebedora = {
    1: "Organização não governamental", 
    2: "Organização Religiosa", 
    3: "Unidade básica de saúde",
    4: "Outro"
  }

  // JSON que armazena as informações da empresa
  const [empresa, setEmpresa] = useState({})
  // JSON que armazena as informações do endereço (é armazenado separadamente no banco de dados)
  const [endereco, setEndereco] = useState({})

  async function cadastrarEmpresa() {
    // Validação dos dados
    if(
      endereco.cep
      && endereco.numero
      && empresa.nome && empresa.nome.length > 1
      && empresa.cnpj
      && empresa.tipo
      && empresa.senha && empresa.senha.length >= 8
      && empresa.confirmacaoDeSenha && empresa.confirmacaoDeSenha.length >= 8
      && empresa.senha === empresa.confirmacaoDeSenha
    ) {
      // Enviando dados para a função que chama a rota POST da API
      let enderecoAdicionado = await addEndereco(endereco)

      let senha = await bcrypt.hash(empresa.senha, 10)
      // Adicionar enderecoId no JSON da empresa
      setEmpresa({
        ...empresa,
        enderecoId: enderecoAdicionado.id,
      })

      const novaEmpresa = {
        ...empresa,
        tipo: parseInt(empresa.tipo),
        categoria: parseInt(empresa.categoria),
        status: "1",
        senha: senha,
        confirmacaoDeSenha: senha,
        enderecoId: enderecoAdicionado.id
      }

      console.log(novaEmpresa)
      let empresaAdicionada = await addEmpresa(novaEmpresa)
      console.log(enderecoAdicionado)
      console.log(empresaAdicionada)
    }
    else {
      console.log("Dados inválidos")
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

  return (
    <>
      <div className="container p-5">
        <h1>Cadastro doador</h1>
        <h4>Dados básicos:</h4>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome fantasia de sua empresa:</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Nome fantasia"
              onChange={(e) => setEmpresa({...empresa, nome: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cnpj"> CNPJ: </label>
            <input
              type="text"
              id="cnpj"
              className="form-control"
              placeholder="00.000.000/0000-00"
              onChange={(e) => setEmpresa({...empresa, cnpj: e.target.value})}
            />
            <small className="form-text text-muted">
              Nunca vamos compartilhar seu CNPJ com ninguém.
            </small>
          </div>
          
          <div className="form-group">
            <label htmlFor="tipo">Tipo da empresa</label>
            <select name="tipo" id="tipo" className="form-control" onChange={(e) => setEmpresa({...empresa, tipo: e.target.value})}>
              <option value="">Selecione um tipo</option>
              <option value={1}>Doadora</option>
              <option value={2}>Recebedora</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="categoria">
              { empresa.categoria === 1 
                ? "Categoria de estabelecimento:" 
                : "Categoria de instituição:"
              }
            </label>
            <select className="form-control" id="categoria" disabled={ !empresa.tipo || empresa.tipo.length <= 0 } onChange={(e) => setEmpresa({ ...empresa, categoria: e.target.value })}>
              <option value="">Selecione uma categoria</option>
              {
                empresa.tipo == 1 
                ? Object.keys(categoriaDoadora).map(key => <option key={key} value={key}>{categoriaDoadora[key]}</option>)
                : Object.keys(categoriaRecebedora).map(key => <option key={key} value={key}>{categoriaRecebedora[key]}</option>)
              }
            </select>
          </div>

          <hr className="mt-4 mb-4" />

          <h4>Endereço do estabelecimento:</h4>
          <div className="form-row">
            <div className="col form-group">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                className="form-control"
                placeholder="00000-000"
                onChange={(e) => preencherEndereco(e)
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col form-group">
              <label htmlFor="logradouro">Logradouro:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Avenida Brasil"
                id="logradouro"
                defaultValue={endereco.logradouro}
                disabled
              />
            </div>
            <div className="col form-group">
              <label htmlFor="bairro">Bairro:</label>
              <input
                type="text"
                id="bairro"
                className="form-control"
                placeholder="Ex: Centro"
                defaultValue={endereco.bairro}
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col form-group">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                className="form-control"
                placeholder="Ex: SP"
                defaultValue={endereco.cidade}
                disabled
              />
            </div>
            <div className="col form-group">
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                className="form-control"
                placeholder="Ex: SP"
                defaultValue={endereco.estado}
                disabled
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-2">
              <label htmlFor="numero">Número:</label>
              <input
                type="text"
                id="numero"
                className="form-control"
                placeholder="Ex: 123"
                onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
              />
            </div>
            <div className="col form-group">
              <label htmlFor="complemento">Complemento:</label>
              <input
                type="text"
                id="complemento"
                className="form-control"
                placeholder="Ex: Apto 1"
                onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
              />
            </div>
          </div>
          
          <hr className="mt-4 mb-4" />

          <h4>Dados de login:</h4>
          <div className="form-group">
            <label htmlFor="email">Digite seu email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="contato@empresa.com.br"
              required="required"
              onChange={(e) => setEmpresa({...empresa, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder="Senha"
              onChange={(e) => setEmpresa({...empresa, senha: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmacaoDeSenha">Senha:</label>
            <input
              type="password"
              className="form-control"
              id="confirmacaoDeSenha"
              placeholder="Confirmação de Senha"
              onChange={(e) => setEmpresa({...empresa, confirmacaoDeSenha: e.target.value})}
            />
          </div>

          <button className="btn-primary pushable rounded p-1" type="button" onClick={() => cadastrarEmpresa()}>
            <span className="edge"></span>
            <span className="front">Enviar</span>
          </button>
        </form>
      </div>
    </>
  );
}
