import CardInicio from "@/components/CardInicio";
import { UploadCloud, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <div className="bg-teal-800 text-white px-8 py-6 flex items-center rounded-[8px]">
        <div>
          <h1 className="text-2xl font-bold py-0.5">Bienvenido al Comedor Universitario</h1>
          <p className="text-sm py-0.5">Asistencia de los comensales para un mejor control.</p>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="flex justify-center mt-10">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl px-4">
          <CardInicio
            icon={UploadCloud}
            titulo="Subir Reporte de Asistencia"
            descripcion="Sube el archivo Excel generado por el lector biométrico y guarda los registros en la base de datos."
            botonTexto="Subir Archivo"
            onClick={() => navigate("/subir-archivo")}
          />
          <CardInicio
            icon={Users}
            titulo="Ver Lista de Comensales"
            descripcion="Consulta la lista completa de comensales registrados en el sistema."
            botonTexto="Ver Lista"
            onClick={() => navigate("/comensales")}
          />
        </div>
      </div>
    </div>
  );
}