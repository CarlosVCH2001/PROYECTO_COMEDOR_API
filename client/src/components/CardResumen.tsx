import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface CardResumenProps {
  titulo: string;
  valor: string;
  icono: ReactNode; // nuevo prop para el icono
}

export default function CardResumen({ titulo, valor, icono }: CardResumenProps) {
  return (
    <Card className="bg-white text-black h-48 border-teal-500 border-3 shadow-[0_0_6px_#0f766e] flex flex-col items-center justify-center space-y-2">
      <div>
        {icono}
      </div>
      <div className="text-3xl font-bold text-teal-900">
        {valor}
      </div>
      <div className="text-sm font-medium text-gray-500">
        {titulo}
      </div>
    </Card>
  );
}