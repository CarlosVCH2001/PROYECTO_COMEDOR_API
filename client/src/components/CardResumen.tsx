import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function CardResumen({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <Card className="bg-white text-black border-teal-500 border-3 shadow-[0_0_6px_#0f766e]">
      <CardHeader>
        <CardTitle className="text-lg">{titulo}</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-bold text-teal-900">{valor}</CardContent>
    </Card>
  );
}
