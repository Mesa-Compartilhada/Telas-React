import { useState } from "react";

export default function FAQ() {
  // State to keep track of which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // List of FAQs
  const faqs = [
    {
      question: "O que pode ser doado?",
      answer: [
        "Alimentos in natura em condições de consumo",
        "Produtos industrializados dentro do prazo de validade e armazenados conforme as disposições do fabricante",
        "Refeições prontas para o consumo",
      ],
    },
    {
      question: "Condições",
      answer: [
        "A doação deve ser gratuita, sempre.",
        "O armazenamento dos alimentos excedentes deve ser em um local apropriado, distante dos alimentos que irão para o lixo.",
        "Não pode haver relação de compra e venda de alimentos doados.",
      ],
    },
    {
      question: "Quem pode doar?",
      answer: [
        "Varejo de alimentos (super, hiper, mercado, mini, conveniência, hortifrutis, entre outros",
        "Indústria alimentícia e centros de distribuição",
        "Restaurantes, lanchonetes, hospitais e estabelecimentos que forneçam alimentos preparados prontos",
      ],
    },
    {
      question: "Quem pode receber?",
      answer: [
        "Organizações da Sociedade Civil (OSCs)",
        "Bancos de Alimentos",
        "Pessoas, famílias ou grupos em situação de vulnerabilidade e risco alimentar",
      ],
    },
  ];

  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16">
        <div className="flex w-full max-w-4xl flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8 bg-azul drop-shadow-md"
            >
              <div className="max-w-3xl">
                <h2 className="text-xl font-bold text-black">{faq.question}</h2>
                {openFAQ === index && (
                  <p className="font-inter mt-4 text-base font-light text-gray-500">
                    <ul>
                      {faq.answer.map((item) => {
                        return <li className="text-black list-disc ">{item}</li>;
                      })}
                    </ul>
                  </p>
                )}
              </div>
              <button
                className="absolute right-5 top-9 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white"></circle>
                  <path
                    d="M7.04688 11.9999H16.9469"
                    stroke="#FF6600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 7.05005V16.95"
                    stroke="#FF6600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${
                      openFAQ === index ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-100 ease-in-out`}
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
