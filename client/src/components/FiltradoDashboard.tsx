import { CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { SetStateAction, useState } from "react";

export default function FiltrosDashboard() {
  const [fechaInicio, setFechaInicio] = useState<Date | undefined>();
  const [fechaFin, setFechaFin] = useState<Date | undefined>();
  const [comida, setComida] = useState("todas");

  return (
    //<Card className="p-1 bg-white text-black border-teal-500 border-3 h-18 shadow-[0_0_6px_#0f766e]">
      <CardContent className="p-0 text-black flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col">
          <span className="pb-[8px] text-sm text-gray-700 font-semibold">Fecha Inicio</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-start text-left border-teal-500 border-1 shadow-[0_0_6px_#0f766e]">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fechaInicio ? format(fechaInicio, "PPP") : <span>Selecciona fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={fechaInicio} onSelect={setFechaInicio} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col">
          <span className="pb-[8px] text-sm text-gray-700 font-semibold">Fecha Final</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-start text-left border-teal-500 border-1 shadow-[0_0_6px_#0f766e]">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fechaFin ? format(fechaFin, "PPP") : <span>Selecciona fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={fechaFin} onSelect={setFechaFin} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col">
          <span className="pb-[8px] text-sm text-gray-700 font-semibold">Tipo de Comida</span>
          <Select onValueChange={(value: SetStateAction<string>) => setComida(value)} defaultValue={comida}>
            <SelectTrigger className="w-[180px] bg-white border-teal-500 border-1 shadow-[0_0_6px_#0f766e]">
              <SelectValue placeholder="Selecciona comida" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desayuno">Desayuno</SelectItem>
              <SelectItem value="almuerzo">Almuerzo</SelectItem>
              <SelectItem value="cena">Cena</SelectItem>
              <SelectItem value="tres_comidas">Tres comidas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    //</Card>
  );
}