import Header from "../../components/header";
import diadema_fome from '../../assets/diadema_fome.svg';
import doacao from '../../assets/doacao.svg';
import entregando_sopa from '../../assets/entregando_sopa.svg';
import levante_bandeira from '../../assets/levante_bandeira.svg';

export default function PagInicial() {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="banner_textos">
          <h1 className="banner_titulo">Projeto Mesa Compartilhada</h1>
          <h2 className="banner_subtitulo">
            Reduzir o desperdício e ajudar quem mais precisa
          </h2>
          <p>
            Em sintonia com os Objetivos de Desenvolvimento Sustentável da ONU e
            em conformidade com a Lei Nº 14.016, de 23 de junho de 2020, contra
            o desperdício de alimentos, somos um projeto dedicado ao municipio
            de Diadema. Se quiser saber mais sobre a Agenda 2030 da ONU e os
            objetivos para concluir clique em saiba mais.{" "}
          </p>
          <a
            className="btn banner_saibaMais"
            href="https://brasil.un.org/pt-br/sdgs"
          >
            Conheça os ODS's
          </a>
        </div>
        <img
          className="banner_imagemPrinc"
          src={diadema_fome}
          alt=""
        />
      </section>

      <section class="section_dois" id="QuemSomos">
        <div class="container-fluid ">
          <h1 class="banner_titulo_dois">Quem somos?</h1>

          <div class="row">
            <div class="col-md-6">
              {" "}
              <img src={doacao} alt="..." class="rounded-circle" />
            </div>
            <div class="col-md-6 sub_somos ">
              <h3 class="mb-3">Objetivos</h3>
              <h4>
                {" "}
                Somos um projeto que tem como objetivo conectar empresas
                fornecedoras de alimentos que fazem descarte de refeições,
                produtos in natura e não perecíveis perto do vencimento e que
                ainda estão bons para consumo a organizações não governamentais,
                religiosas e resposavéis,mais proximas para distruibuição desse
                alimento a pessoas vuneráveis.{" "}
              </h4>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 sub_somos ">
              <h3 class="mb-3"> Impacto</h3>
              <h4>
                Assim contribuimos para a diminuição do desperdicio de alimentos
                e auxiliamos no acesso a alimentação de pessoas em situação de
                vulnerabilidade social construido uma sociedade mais solidária e
                sustentável !
              </h4>
            </div>
            <div class="col-md-6 ">
              <img
                src={entregando_sopa}
                alt="..."
                class="rounded-circle"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <img
                src={levante_bandeira}
                alt="..."
                class="rounded-circle"
              />
            </div>
            <div class="col-md-6 sub_somos">
              <h3 class="mb-3">Junte-se a nós e faça a diferença!</h3>
              <h4>
                Se você tem uma empresa que fornece alimentos ou uma organização
                responsável, vem fazer parte disso com a gente, para isso acesse
                a aba "Quero Participar!" e contribuia com a mudança na cidade
                de Diadema.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
