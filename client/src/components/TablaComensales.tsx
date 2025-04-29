import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export default function TablaComensales() {
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
        celular: "950806208"
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
                "Celular",
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
                <TableCell className="px-4 py-2">{item.celular}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
      </div>
    );
  }  