// Components:
import Header from "../../components/Header_V1.jsx/index.jsx"

// Assets:
import alvo from "../../assets/alvo.svg";
import check from "../../assets/check.svg";
import mapa from "../../assets/Mapa.svg";
import ODS2 from "../../assets/SDG-2.svg";
import ODS10 from "../../assets/SDG-10.svg";
import ODS12 from "../../assets/SDG-12.svg";
import ODS17 from "../../assets/SDG-17.svg";



export default function Home() {
  return (
    <>
      <div className="bg-white h-full ">
        <Header/>
        {/* Banner */}
        <div className=" pt-5 lg:p-0">
          <div className="container text-l-Abobora flex flex-col lg:flex-row justify-center lg:gap-10 pb-10">
            <div className="self-center lg:max-w-lg">
              <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl drop-shadow-lg shadow-azul-escuro">
                Reduzir o desperdício e{" "}
                <span class="underline underline-offset-3 decoration-8 decoration-azul">
                  compartilhar
                </span>{" "}
                com quem mais precisa
              </h1>
              <p class="text-lg font-normal text-azul-escuro lg:text-xl ">
                O Mesa Compartilhada nasceu com o objetivo de combater a fome e
                promover a solidariedade em nossa comunidade. Além da doação de
                alimentos, buscamos conscientizar a população sobre a
                importância do combate ao desperdício e o fortalecimento da
                cultura de solidariedade.
              </p>

              {/* <h1 className="text-3xl lg:text-5xl ">
                Reduzir o desperdício e{" "}
                <span className="text-azul ">compartilhar</span> com quem mais
                precisa
              </h1>
              <p className="pt-3 text-azul-escuro text-sm lg:text-base">
                O Mesa Compartilhada nasceu com o objetivo de combater a fome e
                promover a solidariedade em nossa comunidade. Além da doação de
                alimentos, buscamos conscientizar a população sobre a
                importância do combate ao desperdício e o fortalecimento da
                cultura de solidariedade.
              </p> */}
            </div>
            <div className="hidden lg:inline-block lg:w-2/5">
              <img className="lg:pt-5 drop-shadow-2xl" src={mapa} alt="" />
            </div>
          </div>
        </div>

        {/* Quem Somos */}
        <section className="container bg-l-pessego ">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-center pt-6 text-l-Abobora">
            Quem somos
          </h1>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 p-20">
            <div class="rounded-xl bg-white p-6 text-center shadow-xl">
              <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-azul shadow-lg shadow-azul-escuro">
                <img src={alvo} className="size-6" alt="" />
              </div>
              <h1 class="font-extrabold mb-3 text-xl lg:px-14">Objetivos</h1>
              <p class="px-4 text-azul-escuro text-justify">
                Somos um projeto que tem como objetivo conectar empresas
                fornecedoras de alimentos que fazem descarte de refeições,
                produtos in natura e não perecíveis perto do vencimento e que
                ainda estão bons para consumo a organizações não governamentais,
                religiosas e resposavéis,mais proximas para distruibuição desse
                alimento a pessoas vuneráveis.
              </p>
            </div>
            <div
              data-aos-delay="150"
              class="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-azul shadow-azul-escuro">
                <img src={check} className="size-6" alt="" />
              </div>
              <h1 class="font-extrabold mb-3 text-xl lg:px-14 ">Impacto</h1>
              <p class="px-4 text-azul-escuro text-justify">
                Assim contribuimos para a diminuição do desperdicio de alimentos
                e auxiliamos no acesso a alimentação de pessoas em situação de
                vulnerabilidade social construido uma sociedade mais solidária e
                sustentável.
              </p>
            </div>
          </div>
        </section>
        {/* Metas ODS */}
        <section>
          <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
              {/* Title */}
              <h2 className="text-center mb-8 text-3xl font-bold md:text-5xl">
                Nossas metas dos Objetivos de Desenvolvimento Sustentável
              </h2>
              {/* Content */}
              <div className="mx-auto grid max-w-xl gap-4">
                <a
                  href="/"
                  className="flex flex-col items-center pb-8 text-center border-b border-gray-300 sm:flex-row sm:text-left"
                >
                  <img src={ODS2} alt="" className="h-40 w-40 max-w-32" />
                  <div className="px-8">
                    <p className="mb-6 text-sm font-bold sm:text-base lg:mb-6">
                      Fome zero e agricultura sustentável
                    </p>
                    <p className="text-sm text-gray-500">
                      Erradicar a fome, alcançar a segurança alimentar, melhorar
                      a nutrição e promover a agricultura sustentável
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex flex-col items-center pb-8 text-center border-b border-gray-300 sm:flex-row sm:text-left"
                >
                  <img src={ODS10} alt="" className="h-40 w-40 max-w-32" />
                  <div className="px-8">
                    <p className="mb-6 text-sm font-bold sm:text-base lg:mb-6">
                      Redução das desigualdades
                    </p>
                    <p className="text-sm text-gray-500">
                      Reduzir as desigualdades no interior dos países e entre
                      países
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex flex-col items-center pb-8 text-center border-b border-gray-300 sm:flex-row sm:text-left "
                >
                  <img src={ODS12} alt="" className="h-40 w-40 max-w-32" />
                  <div className="px-8">
                    <p className="mb-6 text-sm font-bold sm:text-base lg:mb-6">
                      Consumo e produção responsáveis
                    </p>
                    <p className="text-sm text-gray-500">
                      Garantir padrões de consumo e de produção sustentáveis
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex flex-col items-center pb-8 text-center border-b border-gray-300 sm:flex-row sm:text-left "
                >
                  <img src={ODS17} alt="" className="h-40 w-40 max-w-32" />
                  <div className="px-8">
                    <p className="mb-6 text-sm font-bold sm:text-base lg:mb-6">
                      Parcerias e meios de implementação
                    </p>
                    <p className="text-sm text-gray-500">
                      Reforçar os meios de implementação e revitalizar a
                      parceria global para o desenvolvimento sustentável
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
