export function CardDoacao(props) {
  const { doacao } = props
  return (
    <div className="flex flex-col w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md" key={doacao.id}>
      <p className="text-lg">{doacao.nome}</p>
      <a className="opacity-80 text-xs" href="#">{doacao.empresaDoadora.nome}</a>
      <div className="flex flex-row gap-2 my-2">
        <small className="opacity-80 bg-blue-700 text-white p-1 rounded-md text-xs">{doacao.dataEncerrada}</small>
        <small className="opacity-80 bg-green-700 text-white p-1 rounded-md text-xs">{doacao.status}</small>
      </div>
      <p className="opacity-80 text-sm">{doacao.descricao}</p>
      <p className="opacity-80 text-sm">{doacao.observacao}</p>
      <button className="my-2 p-2 rounded-md bg-l-Abobora text-branco w-1/2 hover:bg-opacity-80">Solicitar</button>
    </div>
  )
}