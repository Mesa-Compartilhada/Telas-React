import logo from "../../assets/MC_Logo.svg";
import { Link } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { TIPO_EMPRESA } from "../../constants/empresa";

export default function Header() {
  const { user, logoutUser } = AuthData()

  const logout = () => {
    logoutUser()
  }

  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <Link to={"/dashboard"}>
              <img
                className="md:w-64 w-40 pt-2 md:p-3 self-center"
                src={logo}
                alt="Logo do WebSite, uma fruteira"
              />
            </Link>

            {/* Navegação (Disponíveis, Meus Dados, Histórico) */}
            <nav className="flex space-x-8">
              { user && TIPO_EMPRESA[user.tipo] == TIPO_EMPRESA.DOADORA && <a href="/cadastro-doacao" className="text-sm font-medium text-gray-900 link-default">Nova doação</a> }
              <a href="/meus-dados" className="text-sm font-medium text-gray-900 link-default" >Meus Dados</a>
              <a href="/historico" className="text-sm font-medium text-gray-900 link-default"> Histórico</a>
            </nav>

            {/* Botões Criar Doação e Sair */}
            <div className="flex items-center gap-4">
              {/* Botão Criar Doação */}
              {
                user !== null
                && user.tipo === 1
                ?
                <button
                  className="inline-flex items-center justify-center gap-1.5 rounded border bg-azul px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-branco"
                  type="button">
                  <Link className="text-sm font-medium" to={"/cadastro-doacao"}> Criar Doação </Link>
                </button>
                :
                ""
              }
              

              {/* Botão Sair */}
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded bg-l-Abobora px-5 py-3 text-sm font-medium text-white transition hover:bg-opacity-35 focus:outline-none focus:ring focus:ring-branco"
                type="button"
                onClick={() => logout()}>
                <span className="text-sm font-medium"> Sair </span>

              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
