import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export default function TablaAsistencia() {
    const datos = [
      { dni: "12345678", nombre: "Juan Pérez", faltas: "3" },
      { dni: "23456789", nombre: "María García", faltas: "2" },
      // ... otros datos
    ];
  
    return (
      <div className="overflow-auto rounded-xl border border-teal-500">
        <Table className="min-w-full text-sm text-white">
          <TableHeader>
            <TableRow className="text-black border-t">
              {["DNI", "Nombre y Apellido", "Faltas"].map((col) => (
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