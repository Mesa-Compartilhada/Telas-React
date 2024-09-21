import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light navegacao"
        style={{backgroundColor: "var(--azul-claro)"}}
      >
        <a className="navbar-brand" href="./index.html">
          <img src={logo} alt="Logo do projeto" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#conteudoNavbarSuportado"
          aria-controls="conteudoNavbarSuportado"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-lg-4"
          id="conteudoNavbarSuportado"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#QuemSomos">
                Quem somos?
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-item"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Quero participar!
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="/cadastro"
                >
                  Quero ser doador!
                </a>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="/CadRecebedores"
                >
                  Quero ser recebedor!
                </a>
              </div>
            </li>
          </ul>
          <a
            className="nav-link btn btn"
            style={{color: "black", backgroundColor: "var(--laranja)"}}
            href="/login"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}
