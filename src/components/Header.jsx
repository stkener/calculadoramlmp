import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Mercado Libre", href: "/mercadolibre" },
    { name: "Mercado Pago", href: "/mercadopago" },
    { name: "Guías y Recursos", href: "/guias" },
    { name: "Noticias", href: "/noticias" },
    { name: "Donaciones", href: "/donaciones" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg">

      {/* ===== TÍTULO DESKTOP (oculto en mobile) ===== */}
      <div className="hidden md:block bg-gradient-to-r from-gray-950 via-gray-900 to-black text-center py-4 border-b border-orange-500/30">
        <h1 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
          Calculadora Mercado Libre y Mercado Pago
        </h1>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="bg-gray-950/85 backdrop-blur-md border-b border-orange-500/20">

        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between md:justify-center items-center">

          {/* Título mobile */}
          <div className="md:hidden font-bold text-orange-500">
            Calculadora ML
          </div>

          {/* Links desktop */}
          <ul className="hidden md:flex gap-8 font-medium text-gray-300">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative group hover:text-orange-500 transition"
                >
                  {link.name}

                  {/* underline elegante */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}

          </ul>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-orange-500"
          >
            ☰
          </button>

        </div>

        {/* ===== MENÚ MOBILE ANIMADO ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="bg-gray-900 border-t border-orange-500/20 flex flex-col p-4 gap-4 font-medium text-gray-300">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-orange-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </nav>

    </header>
  );
}
