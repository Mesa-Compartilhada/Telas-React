export default function LinhaDoacoes(props){
  const {doacao} = props

  const cores = {
    CONCLUIDA: "text-green-900 bg-green-500/20",
    CANCELADA: "text-red-900 bg-red-500/20",
  };

  function formataData(data) {
    const pedacos = data.split("-")
    return `${pedacos[2]}/${pedacos[1]}/${pedacos[0]}`
    
  }


    return (
      <>
        <tr>
          <td className="p-4 border-b border-blue-gray-50">
            <div className="flex items-center gap-3">
              <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                {doacao.nome}
              </p>
            </div>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {formataData(doacao.dataCriada)}
            </p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {doacao.dataEncerrada != null
                ? formataData(doacao.dataEncerrada)
                : "-"}
            </p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <div className="w-max">
              <div className={`relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap /20 ${cores[doacao.status]}`}>
                <span className="">{doacao.status}</span>
              </div>
            </div>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <div className="flex items-center gap-3">
              <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                {doacao.tipoAlimento}
              </p>
            </div>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                    <path
                      fillRule="evenodd"
                      d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
              </span>
            </button>
          </td>
        </tr>
      </>
    );
}