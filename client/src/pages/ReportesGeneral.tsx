// src/pages/Reportes.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardResumen from "@/components/CardResumen";
import GraficoLineas from "@/components/GraficoLineas";
import GraficoRadial from "@/components/GraficoRadial";
import TablaAsistencia from "@/components/TablaAsistencia";

export default function Reportes() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen text-white">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardResumen titulo="Total Comensales" valor="1,248" />
            <CardResumen titulo="Asistencias" valor="852" />
            <CardResumen titulo="Ausencias" valor="396" />
          </div>

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
        </div>

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