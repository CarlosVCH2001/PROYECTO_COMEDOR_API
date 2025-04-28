import { useRef } from "react";
import CardInicio from "@/components/CardInicio";
import { UploadCloud, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null); // referencia al input file

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // simula el clic en el input escondido
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name);
      // Aquí podrías hacer algo como subirlo al servidor
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <div className="bg-teal-800 text-white px-8 py-6 flex items-center rounded-[8px]">
        <div>
          <h1 className="text-2xl font-bold py-0.5">Bienvenido al Comedor Universitario</h1>
          <p className="text-sm py-0.5">Asistencia de los comensales para un mejor control.</p>
        </div>
      </div>

      {/* Input oculto */}
      <input
        type="file"
        accept=".xlsx,.xls"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {/* Tarjetas */}
      <div className="flex justify-center mt-10">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl px-4">
          <CardInicio
            icon={UploadCloud}
            titulo="Subir Reporte de Asistencia"
            descripcion="Sube el archivo Excel generado por el lector biométrico y guarda los registros en la base de datos."
            botonTexto="Subir Archivo"
            onClick={handleFileUploadClick}
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