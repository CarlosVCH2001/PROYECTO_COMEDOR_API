import { FC } from 'react';
import { Book } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <div className="bg-teal-800 text-white px-6 py-4 flex items-center">
        <div>
          <h1 className="text-2xl font-bold">Bienvenido al Comedor Universitario</h1>
          <p className="text-sm">Registra tu asistencia para un mejor control.</p>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ficha Registro de nuevo comensal */}
        <Card
          title="Registro de Nuevo Comensal"
          subtitle="UNPRG"
          description="Click en el botón para un nuevo registro."
          buttonText="Empezar"
          buttonColor="bg-blue-600 hover:bg-blue-700"
          link="/nuevo_registro"
        />

        {/* Ficha de Registro de asistencia*/}
        <Card
          title="Marca tu Asistencia"
          subtitle="UNPRG"
          description="Click en el botón para registrar tu asistencia."
          buttonText="Empezar"
          buttonColor="bg-teal-600 hover:bg-teal-700"
          link="/registro_asistencia"
        />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  link?: string;
}

const Card: FC<CardProps> = ({ title, subtitle, description, buttonText, buttonColor, link }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
      <Book className="text-teal-600 text-6xl mb-4" />
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={() => link && navigate(link)}
        className={`${buttonColor} text-white font-semibold px-5 py-2 rounded-lg transition`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default HomePage;