import { HandCoins, BookPlus } from "lucide-react";

export const applications = [
  {
    title: "Reportes",
    icon: HandCoins,
    subItems: [
      { title: "Dashboard", url: "/reportes" },
      { title: "Lista de Comensales", url: "#" },
    ],
  },
  {
    title: "Nuevo Formulario",
    url: "#",
    icon: BookPlus,
    subItems: [
      { title: "Sub Item 1", url: "#" },
      { title: "Sub Item 2", url: "#" },
    ],
  },
];