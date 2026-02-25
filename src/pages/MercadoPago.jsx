import { Link } from "react-router-dom";

const tools = [
  {
    title: "Calculadora de Rendimiento",
    description:
      "Calculá cuánto genera tu dinero invertido en Mercado Pago según tasa y días.",
    icon: "💰",
    path: "/mercadopago/rendimiento",
    color: "hover:border-emerald-500"
  },
  {
    title: "Calculadora de Comisiones",
    description:
      "Simulá cuánto te descuenta Mercado Pago por cobrar con QR, link o Point.",
    icon: "💳",
    path: "/mercadopago/comisiones",
    color: "hover:border-sky-500"
  },
  {
    title: "Simulador de Cuotas",
    description:
      "Calculá cuánto recibís si cobrás en cuotas con Mercado Pago.",
    icon: "📊",
    path: "/mercadopago/cuotas",
    color: "hover:border-yellow-500"
  }
];

export default function MercadoPago() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-14">

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">
          Herramientas Mercado Pago
        </h1>
        <p className="text-zinc-400">
          Simuladores para calcular rendimientos, comisiones y dinero real que recibís.
        </p>
      </div>

      <div
        className="
          max-w-5xl mx-auto
          grid gap-6
          grid-cols-1
          md:grid-cols-3
        "
      >
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

            <h2 className="text-xl font-semibold mb-2">
              {tool.title}
            </h2>

            <p className="text-sm text-zinc-400">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}