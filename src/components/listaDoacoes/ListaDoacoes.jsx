import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../pages/Dashboard";
import { CardDoacao } from "./components/CardDoacao";

export function ListaDoacoes({ getDoacoes, params = [] }) {
  const { doacoesAlteradas, setDoacoesAlteradas } =
    useContext(DashboardContext);

  const [doacoes, setDoacoes] = useState(null);

  useEffect(() => {
    getListaDeDoacoes();
  }, [doacoesAlteradas]);

  const getListaDeDoacoes = async () => {
    let result = await getDoacoes(...params);
    setDoacoes(result);
  };

  return (
    <>
      {doacoes != null && doacoes.length > 0 ? (
        <div className="flex justify-around flex-wrap overflow-y-auto max-h-[300px] max-w-[1400px] inset-6">
          {doacoes.map((doacao) => (
            <CardDoacao key={doacao.id} doacao={doacao} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2 max-w-64 bg-white rounded-xl p-2 shadow-gray-300 shadow-md">
          <p>Não há doações disponíveis</p>
        </div>
      )}
    </>
  );
}
