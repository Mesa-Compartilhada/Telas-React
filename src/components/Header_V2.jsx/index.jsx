import logo from "../../assets/MC_Logo.svg";


export default function Header() {
  return (
    <>
      <header>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <div>
              <img
                className="md:w-64 w-40 pt-2 md:p-3 self-center"
                src={logo}
                alt="Logo do WebSite, uma fruteira"
              />
            </div>

            {/* Navegação (Disponíveis, Meus Dados, Histórico) */}
            <nav className="flex space-x-8">
              <a href="#disponiveis" className="text-sm font-medium text-gray-900 link-default">Disponíveis</a>
              <a href="#meus-dados" className="text-sm font-medium text-gray-900 link-default" >Meus Dados</a>
              <a href="#historico" className="text-sm font-medium text-gray-900 link-default"> Histórico</a>
            </nav>

            {/* Botões Criar Doação e Sair */}
            <div class="flex items-center gap-4">
              {/* Botão Criar Doação */}
              <button
                class="inline-flex items-center justify-center gap-1.5 rounded border bg-azul px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-branco"
                type="button">
                <a class="text-sm font-medium" href="/cadDoacao"> Criar Doação </a>

               
              </button>

              {/* Botão Sair */}
              <button
                class="inline-flex items-center justify-center gap-1.5 rounded bg-l-Abobora px-5 py-3 text-sm font-medium text-white transition hover:bg-opacity-35 focus:outline-none focus:ring focus:ring-branco"
                type="button">
                <span class="text-sm font-medium"> Sair </span>

              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
