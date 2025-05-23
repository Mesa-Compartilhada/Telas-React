import { Link } from "react-router-dom";
import logo from "../../assets/MC_Logo.svg";
import user_icon from "../../assets/user.svg";
import { AuthData } from "../../auth/AuthWrapper";

export default function Header() {

  const { user } = AuthData()

  return (
    <>
      <header className="bg-l-pessego">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <img
                className="md:w-64 w-40 pt-2 md:p-3 self-center"
                src={logo}
                alt="Logo do WebSite, uma fruteira"
              />
            </div>

            <div className="flex items-center gap-4">
              {
                !user
                ?
                <>
                  <Link to={"/cadastro"}> 
                    <button
                      className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition focus:outline-none focus:ring focus:ring-branco "
                      type="button"
                    >
                      <span className="text-sm font-medium">Cadastro</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link to={"/login"} className="text-sm font-medium"> 
                    <button
                      className="inline-flex items-center justify-center gap-1.5 rounded bg-azul px-5 py-3 text-sm font-medium text-white transition hover:bg-opacity-35 focus:outline-none focus:ring focus:ring-branco"
                      type="button"
                    >
                      <span className="text-sm font-medium">Login</span>

                      <img src={user_icon} className="size-4" alt="" />
                    </button>
                  </Link> 
                </>
                :
                <Link to={"/dashboard"}>
                  <button
                    className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition focus:outline-none focus:ring focus:ring-branco "
                    type="button"
                  >
                    <span className="text-sm font-medium">Dashboard</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </Link>
              }
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
