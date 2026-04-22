import { Link } from "react-router-dom";
import PromoLibro from "../../components/PromoLibro";

export default function CalcularComisionesMercadoLibre() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10 text-gray-200">

      {/* volver */}
      <Link
        to="/guias"
        className="text-sm text-orange-500 hover:text-orange-400 transition"
      >
        ← Volver a Guías
      </Link>

      {/* titulo */}
      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
        Cómo calcular tu ganancia en Mercado Libre (2026)
      </h1>

      {/* imagen */}
      <img
        src="/image/ganancias.jpg"
        alt="Calcular comisiones de Mercado Libre paso a paso"
        className="rounded-xl mb-6 w-full"
      />

      {/* intro */}
      <p className="mb-6 text-lg">
        Si vendés en Mercado Libre, uno de los errores más comunes es publicar
        productos sin calcular correctamente las comisiones. Esto puede hacer
        que muchas ventas parezcan rentables, pero en realidad terminen
        generando muy poca ganancia o incluso pérdidas.
      </p>

      <p className="mb-6">
        En esta guía vas a aprender cómo calcular manualmente las comisiones de
        Mercado Libre, cómo definir el precio correcto de venta y qué errores
        evitar para proteger tu margen de ganancia.
      </p>

      {/* bloque info */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 my-8">
        <p className="mb-2">Publicación Clásica:</p>
        <p className="text-orange-500 font-semibold mb-4">
          aproximadamente 13% a 16%
        </p>

        <p className="mb-2">Publicación Premium:</p>
        <p className="text-orange-500 font-semibold">
          aproximadamente 28% a 31%
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cómo calcular las comisiones manualmente
      </h2>

      <p className="mb-6">
        Para calcular cuánto te cobra Mercado Libre por una venta, necesitás
        conocer dos datos principales: el precio de venta del producto y el
        porcentaje de comisión que aplica la plataforma según el tipo de
        publicación.
      </p>

      {/* formula */}
      <div className="border border-orange-600 p-4 my-6 text-center font-semibold">
        Comisión = Precio × porcentaje
      </div>

      <p className="mb-4">
        Este cálculo te permite estimar rápidamente cuánto dinero va a quedarse
        Mercado Libre en cada venta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Ejemplo real paso a paso
      </h2>

      <p className="mb-4">
        Supongamos que publicás un producto a <strong>$100.000</strong> con una
        comisión del <strong>16%</strong>.
      </p>

      <div className="border border-orange-600 p-4 my-6 text-center font-semibold">
        Comisión = $100.000 × 0,16 = $16.000
      </div>

      <p className="mb-6">
        En este caso, Mercado Libre se queda con $16.000 y vos recibís
        aproximadamente $84.000 antes de considerar otros costos como el envío
        o el costo del producto.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cómo calcular el precio de venta correcto
      </h2>

      <p className="mb-6">
        El precio correcto no es simplemente el costo del producto más un
        pequeño margen. Para evitar perder dinero, tenés que considerar varios
        factores: costo del producto, comisión de Mercado Libre, costo de envío
        (si ofrecés envío gratis) y tu margen de ganancia.
      </p>

      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-5 my-6">
        <p className="font-semibold mb-2">Ejemplo de cálculo completo</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Costo del producto: $50.000</li>
          <li>Comisión Mercado Libre (16%): $16.000</li>
          <li>Margen deseado: $20.000</li>
        </ul>
      </div>

      <p className="mb-6">
        Sumando estos valores, el precio mínimo de venta debería ser de al menos
        $86.000 para mantener tu margen.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Simulaciones explicadas
      </h2>

      <p className="mb-6">
        Muchos vendedores prefieren hacer simulaciones antes de publicar un
        producto. Esto les permite entender rápidamente cómo afectan las
        comisiones al precio final y cuánto dinero recibirán realmente.
      </p>

      <div className="bg-zinc-900 border-l-4 border-orange-500 p-4 my-6">
        <p className="font-semibold mb-1">Consejo</p>
        <p>
          Siempre simulá distintos precios antes de publicar un producto. A
          veces aumentar ligeramente el precio puede mejorar mucho tu margen
          final.
        </p>
      </div>

      <p className="mb-6">
        Por ejemplo, si aumentás el precio de venta de $100.000 a $110.000, la
        comisión también sube, pero tu margen puede mejorar dependiendo del
        costo del producto.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Errores comunes al calcular comisiones
      </h2>

      <p className="mb-4">
        Muchos vendedores cometen errores al calcular las comisiones de Mercado
        Libre. Estos errores suelen aparecer cuando no se consideran todos los
        costos involucrados.
      </p>

      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-5 my-6">
        <p className="font-semibold mb-2">Errores frecuentes</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>No incluir el costo del envío en el cálculo</li>
          <li>Olvidar la diferencia entre publicación clásica y premium</li>
          <li>No calcular el margen de ganancia antes de publicar</li>
          <li>Copiar precios de la competencia sin analizar comisiones</li>
        </ul>
      </div>

      <p className="mb-6">
        Evitar estos errores puede marcar una gran diferencia en la
        rentabilidad de tu negocio dentro de Mercado Libre.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Calculá automáticamente tus comisiones
      </h2>

      <p className="mb-6">
        Si no querés hacer todos estos cálculos manualmente, podés utilizar
        nuestra herramienta gratuita para calcular comisiones y ganancias en
        Mercado Libre.
      </p>

      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-6 text-center my-8">
        <p className="mb-3 font-semibold">
          Usá nuestra calculadora gratuita de Mercado Libre
        </p>

        <Link
          to="/mercadolibre/gananciaFinal"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Calcular comisiones ahora
        </Link>
      </div>

      <p className="text-sm text-gray-400 mt-10">
        Última actualización: 2026 — Las comisiones de Mercado Libre pueden
        cambiar con el tiempo, por lo que siempre es recomendable verificar los
        valores actualizados antes de publicar un producto.
      </p>

      <PromoLibro />
    </article>
  );
}