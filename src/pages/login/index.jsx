export default function Login() {
//   function fazerLogin() {
//     let email = document.getElementById("email").value;
//     let senha = document.getElementById("senha").value;
//     let banco = localStorage.getItem("Banco");
//     banco = JSON.parse(banco);

//     for (let i = 0; i < banco.length; i++) {
//       if (
//         banco[i].dadosLogin.email === email &&
//         banco[i].dadosLogin.senha === senha
//       ) {
//         sessionStorage.setItem("LoginAtual", JSON.stringify(banco[i]));
//         alert("Bem-vindo");
//       }
//     }
//   }
  return (
    <>
      <div class="container-fluid centraliza">
        <div class="card vidro" style={{ width: "44rem" }}>
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <form>
              <div class="form-group">
                <label for="email">Digite seu email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="contato@empresa.com.br"
                  required="required"
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

              <button
                class="pushable btn btn-info"
                type="submit"
                // onClick={fazerLogin()}
              >
                <span class="edge"></span>
                <span class="front">Enviar</span>
              </button>
              <a class="btn btn-outline-link" href="/">
                Não possui cadastro?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
