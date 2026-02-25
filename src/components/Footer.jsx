import { Link } from "react-router-dom";


export default function Footer() {
  const projectLinks = [
    { name: "Sobre el proyecto", path: "/sobre" },
    { name: "Contacto", path: "/contacto" },
    { name: "FAQ", path: "/faq" },
  ];

  const legalLinks = [
    { name: "Política de privacidad", path: "/privacidad" },
    { name: "Aviso legal", path: "/aviso-legal" },
    { name: "Términos", path: "/terminos" },
  ];

  return (
    <footer className="mt-20 border-t border-orange-500/20 bg-gradient-to-b from-orange-950/80 to-black backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-gray-300">

        {/* Marca */}
        <div>
          <h3 className="text-xl font-bold text-orange-400 mb-3">
            Calculadora ML
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Herramienta independiente para calcular comisiones de Mercado Libre
            y Mercado Pago de forma rápida y clara.
          </p>
        </div>

        {/* Proyecto */}
        <div>
          <h4 className="font-semibold text-orange-300 mb-4">
            Proyecto
          </h4>

          <ul className="space-y-2 text-sm">
            {projectLinks.map(link => (
              <li key={link.name}>
                {/*<a
                  href="#"
                  className="transition hover:text-orange-400 hover:underline underline-offset-4"
                >
                  {link}
                </a>*/}
                <Link
                  to={link.path}
                  className="transition hover:text-orange-400 hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-orange-300 mb-4">
            Legal
          </h4>

          <ul className="space-y-2 text-sm">
            {legalLinks.map(link => (
              <li key={link.name}>
                {/*<a
                  href="#"
                  className="transition hover:text-orange-400 hover:underline underline-offset-4"
                >
                  {link}
                </a>*/}
                <Link
                  to={link.path}
                  className="transition hover:text-orange-400 hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-orange-500/20 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Calculadora Mercado Libre y Mercado Pago — Proyecto independiente
      </div>

    </footer>
  );
}
