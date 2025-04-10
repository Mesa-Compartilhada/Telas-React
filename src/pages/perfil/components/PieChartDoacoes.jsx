import { useEffect, useState } from "react";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
} from "recharts";
import { STATUS_DOACAO } from "../../../constants/doacao";
import { TIPO_EMPRESA } from "../../../constants/empresa";
export const PieChartDoacoes = ({ empresa }) => {
  const [tipoAlimentodoacoesRecentes, setTipoAlimentodoacoesRecentes] =
    useState([]);

  useEffect(() => {
    if (empresa.tipo === TIPO_EMPRESA.DOADORA) {
      let doacoes = empresa.doacoes.filter((item) => {
        if (item.status === STATUS_DOACAO.CONCLUIDA) {
          return true;
        }
        return false;
      });

      let contagem = doacoes.reduce((acc, item) => {
        acc[item.tipoAlimento] = (acc[item.tipoAlimento] || 0) + 1;
        return acc;
      }, {});

      let dadosAlimentos = Object.keys(contagem).map((tipo) => ({
        name: tipo,
        value: contagem[tipo],
      }));
      setTipoAlimentodoacoesRecentes(dadosAlimentos);
    }
  }, [empresa.doacoes, empresa.tipo]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8E4162"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {
        <PieChart width={500} height={300} title="TITULO">
          <text
            x="50%"
            y="10%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={20}
            fontWeight="bold"
            fill="#000"
          >
            Doações por tipo de alimento
          </text>
          <Pie
            data={tipoAlimentodoacoesRecentes}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {tipoAlimentodoacoesRecentes.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            {console.log("aqui" + tipoAlimentodoacoesRecentes)}
          </Pie>
          <Legend />
        </PieChart>
      }
    </div>
  );
};
