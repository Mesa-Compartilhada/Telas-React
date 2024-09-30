export default function DadosDoacao(props) {
    const { mensagens, setMensagens, doacao, setDoacao } = props

    // Categorias de doacao para preencher os dropdown
    const categoriaDoacao = {
        1:"Caseira",
        2:"Industrializado",
        3: "Perecível",
        4: "Não Perecível",
        5: "In Natura",
    }
    const formaConservacao = {
        1: "Armazenamento em local seco",
        2: "Pronto para consumo",
        3: "Refrigeração",
        4: "Congelamento",
    }

    return (
        <>
            <h3>Dados da doação:</h3>
            <div className="form-group">
                <label htmlFor="nome_doacao">Nome da doação:</label>
                <input
                    type="text"
                    id="nome_doacao"
                    className="form-control"
                    placeholder="Nome doacao"
                    defaultValue={doacao.nome}
                    onChange={(e) => setDoacao({ ...doacao, nome: e.target.value })}
                />
                <small className="form-text text-muted">
                    {mensagens.nome ?? ""}
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="qtd_alimentos">Quantidade de alimentos:</label>
                <input
                    type="text"
                    id="qtd_alimentos"
                    className="form-control"
                    placeholder="Quantidade de alimentos"
                    onChange={(e) => setDoacao({ ...doacao, qtd: e.target.value })}
                />
                <small className="form-text text-muted">
                    {mensagens.nome ?? ""}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="tipo_alimento"> Tipo do Alimento: </label>
                <select name="tipo_alimento" id="tipo_alimento" className="form-control" onChange={(e) => setDoacao({ ...doacao, tipo: e.target.value })} defaultValue={doacao.tipo}>
                    <option value={0}>Selecione um tipo</option>
                    {Object.keys(categoriaDoacao).map(key => <option key={key} value={key}>{categoriaDoacao[key]}</option>)}
                </select>
                <small className="form-text text-muted">
                    {mensagens.tipo ?? ""}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="modo_conserv">Modo de conservação:</label>
                <select name="modo_conserv" id="modo_conserv" className="form-control" onChange={(e) => setDoacao({ ...doacao, conservacao: e.target.value })} defaultValue={doacao.conservacao}>
                    <option value={0}>Selecione um modo</option>
                    {Object.keys(formaConservacao).map(key => <option key={key} value={key}>{formaConservacao[key]}</option>)}
                </select>
                <small className="form-text text-muted">
                    {mensagens.tipo ?? ""}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="data_fabricacao">Data de fabricação:</label>
                <input
                    type="date"
                    id="data_fabricacao"
                    className="form-control"
                    onChange={(e) => setDoacao({ ...doacao, data_fabricacao: e.target.value })}
                />
                <small className="form-text text-muted">
                    {mensagens.nome ?? ""}
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="data_validade">Data de validade:</label>
                <input
                    type="date"
                    id="data_validade"
                    className="form-control"
                    onChange={(e) => setDoacao({ ...doacao, data_validade: e.target.value })}
                />
                <small className="form-text text-muted">
                    {mensagens.nome ?? ""}
                </small>
            </div>
            <h3>Dados da retirada:</h3>
            <div className="form-group">
                <label htmlFor="data_retirada">Data máx de retirada:</label>
                <input
                    type="date"
                    id="data_retirada"
                    className="form-control"
                    onChange={(e) => setDoacao({ ...doacao, data_retirada: e.target.value })}
                />
                <small className="form-text text-muted">
                    {mensagens.nome ?? ""}
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="hora_retirada">Horário max de retirada:</label>
                <input
                    type="time"
                    id="hora_retirada"
                    className="form-control"
                    onChange={(e) => setDoacao({ ...doacao, hora_retirada: e.target.value })}
                />
                <small className="form-text text-muted">
                    {mensagens.nome ?? ""}
                </small>
            </div>
        </>
    )
}