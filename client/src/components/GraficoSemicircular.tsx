import Chart from "react-apexcharts";

interface Props {
  asistencia: number;
  inasistencia: number;
}

export default function GraficoSemicircular({ asistencia, inasistencia }: Props) {
  const series = [asistencia];

  const options = {
    chart: {
      type: "radialBar" as const,
      sparkline: { enabled: true }, // elimina espacios innecesarios
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: "60%",
        },
        track: {
          background: "#e5e7eb",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "22px",
            color: "#0f766e",
            offsetY: -2,
            formatter: (val: number) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        gradientToColors: ["#0ea5e9"],
        stops: [0, 100],
      },
    },
    stroke: { lineCap: "round" as const },
    labels: ["Asistencia"],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Chart options={options} series={series} type="radialBar" height={180} />
      <div className="flex flex-wrap justify-between gap-y-2 w-full max-w-xs text-xs text-gray-700 px-1 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-500"></div>
          Asistencia
          <span className="ml-2 font-medium">{asistencia}%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          Inasistencia
          <span className="ml-2 font-medium">{inasistencia}%</span>
        </div>
      </div>
    </div>
  );
}
