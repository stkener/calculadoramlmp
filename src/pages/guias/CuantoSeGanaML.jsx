import { Link } from "react-router-dom";
import PromoLibro from "../../components/PromoLibro";

export default function GananciasMercadoLibre() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">

      {/* volver */}
      <Link
        to="/guias"
        className="text-sm text-orange-500 hover:text-orange-400 transition"
      >
        ← Volver a Guías
      </Link>

      {/* TITULO */}
      <h1 className="text-3xl font-bold mb-4">
        Cuánto se gana vendiendo en Mercado Libre (2026): cálculo real y ejemplos
      </h1>

      {/* imagen */}
      <img
        src="/image/cuantosegana.jpg"
        alt="Ganancias vendiendo en Mercado Libre"
        className="rounded-xl mb-6 w-full"
      />

      {/* INTRO */}
      <p className="mb-4">
        Si estás pensando en vender en Mercado Libre, seguramente te hiciste esta
        pregunta: <strong>¿cuánto se gana realmente?</strong>
      </p>

      <p className="mb-4">
        La respuesta no es tan simple como parece. Aunque vendas un producto a un
        determinado precio, hay comisiones, costos y gastos que reducen tu ganancia.
      </p>

      <p className="mb-4">
        En esta guía vas a aprender cómo calcular cuánto ganás realmente, qué costos
        tenés que tener en cuenta y cómo definir precios para no perder dinero.
      </p>

      {/* BOTON */}
      <div className="my-6">
        <Link
          to="/mercadolibre"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular ganancias de Mercado Libre
        </Link>
      </div>

      {/* GANANCIA REAL */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto se gana realmente en Mercado Libre
      </h2>

      <p className="mb-4">
        Muchos creen que si venden un producto a $100.000, ese es el dinero que
        reciben. Pero en realidad, Mercado Libre descuenta comisiones y otros costos.
      </p>

      <p className="mb-4">
        En promedio, la ganancia real suele estar entre un
        <strong> 20% y 40%</strong> del precio de venta, dependiendo del producto,
        la comisión y si ofrecés envío gratis.
      </p>

      <p className="mb-4">
        Por eso es fundamental hacer bien los cálculos antes de publicar.
      </p>

      {/* COSTOS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Costos ocultos del vendedor
      </h2>

      <p className="mb-4">
        Uno de los errores más comunes es no tener en cuenta todos los costos.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Comisión de Mercado Libre</li>
        <li>Costo del producto</li>
        <li>Envío (si ofrecés gratis)</li>
        <li>Impuestos</li>
        <li>Devoluciones o reclamos</li>
      </ul>

      <p className="mb-4">
        Si no incluís estos factores, podés vender mucho pero ganar muy poco.
      </p>

      {/* CALCULO GANANCIA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo calcular tu ganancia real
      </h2>

      <p className="mb-4">
        Para saber cuánto ganás en cada venta, podés usar esta fórmula:
      </p>

      <div className="border border-orange-600 p-4 mb-6">
        Ganancia = Precio de venta − comisión − costo − envío
      </div>

      <p className="mb-4">
        Este cálculo te permite ver claramente cuánto dinero te queda después de
        todos los descuentos.
      </p>

      {/* MARGEN */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo calcular el margen real
      </h2>

      <p className="mb-4">
        El margen te indica qué porcentaje estás ganando sobre el precio de venta.
      </p>

      <div className="border border-orange-600 p-4 mb-6">
        Margen (%) = (Ganancia / Precio de venta) × 100
      </div>

      <p className="mb-4">
        Un margen saludable suele estar por encima del 20%.
      </p>

      {/* PRECIO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo calcular el precio para no perder plata
      </h2>

      <p className="mb-4">
        No alcanza con copiar el precio de otros vendedores. Tenés que asegurarte
        de cubrir todos tus costos y dejar un margen de ganancia.
      </p>

      <p className="mb-4">
        Si ponés un precio demasiado bajo, podés vender rápido pero perder dinero
        sin darte cuenta.
      </p>

      {/* EJEMPLO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Ejemplos reales paso a paso
      </h2>

      <p className="mb-4">
        Veamos un ejemplo concreto:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Precio de venta: $100.000</li>
        <li>Comisión (16%): $16.000</li>
        <li>Costo del producto: $50.000</li>
        <li>Envío: $8.000</li>
      </ul>

      <div className="border border-orange-600 p-4 mb-6">
        Ganancia = 100.000 − 16.000 − 50.000 − 8.000 = $26.000
      </div>

      <p className="mb-4">
        En este caso, la ganancia es de $26.000, lo que representa un margen del 26%.
      </p>

      <p className="mb-4">
        Si aumentás el precio, tu margen puede mejorar incluso pagando más comisión.
      </p>

      {/* CTA FINAL */}
      <div className="my-6">
        <Link
          to="/mercadolibre"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular ganancias de Mercado Libre
        </Link>
      </div>

      <PromoLibro />

    </article>
  );
}