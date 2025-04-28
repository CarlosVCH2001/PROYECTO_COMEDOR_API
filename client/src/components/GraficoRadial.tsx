import Chart from "react-apexcharts";

export default function GraficoRadial() {
  const options = {
    chart: { type: "radialBar" as const, foreColor: "#14b8a6" },
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" }, // achicado
        dataLabels: { value: { fontSize: "18px" } }, // número más pequeño
      },
    },
    labels: ["Asistencia"],
    colors: ['#14b8a6'],
  };

  const series = [75];

  return <Chart options={options} series={series} type="radialBar" height={150} />; // altura más baja
}
