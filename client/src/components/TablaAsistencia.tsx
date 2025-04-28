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
        { dni: "12345678", nombre: "Carlos Yahveh Valdera Chiscol", faltas: "3", carrera: "Sistemas" },
        { dni: "23456789", nombre: "María García", faltas: "2", carrera: "Sistemas" },
        { dni: "34567890", nombre: "Luis Rodríguez", faltas: "4", carrera: "Sistemas" },
        { dni: "45678901", nombre: "Ana Martínez", faltas: "1", carrera: "Sistemas" },
        { dni: "56789012", nombre: "Carlos Sánchez", faltas: "5", carrera: "Sistemas" },
        { dni: "67890123", nombre: "Lucía Torres", faltas: "2", carrera: "Sistemas" },
        { dni: "78901234", nombre: "Jorge Ramírez", faltas: "3", carrera: "Sistemas" },
        { dni: "89012345", nombre: "Valeria Ríos", faltas: "1", carrera: "Sistemas" },
        { dni: "90123456", nombre: "Diego Castro", faltas: "4", carrera: "Sistemas" },
        { dni: "01234567", nombre: "Paula Mendoza", faltas: "2", carrera: "Sistemas" },
        { dni: "11223344", nombre: "Ricardo Gómez", faltas: "3", carrera: "Sistemas" },
        { dni: "22334455", nombre: "Camila Herrera", faltas: "2", carrera: "Sistemas" },
        { dni: "33445566", nombre: "Andrés Ruiz", faltas: "5", carrera: "Sistemas" },
        { dni: "44556677", nombre: "Natalia Díaz", faltas: "3", carrera: "Sistemas" },
        { dni: "55667788", nombre: "Manuel Flores", faltas: "1", carrera: "Sistemas" },
        { dni: "66778899", nombre: "Lorena Chávez", faltas: "4", carrera: "Sistemas" },
        { dni: "77889900", nombre: "Francisco León", faltas: "2", carrera: "Sistemas" },
        { dni: "88990011", nombre: "Elena Morales", faltas: "3", carrera: "Sistemas" },
        { dni: "99001122", nombre: "Santiago Bravo", faltas: "1", carrera: "Sistemas" },
        { dni: "10111213", nombre: "Gabriela Paredes", faltas: "4", carrera: "Sistemas" },
    ];
  
    return (
      <div className="overflow-auto rounded-xl border border-teal-500">
        <Table className="min-w-full text-sm text-white">
          <TableHeader>
            <TableRow className="text-black border-t">
              {["DNI", "Nombre y Apellido", "Faltas", "Carrera"].map((col) => (
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
                <TableCell className="px-4 py-2">{item.carrera}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }  