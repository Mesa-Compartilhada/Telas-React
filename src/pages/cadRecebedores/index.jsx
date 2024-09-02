export default function CadRecebedores() {
//   function primeiroAcesso() {
//     // Se não tiver "Banco" no localStorage insere
//     if (!localStorage.getItem("Banco")) {
//       let dados = [
//         {
//           id: Date.now(),
//           dadosBasicos: {
//             nome: "Fatec",
//             cnpj: "00.000.000/0000-00",
//             tipo: "Outro",
//           },
//           endereco: {
//             logradouro: "Avenida Luiz Merenda",
//             numero: "433",
//             CEP: "09931-390",
//             complemento: "Não tem",
//             bairro: "Canhema",
//             cidade: "Diadema",
//           },
//           dadosLogin: {
//             email: "Fatec@217.com",
//             senha: "Fatec217",
//           },
//         },
//       ];
//       banco = JSON.stringify(dados);
//       localStorage.setItem("Banco", banco);
//     }
//   }
//   function pegaValores() {
//     let nomeE = document.getElementById("nome").value;
//     let cnpj = document.getElementById("cnpj").value;
//     let testabelecimento = document.getElementById("tipo").value;
//     let endereco = document.getElementById("endereco").value;
//     let numero = document.getElementById("numero").value;
//     let CEP = document.getElementById("Cep").value;
//     let complemento = document.getElementById("Complemento").value;
//     let bairro = document.getElementById("Bairro").value;
//     let email = document.getElementById("email").value;
//     let senha = document.getElementById("senha").value;

//     let novoDado = {
//       id: Date.now(),
//       dadosBasicos: {
//         nome: nomeE,
//         cnpj: cnpj,
//         tipo: testabelecimento,
//       },
//       endereco: {
//         logradouro: endereco,
//         numero: numero,
//         CEP: CEP,
//         complemento: complemento,
//         bairro: bairro,
//         cidade: "Diadema",
//       },
//       dadosLogin: {
//         email: email,
//         senha: senha,
//       },
//     };

//     return novoDado;
//   }
//   function limpaCampos() {
//     document.getElementById("nome").value = "";
//     document.getElementById("cnpj").value = "";
//     document.getElementById("tipo").value = "";
//     document.getElementById("endereco").value = "";
//     document.getElementById("numero").value = "";
//     document.getElementById("Cep").value = "";
//     document.getElementById("Complemento").value = "";
//     document.getElementById("Bairro").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("senha").value = "";
//   }

//   // função que pega o cadastro dos recebedores 'R'
//   function cadastroR() {
//     let novoCadastro = pegaValores();
//     let banco = localStorage.getItem("Banco");
//     banco = JSON.parse(banco);

//     for (let i = 0; i < banco.length; i++) {
//       if (banco[i].dadosLogin.email == novoCadastro.dadosLogin.email) {
//         return alert("Email já cadastrado");
//       }
//     }
//     if (novoCadastro.dadosLogin.email == "") {
//       return alert("Preencha os dados corretamente");
//     }
//     banco.push(novoCadastro);
//     banco = JSON.stringify(banco);
//     localStorage.setItem("Banco", banco);

//     alert(
//       "Obrigada por fazer o seu cadastro " +
//         novoCadastro.dadosBasicos.nome +
//         "\n Você é um(a) " +
//         novoCadastro.dadosBasicos.tipo +
//         " certo?" +
//         "\n Seu email é " +
//         novoCadastro.dadosLogin.email
//     );
//     limpaCampos();
//     window.location.href = "/Login";
//   }

//   primeiroAcesso();
  return (
    <>
      <div class="container">
        <h1>Cadastro recebedor</h1>
        <h4>Dados básicos:</h4>
        <form>
          <div class="form-group">
            <label for="nome">Nome de sua instituição:</label>
            <input
              type="text"
              id="nome"
              class="form-control"
              placeholder="Nome instituição"
            />
          </div>

          <div class="form-group">
            <label for="cnpj"> CNPJ: </label>
            <input
              type="text"
              id="cnpj"
              class="form-control"
              placeholder="00.000.000/0000-00"
            />
            <small class="form-text text-muted">
              Nunca vamos compartilhar seu CNPJ com ninguém.
            </small>
          </div>

          <div class="form-group">
            <label for="tipo">Tipo da instituição:</label>
            <select class="form-control" id="tipo">
              <option></option>
              <option>Organização não governamental</option>
              <option>Organização Religiosa</option>
              <option>Unidade básica de saúde</option>
              <option>Outro</option>
            </select>
          </div>

          <h4>Endereço da instituição:</h4>
          <div class="form-row">
            <div class="col-10 form-group">
              <label for="endereco">Endereço:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Ex: Avenida Brasil"
                id="endereco"
              />
            </div>
            <div class="col-2">
              <label for="numero">Número:</label>
              <input
                type="text"
                id="numero"
                class="form-control"
                placeholder="Ex: 123"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col form-group">
              <label for="Cep">CEP:</label>
              <input
                type="text"
                id="Cep"
                class="form-control"
                placeholder="00000-000"
              />
            </div>
            <div class="col form-group">
              <label for="Complemento">Complemento:</label>
              <input
                type="text"
                id="Complemento"
                class="form-control"
                placeholder="Ex: Apto 1"
              />
            </div>
            <div class="col form-group">
              <label for="Bairro">Bairro:</label>
              <input
                type="text"
                id="Bairro"
                class="form-control"
                placeholder="Ex: Centro"
              />
            </div>
            <div class="col form-group">
              <label for="Cidade">Cidade:</label>
              <select id="Cidade" class="form-control">
                <option>Diadema</option>
              </select>
            </div>
          </div>

          <h4>Dados de login:</h4>
          <div class="form-group">
            <label for="email">Digite seu email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="contato@instituição.com.br"
            />
          </div>

          <div class="form-group">
            <label for="senha">Senha:</label>
            <input
              type="password"
              class="form-control"
              id="senha"
              placeholder="Senha"
            />
          </div>

          <button class="pushable" type="button" 
        //   onClick={
        //     cadastroR()
        //     }
            >
            <span class="edge"></span>
            <span class="front">Enviar</span>
          </button>
        </form>
      </div>
    </>
  );
}
