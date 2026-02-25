import { Link } from "react-router-dom";

const tools = [
  {
    title: "Calculadora de Comision",
    icon: "🧮",
    path: "/mercadolibre/comisiones",
    color: "hover:border-yellow-500"
  },
  {
    title: "Simulador de Envío",
    icon: "🚚",
    path: "/mercadolibre/envio",
    color: "hover:border-emerald-500"
  },  
  {
    title: "Simulador con Cuotas",
    icon: "💳",
    path: "/mercadolibre/cuotas",
    color: "hover:border-sky-500"
  },
  {
    title: "Planificador de Precio",
    icon: "📊",
    path: "/mercadolibre/margen",
    color: "hover:border-pink-500"
  },
  {
    title: "Ganancia Final",
    icon: "📈",
    path: "/mercadolibre/gananciaFinal",
    color: "hover:border-indigo-500"
  },
  {
    title: "Simulador Completo de Venta",
    icon: "🏆",
    path: "/mercadolibre/simuladorCompleto",
    color: "hover:border-purple-500"
  }
];

export default function MercadoLibre() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-14">

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">Herramientas Mercado Libre</h1>
        <p className="text-zinc-400">
          Simuladores y herramientas para calcular comisiones, márgenes y rentabilidad real.
        </p>
      </div>

      <div className="
        max-w-5xl mx-auto
        grid gap-6
        grid-cols-1
        md:grid-cols-3
      ">
        {tools.map((tool, index) => (
          <Link
            key={index}
            to={tool.path}
            className={`
              group
              bg-zinc-800 border border-zinc-700
              rounded-xl p-8
              transition-all duration-200
              hover:scale-[1.03]
              ${tool.color}
              cursor-pointer
              flex flex-col items-center justify-center text-center
            `}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">
              {tool.icon}
            </div>

            <h2 className="text-lg font-semibold transition group-hover:text-orange-400">
              {tool.title}
            </h2>
          </Link>
        ))}
      </div>

    </div>
  );
}