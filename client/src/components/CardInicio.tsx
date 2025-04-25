import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  botonTexto: string;
  onClick: () => void;
}

export default function CardInicio({ icon: Icon, titulo, descripcion, botonTexto, onClick }: Props) {
  return (
    <Card className="bg-white text-black border-teal-500 border-2 shadow-md w-full md:w-1/2">
      <CardContent className="flex flex-col items-center p-6 space-y-4">
        <Icon className="w-12 h-12 text-teal-600" />
        <CardTitle className="text-xl text-center">{titulo}</CardTitle>
        <p className="text-sm text-gray-600 text-center">{descripcion}</p>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={onClick}>
          {botonTexto}
        </Button>
      </CardContent>
    </Card>
  );
}