import Chart from "react-apexcharts";

export default function GraficoLineas() {
  const options = {
    chart: { id: "asistencia-line", toolbar: { show: false }, foreColor: "black" },
    xaxis: { categories: ["Lun", "Mar", "Mié", "Jue", "Vie"] },
    stroke: { curve: "smooth" as const },
    colors: ['#14b8a6'],
    yaxis: { axisBorder: { show: false }, axisTicks: { show: false }, labels: { show: true } },
    grid: { yaxis: { lines: { show: false } } },
  };

  const series = [{ name: "Asistencias", data: [100, 200, 150, 300, 250] }];

  return <Chart options={options} series={series} type="line" height={300} />;
}