import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CuantasVentasNecesito() {
  useEffect(() => {
    document.title =
      "Cuántas ventas necesito para ganar X dinero en Mercado Libre (2026)";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Descubrí cuántas ventas necesitás para ganar un monto específico en Mercado Libre en Argentina. Calculá tu meta mensual según comisiones y margen real."
      );
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-200">

      {/* volver */}
      <Link
        to="/guias"
        className="text-sm text-orange-500 hover:text-orange-400 transition"
      >
        ← Volver a Guías
      </Link>

      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Cuántas ventas necesito para ganar X dinero en Mercado Libre (2026)
      </h1>

      {/* imagen */}
      <img
        src="/public/image/calcularGanancia.jpg"
        alt="Vendedor usando Mercado Libre desde computadora"
        className="rounded-xl mb-6 w-full"
      />

      <p className="mb-6 text-lg">
        Si vendés en Mercado Libre en Argentina, seguramente te hiciste esta pregunta:
        ¿Cuántas ventas necesito para ganar $100.000, $300.000 o incluso $1.000.000 por mes?
      </p>

      <p className="mb-6">
        La respuesta depende de tres factores clave: el precio del producto,
        la comisión que cobra Mercado Libre y tu margen real de ganancia.
        En esta guía te explicamos cómo calcularlo paso a paso.
      </p>

      {/* CTA principal */}
      <div className="bg-orange-900/40 border border-orange-500 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-semibold mb-3">
          🎯 Calculá tu objetivo automáticamente
        </h2>
        <p className="mb-4">
          Usá nuestra calculadora gratuita para saber exactamente cuántas ventas necesitás según tu producto.
        </p>
        <Link
          to="/mercadolibre/gananciaFinal"
          className="inline-block bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl font-semibold transition"
        >
          Calcular ventas necesarias
        </Link>
      </div>

      {/* Sección 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1️⃣ La fórmula para calcular cuántas ventas necesitás
      </h2>

      <p className="mb-4">
        Primero necesitás saber cuánto ganás por cada venta.
      </p>

      <div className="bg-gray-800 p-5 rounded-xl mb-6 text-center text-lg font-semibold">
        Ganancia por venta = Precio – Comisión – Costo del producto
      </div>

      <p className="mb-6">
        Luego aplicás esta fórmula:
      </p>

      <div className="bg-gray-800 p-5 rounded-xl mb-8 text-center text-lg font-semibold">
        Ventas necesarias = Objetivo de ingreso ÷ Ganancia por venta
      </div>

      {/* Sección 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2️⃣ Ejemplo real en Argentina
      </h2>

      <p className="mb-4">
        Supongamos que vendés un producto a $100.000.
      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Precio de venta: $100.000</li>
        <li>Comisión promedio (17%): $17.000</li>
        <li>Costo del producto: $60.000</li>
        <li>Ganancia real por venta: $23.000</li>
      </ul>

      <p className="mb-6">
        Si tu objetivo es ganar $300.000 por mes:
      </p>

      <div className="bg-gray-800 p-5 rounded-xl mb-8 text-center text-lg font-semibold">
        300.000 ÷ 23.000 = 13 ventas mensuales (aprox.)
      </div>

      
      {/* Sección 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3️⃣ Cuántas ventas necesitás para distintos objetivos
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-700 text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">Objetivo mensual</th>
              <th className="p-3 border border-gray-700">Ventas necesarias*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-700">$100.000</td>
              <td className="p-3 border border-gray-700">5 ventas</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-700">$300.000</td>
              <td className="p-3 border border-gray-700">13 ventas</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-700">$500.000</td>
              <td className="p-3 border border-gray-700">22 ventas</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-700">$1.000.000</td>
              <td className="p-3 border border-gray-700">44 ventas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6 text-sm text-gray-400">
        *Ejemplo basado en una ganancia promedio de $23.000 por venta.
      </p>

      {/* Sección 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4️⃣ Cómo aumentar tu margen y necesitar menos ventas
      </h2>

      <ul className="list-disc ml-6 mb-8 space-y-2">
        <li>Optimizar costos del proveedor</li>
        <li>Reducir gastos publicitarios innecesarios</li>
        <li>Elegir publicación adecuada</li>
        <li>Ajustar precio estratégicamente</li>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Preguntas frecuentes
      </h2>

      <div className="space-y-6 mb-12">
        <div>
          <h3 className="font-semibold">
            ¿Es rentable vender en Mercado Libre en 2026?
          </h3>
          <p>
            Sí, pero depende del margen y volumen de ventas. Calcular antes de publicar es clave.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            ¿Cuántas ventas necesito para vivir de Mercado Libre?
          </h3>
          <p>
            Depende de tu costo de vida y margen por producto. Con buen margen, 20 a 40 ventas mensuales pueden ser suficientes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            ¿Cómo saber mi ganancia real?
          </h3>
          <p>
            Usando una calculadora que tenga en cuenta comisión, costos y cuotas.
          </p>
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-orange-900/40 border border-orange-500 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-3">
          🚀 Planificá tu meta de ingresos hoy
        </h2>
        <Link
          to="/mercadolibre/gananciaFinal"
          className="inline-block bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl font-semibold transition"
        >
          Calcular mis ventas necesarias
        </Link>
      </div>

    </div>
  );
}