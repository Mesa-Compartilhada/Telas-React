import { Link } from "react-router-dom";
import logo from "../../assets/MC_Logo.svg";
import user from "../../assets/user.svg";

export default function Header() {
  return (
    <>
      <header class="bg-l-pessego">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <img
                className="md:w-64 w-40 pt-2 md:p-3 self-center"
                src={logo}
                alt="Logo do WebSite, uma fruteira"
              />
            </div>

            <div class="flex items-center gap-4">
            <Link to={"/cadastro"}> 
              <button
                class="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition focus:outline-none focus:ring focus:ring-branco "
                type="button"
              >
                <span class="text-sm font-medium">Cadastro</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              </Link>

              <Link to={"/login"} class="text-sm font-medium"> 
                <button
                  class="inline-flex items-center justify-center gap-1.5 rounded bg-l-Abobora px-5 py-3 text-sm font-medium text-white transition hover:bg-opacity-35 focus:outline-none focus:ring focus:ring-branco"
                  type="button"
                >
                  <span class="text-sm font-medium">Login</span>

                  <img src={user} className="size-4" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
