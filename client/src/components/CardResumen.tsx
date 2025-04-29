import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface CardResumenProps {
  titulo: string;
  valor: string;
  icono: ReactNode; // nuevo prop para el icono
}

export default function CardResumen({ titulo, valor, icono }: CardResumenProps) {
  return (
    <Card className="flex items-center gap-3 bg-white text-black h-40 border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
      <div>
        {icono}
      </div>
      <div className="text-3xl font-bold text-teal-900 m-0">
        {valor}
      </div>
      <div className="text-sm font-medium text-gray-500">
        {titulo}
      </div>
    </Card>
  );
}