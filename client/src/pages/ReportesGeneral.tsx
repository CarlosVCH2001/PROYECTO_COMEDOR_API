// src/pages/Reportes.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardResumen from "@/components/CardResumen";
import GraficoLineas from "@/components/GraficoLineas";
import TablaAsistencia from "@/components/TablaAsistencia";
import { Users, CheckCircle, XCircle } from "lucide-react";
import GraficoSemicircular from "@/components/GraficoSemicircular";

export default function Reportes() {
  return (
    <div className="flex flex-col p-4 space-y-4 bg-gray-100 text-white">
      <div className="flex-1 basis-1/3 grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardResumen titulo="Total Comensales" valor="1,000" icono={<Users className="text-blue-500"/>}/>
        <CardResumen titulo="Asistencias" valor="750" icono={<CheckCircle className="text-green-500"/>}/>
        <CardResumen titulo="Ausencias" valor="250" icono={<XCircle className="text-red-500"/>}/>
        <Card className="h-40 p-0 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
          <CardContent>
            <GraficoSemicircular asistencia={75} inasistencia={25}/>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 basis-2/3 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-0 col-span-1 md:col-span-2 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
          <CardHeader className="pt-[13px]">
            <CardTitle>Asistencia en el tiempo</CardTitle>
          </CardHeader>
          <CardContent>
            <GraficoLineas />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 flex-1 bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e] p-0">
          <CardHeader className="pt-[13px]">
            <CardTitle>Lista de Faltas</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[280px] w-full rounded-md border p-2 overflow-auto">
              <TablaAsistencia />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}