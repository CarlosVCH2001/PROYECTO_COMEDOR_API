// src/pages/Reportes.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardResumen from "@/components/CardResumen";
import GraficoLineas from "@/components/GraficoLineas";
import GraficoRadial from "@/components/GraficoRadial";
import TablaAsistencia from "@/components/TablaAsistencia";
import { Users, CheckCircle, XCircle } from "lucide-react";

export default function Reportes() {
  return (
    <div className="flex flex-col p-4 space-y-4 bg-gray-100 text-white">
      <div className="flex-1 basis-1/3 grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardResumen titulo="Total Comensales" valor="1,248" icono={<Users className="text-blue-500 text-7xl"/>}/>
        <CardResumen titulo="Asistencias" valor="852" icono={<CheckCircle className="text-green-500 text-7xl"/>}/>
        <CardResumen titulo="Ausencias" valor="396" icono={<XCircle className="text-red-500 text-7xl"/>}/>
        <Card className="h-48 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
          <CardContent>
            <GraficoRadial />
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 basis-2/3 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="col-span-1 md:col-span-2 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
          <CardHeader>
            <CardTitle>Asistencia en el tiempo</CardTitle>
          </CardHeader>
          <CardContent>
            <GraficoLineas />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 flex-1 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
          <CardHeader>
            <CardTitle>Lista de Faltas</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md border p-2">
              <TablaAsistencia />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}