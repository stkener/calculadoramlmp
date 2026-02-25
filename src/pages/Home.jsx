import { Link } from "react-router-dom";

const cards = [
  { title: "Mercado Libre", icon: "🛒", path: "/mercadolibre", color: "hover:bg-yellow-600/20" },
  { title: "Mercado Pago", icon: "💳", path: "/mercadopago", color: "hover:bg-sky-600/20" },
  { title: "Donaciones", icon: "❤️", path: "/donaciones", color: "hover:bg-pink-600/20" },
  { title: "Guías", icon: "📘", path: "/guias", color: "hover:bg-indigo-600/20" },
  { title: "Noticias", icon: "📰", path: "/noticias", color: "hover:bg-emerald-600/20" },
  { title: "Sobre el proyecto", icon: "🚀", path: "/proyecto", color: "hover:bg-orange-600/20" },
  { title: "Contacto", icon: "✉️", path: "/contacto", color: "hover:bg-cyan-600/20" },
  { title: "Preguntas frecuentes", icon: "❓", path: "/faq", color: "hover:bg-purple-600/20" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-14">

      {/* grid tarjetas */}
      <div className="
        max-w-5xl mx-auto
        grid gap-6
        grid-cols-1
        md:grid-cols-3
      ">

        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className={`
              group
              bg-zinc-800 border border-zinc-700
              rounded-xl p-8
              transition-all duration-200
              hover:scale-[1.03]
              ${card.color}
              cursor-pointer
              flex flex-col items-center justify-center text-center
            `}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">
              {card.icon}
            </div>

            <h2 className="text-lg font-semibold transition group-hover:text-orange-400">
              {card.title}
            </h2>
          </Link>
        ))}

      </div>

    </div>
  );
}
