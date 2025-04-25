import Chart from "react-apexcharts";

export default function GraficoRadial() {
  const options = {
    chart: { type: "radialBar" as const, foreColor: "#14b8a6" },
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        dataLabels: { value: { fontSize: "22px" } },
      },
    },
    labels: ["Asistencia"],
    colors: ['#14b8a6'],
  };

  const series = [75];

  return <Chart options={options} series={series} type="radialBar" height={300} />;
}