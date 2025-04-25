import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "react-apexcharts";
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

// Card para KPIs
function CardResumen({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <Card className="bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
      <CardHeader>
        <CardTitle className="text-lg">{titulo}</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-bold text-teal-900">{valor}</CardContent>
    </Card>
  );
}

// Gráfico de líneas
function GraficoLineas() {
  const options = {
    chart: { id: "asistencia-line", toolbar: { show: false }, foreColor: "black" },
    xaxis: { categories: ["Lun", "Mar", "Mié", "Jue", "Vie"] },
    stroke: { curve: "smooth" as const},
    colors: ['#14b8a6'],
    yaxis: { axisBorder: {show: false}, axisTicks: {show: false}, labels: {show: true} },
    grid: {yaxis: {lines: {show: false}}}
  };
  const series = [
    {
      name: "Asistencias",
      data: [100, 200, 150, 300, 250],
    },
  ];
  return <Chart options={options} series={series} type="line" height={300} />;
}

// Gráfico radial
function GraficoRadial() {
  const options = {
    chart: { type: "radialBar"as const, foreColor: "#14b8a6" },
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        dataLabels: {
          value: { fontSize: "22px" },
        },
      },
    },
    labels: ["Asistencia"],
    colors: ['#14b8a6'],
  };
  const series = [75];
  return <Chart options={options} series={series} type="radialBar" height={300} />;
}

// Tabla simple (puedes usar TanStackTable para más filtros)
{/*
function TablaComensales() {
    const datos = [
      {
        dni: "12345678",
        nombre: "Juan Pérez",
        dias: 5,
        codigo: "2021001",
        ciclo: "VI",
        promedio: "14.5",
        creditos: 120,
        ingreso: 2021,
        sisfoh: "Sí",
        carrera: "Ingeniería de Sistemas",
      },
    ];
  
    return (
      <div className="overflow-auto rounded-xl border border-teal-500">
        <Table className="min-w-full text-sm text-white">
        <TableHeader>
            <TableRow>
            {[
                "DNI",
                "Nombre y Apellido",
                "Días",
                "Código",
                "Ciclo",
                "Promedio",
                "Créditos",
                "Ingreso",
                "SISFOH",
                "Carrera",
            ].map((col) => (
                <TableHead key={col} className="px-4 py-2 text-left font-semibold">
                {col}
                </TableHead>
            ))}
            </TableRow>
        </TableHeader>
        
        <TableBody>
            {datos.map((item, i) => (
            <TableRow key={i} className="text-black border-t border-gray-700">
                <TableCell className="px-4 py-2">{item.dni}</TableCell>
                <TableCell className="px-4 py-2">{item.nombre}</TableCell>
                <TableCell className="px-4 py-2">{item.dias}</TableCell>
                <TableCell className="px-4 py-2">{item.codigo}</TableCell>
                <TableCell className="px-4 py-2">{item.ciclo}</TableCell>
                <TableCell className="px-4 py-2">{item.promedio}</TableCell>
                <TableCell className="px-4 py-2">{item.creditos}</TableCell>
                <TableCell className="px-4 py-2">{item.ingreso}</TableCell>
                <TableCell className="px-4 py-2">{item.sisfoh}</TableCell>
                <TableCell className="px-4 py-2">{item.carrera}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
      </div>
    );
  }
*/}
  function TablaAsistencia() {
    const datos = [
      { dni: "12345678", nombre: "Juan Pérez", faltas: "3" },
      { dni: "23456789", nombre: "María García", faltas: "2" },
      { dni: "34567890", nombre: "Luis Rodríguez", faltas: "4" },
      { dni: "45678901", nombre: "Ana Martínez", faltas: "1" },
      { dni: "56789012", nombre: "Carlos Sánchez", faltas: "5" },
      { dni: "67890123", nombre: "Lucía Torres", faltas: "2" },
      { dni: "78901234", nombre: "Jorge Ramírez", faltas: "3" },
      { dni: "89012345", nombre: "Valeria Ríos", faltas: "1" },
      { dni: "90123456", nombre: "Diego Castro", faltas: "4" },
      { dni: "01234567", nombre: "Paula Mendoza", faltas: "2" },
      { dni: "11223344", nombre: "Ricardo Gómez", faltas: "3" },
      { dni: "22334455", nombre: "Camila Herrera", faltas: "2" },
      { dni: "33445566", nombre: "Andrés Ruiz", faltas: "5" },
      { dni: "44556677", nombre: "Natalia Díaz", faltas: "3" },
      { dni: "55667788", nombre: "Manuel Flores", faltas: "1" },
      { dni: "66778899", nombre: "Lorena Chávez", faltas: "4" },
      { dni: "77889900", nombre: "Francisco León", faltas: "2" },
      { dni: "88990011", nombre: "Elena Morales", faltas: "3" },
      { dni: "99001122", nombre: "Santiago Bravo", faltas: "1" },
      { dni: "10111213", nombre: "Gabriela Paredes", faltas: "4" },
    ];
  
    return (
      <div className="overflow-auto rounded-xl border border-teal-500">
        <Table className="min-w-full text-sm text-white">
        <TableHeader>
            <TableRow className="text-black border-t">
            {[
                "DNI",
                "Nombre y Apellido",
                "Faltas",
            ].map((col) => (
                <TableHead key={col} className="px-4 py-2 text-left font-semibold">
                {col}
                </TableHead>
            ))}
            </TableRow>
        </TableHeader>
        
        <TableBody>
            {datos.map((item, i) => (
            <TableRow key={i} className="text-black border-t border-teal-500">
                <TableCell className="px-4 py-2">{item.dni}</TableCell>
                <TableCell className="px-4 py-2">{item.nombre}</TableCell>
                <TableCell className="px-4 py-2">{item.faltas}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
      </div>
    );
  }
// Vista principal del dashboard
export default function Reportes() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen text-white">
      {/* CONTENEDOR PRINCIPAL CON FLEX */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* IZQUIERDA: 2/3 */}
        <div className="md:w-2/3 flex flex-col gap-4">
          {/* Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardResumen titulo="Total Comensales" valor="1,248" />
            <CardResumen titulo="Asistencias" valor="852" />
            <CardResumen titulo="Ausencias" valor="396" />
          </div>

          {/* Gráficas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="col-span-1 md:col-span-2 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
              <CardHeader>
                <CardTitle>Asistencia en el tiempo</CardTitle>
              </CardHeader>
              <CardContent>
                <GraficoLineas />
              </CardContent>
            </Card>

            <Card className="col-span-1 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
              <CardHeader>
                <CardTitle>Porcentaje de asistencia</CardTitle>
              </CardHeader>
              <CardContent>
                <GraficoRadial />
              </CardContent>
            </Card>
          </div>

          {/* Tabla Comensales */}
          {/*
          <Card className="bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
            <CardHeader>
              <CardTitle>Lista de Comensales</CardTitle>
            </CardHeader>
            <CardContent>
              <TablaComensales />
            </CardContent>
          </Card> */}
        </div>

        {/* DERECHA: 1/3 */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <Card className="flex-1 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
            <CardHeader>
              <CardTitle>Lista de Faltas</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[445px] w-full rounded-md border p-4">
                <TablaAsistencia />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
