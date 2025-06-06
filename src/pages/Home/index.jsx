// Components:
import Header from "../../components/Header_V1.jsx/index.jsx";
import FAQ from "./components/faq.jsx";

// Assets:
import logo from "../../assets/MC_Logo.svg";
import alvo from "../../assets/alvo.svg";
import check from "../../assets/check.svg";
import entrega from "../../assets/entrega_mc.webp";
import mapa from "../../assets/Mapa.svg";
import ODS10 from "../../assets/SDG-10.svg";
import ODS12 from "../../assets/SDG-12.svg";
import ODS17 from "../../assets/SDG-17.svg";
import ODS2 from "../../assets/SDG-2.svg";

export default function Home() {

  return (
    <>
      <div className="bg-white h-full">
        {/* Banner */}
        <div className=" pt-5 lg:p-0">
          <div className="container text-l-Abobora flex flex-col lg:flex-row justify-center lg:gap-10 pb-10">
            <div className="self-center lg:max-w-lg">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl drop-shadow-lg shadow-azul-escuro">
                Reduzir o desperdício e{" "}
                <span className="underline underline-offset-3 decoration-8 decoration-azul">
                  compartilhar
                </span>{" "}
                com quem mais precisa
              </h1>
              <p className="text-lg font-normal text-azul-escuro lg:text-xl ">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-10 md:p-20">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-azul shadow-lg shadow-azul-escuro">
                <img src={alvo} className="size-6" alt="" />
              </div>
              <h1 className="font-extrabold mb-3 text-xl lg:px-14">Objetivos</h1>
              <p className="px-4 text-azul-escuro text-justify">
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
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-azul shadow-azul-escuro">
                <img src={check} className="size-6" alt="" />
              </div>
              <h1 className="font-extrabold mb-3 text-xl lg:px-14 ">Impacto</h1>
              <p className="px-4 text-azul-escuro text-justify">
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
          {/* Container */}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <h2 className="text-3xl font-bold md:text-5xl text-l-Abobora">
              Nossas metas dos Objetivos de Desenvolvimento Sustentável
            </h2>
            {/* Content */}
            <div className=" grid gap-0 sm:justify-items-stretch  md:grid-cols-2 md:gap-4 lg:gap-8 text-azul-escuro">
              {/* Item */}
              <a
                href="/"
                className="flex flex-col md:flex-row items-center gap-4 rounded-md p-4"
              >
                <img
                  src={ODS2}
                  alt=""
                  className="inline-block h-36 w-36 max-w-none flex-none object-cover"
                />
                <div className="flex flex-col items-start py-4">
                  <p className="mb-4 text-xl font-bold">
                    Fome zero e agricultura sustentável
                  </p>
                  <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
                    <p>
                      Erradicar a fome, alcançar a segurança alimentar, melhorar
                      a nutrição e promover a agricultura sustentável
                    </p>
                  </div>
                </div>
              </a>
              {/* Item */}
              <a
                href="/"
                className="flex flex-col md:flex-row items-center gap-4 rounded-md p-4"
              >
                <img
                  src={ODS10}
                  alt=""
                  className="inline-block h-36 w-36 max-w-none flex-none object-cover"
                />
                <div className="flex flex-col items-start py-4">
                  <p className="mb-4 text-xl font-bold">
                    Redução das desigualdades
                  </p>
                  <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
                    <p>
                      Reduzir as desigualdades no interior dos países e entre
                      países
                    </p>
                  </div>
                </div>
              </a>
              {/* Item */}
              <a
                href="/"
                className="flex flex-col md:flex-row items-center gap-4 rounded-md p-4"
              >
                <img
                  src={ODS12}
                  alt=""
                  className="inline-block h-36 w-36 max-w-none flex-none object-cover"
                />
                <div className="flex flex-col items-start py-4">
                  <p className="mb-4 text-xl font-bold">
                    Consumo e produção responsáveis
                  </p>
                  <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
                    <p>
                      Garantir padrões de consumo e de produção sustentáveis
                    </p>
                  </div>
                </div>
              </a>
              {/* Item */}
              <a
                href="/"
                className="flex flex-col md:flex-row items-center gap-4 rounded-md p-4"
              >
                <img
                  src={ODS17}
                  alt=""
                  className="inline-block h-36 w-36 max-w-none flex-none object-cover"
                />
                <div className="flex flex-col items-start py-4">
                  <p className="mb-4 text-xl font-bold">
                    Parcerias e meios de implementação
                  </p>
                  <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
                    <p>
                      Reforçar os meios de implementação e revitalizar a
                      parceria global para o desenvolvimento sustentável
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div className="h-auto md:h-[32rem] max-w-screen-2xl md:bg-cover ">
            <img src={entrega} alt="" />
          </div>
        </section>
        <section>
          <FAQ />
        </section>
        <section>
          <footer className="block bg-l-pessego">
            {/* Container */}
            <div className="py-8  mx-auto w-full max-w-7xl px-5 md:px-10">
              {/* Component */}
              <div className="flex-col flex items-center">
                <a href="/" className="inline-block max-w-full text-black">
                  <img
                    src={logo}
                    alt=""
                    className="inline-block md:w-64 w-40 pt-2 md:p-3"
                  />
                </a>

                <div className="mb-3 border-b bg-l-Abobora w-48"></div>
                <div className="mb-12 grid-cols-1  grid w-full max-w-52 gap-3">
                  <p className="text-sm sm:text-base ">
                    © Copyright 2024. Todos os direitos reservados.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}
