import { Link } from "react-router-dom";

export default function ComoCalcularComisionesML() {
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
        Cómo calcular las comisiones de Mercado Libre paso a paso (2026)
      </h1>


      {/* imagen */}
      <img
        src="/public/image/comisionesML.jpg"
        alt="Calcular comisiones de Mercado Libre antes de vender"
        className="rounded-xl mb-6 w-full"
      />


      {/* INTRO */}
      <p className="mb-4">
        Calcular correctamente las comisiones de Mercado Libre es fundamental antes de publicar un producto.
        Muchos vendedores cometen el error de mirar solo el precio de venta, sin considerar los descuentos,
        lo que puede reducir significativamente la ganancia real.
      </p>

      <p className="mb-4">
        Mercado Libre cobra un porcentaje por cada venta, y ese valor puede variar según el tipo de publicación,
        la categoría del producto y si ofrecés cuotas sin interés o envío gratis.
        En esta guía vas a aprender paso a paso cómo calcular la comisión exacta y cuánto dinero vas a recibir realmente.
      </p>


      {/* BOTON PRINCIPAL */}
      <div className="my-6">
        <Link
          to="/mercadolibre/comisiones"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular comisión automáticamente
        </Link>
      </div>


      {/* QUE COBRA ML */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Qué cobra Mercado Libre por vender
      </h2>

      <p className="mb-4">
        Mercado Libre cobra una comisión que suele ubicarse entre el 13% y el 31% del precio de venta.
        El valor exacto depende principalmente del tipo de publicación que elijas.
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Publicación clásica: menor comisión</li>
        <li>Publicación premium: mayor comisión</li>
        <li>La categoría del producto influye en el porcentaje</li>
        <li>Las cuotas sin interés aumentan la comisión</li>
        <li>El envío gratis puede reducir tu ganancia</li>
      </ul>

      <p className="mb-4">
        Por eso es importante calcular todo antes de publicar el producto.
      </p>


      {/* PASO 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Paso 1: definir el precio de venta
      </h2>

      <p className="mb-4">
        El primer paso es el más simple: definir el precio al que vas a vender el producto.
      </p>

      <p className="mb-4">
        Ejemplo:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Precio del producto: $100.000</li>
      </ul>

      <p className="mb-4">
        Este será el valor base sobre el cual Mercado Libre calcula la comisión.
      </p>


      {/* PASO 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Paso 2: identificar el porcentaje de comisión
      </h2>

      <p className="mb-4">
        Supongamos que la comisión es del 16%, que es un valor común en publicaciones clásicas.
      </p>

      <p className="mb-4">
        La fórmula es:
      </p>

      <div className="border border-orange-600 p-4 mb-4">
        Comisión = Precio × porcentaje
      </div>

      <p className="mb-4">
        En este caso:
      </p>

      <div className="border border-orange-600 p-4 mb-6">
        Comisión = $100.000 × 0,16 = $16.000
      </div>


      {/* PASO 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Paso 3: calcular cuánto dinero recibís
      </h2>

      <p className="mb-4">
        Ahora restás la comisión al precio de venta:
      </p>

      <div className="border border-orange-600 p-4 mb-6">
        Dinero recibido = $100.000 − $16.000 = $84.000
      </div>

      <p className="mb-4">
        Ese es el dinero que Mercado Libre deposita en tu cuenta de Mercado Pago.
      </p>


      {/* TABLA EJEMPLOS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Ejemplos de comisiones según el precio
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">
                Precio
              </th>
              <th className="border border-orange-600 p-2 text-left">
                Comisión (16%)
              </th>
              <th className="border border-orange-600 p-2 text-left">
                Recibís
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">$50.000</td>
              <td className="border border-orange-600 p-2">$8.000</td>
              <td className="border border-orange-600 p-2">$42.000</td>
            </tr>

            <tr>
              <td className="border border-orange-600 p-2">$100.000</td>
              <td className="border border-orange-600 p-2">$16.000</td>
              <td className="border border-orange-600 p-2">$84.000</td>
            </tr>

            <tr>
              <td className="border border-orange-600 p-2">$200.000</td>
              <td className="border border-orange-600 p-2">$32.000</td>
              <td className="border border-orange-600 p-2">$168.000</td>
            </tr>

          </tbody>
        </table>
      </div>


      {/* COSTOS EXTRA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Otros costos que tenés que considerar
      </h2>

      <p className="mb-4">
        La comisión no es el único costo. También pueden aplicarse:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Costo de envío si ofrecés envío gratis</li>
        <li>Costo de cuotas sin interés</li>
        <li>Costo del producto</li>
        <li>Impuestos</li>
        <li>Publicidad dentro de Mercado Libre</li>
      </ul>


      {/* BOTON SECUNDARIO */}
      <div className="my-6">
        <Link
          to="/mercadolibre/simuladorCompleto"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Usar simulador completo de ganancia
        </Link>
      </div>


      {/* ERROR COMUN */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Error común que cometen los vendedores
      </h2>

      <p className="mb-4">
        Uno de los errores más frecuentes es vender sin calcular la comisión previamente.
        Esto puede hacer que el margen sea demasiado bajo o incluso negativo.
      </p>

      <p className="mb-4">
        Siempre es recomendable calcular cuánto vas a recibir antes de publicar el producto.
      </p>


      {/* FORMULA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Fórmula completa
      </h2>

      <div className="border border-orange-600 p-4 mb-6">
        Dinero final = Precio − (Precio × comisión)
      </div>


      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Preguntas frecuentes
      </h2>

      <h3 className="font-semibold mt-4">
        ¿Mercado Libre cobra por publicar?
      </h3>

      <p className="mb-4">
        No cobra por publicar, solo cobra cuando realizás una venta.
      </p>


      <h3 className="font-semibold mt-4">
        ¿Cuándo cobra la comisión?
      </h3>

      <p className="mb-4">
        Se descuenta automáticamente cuando recibís el pago.
      </p>


      <h3 className="font-semibold mt-4">
        ¿Se puede calcular antes de vender?
      </h3>

      <p className="mb-4">
        Sí, es la mejor forma de asegurarte de que tu venta sea rentable.
      </p>


      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Conclusión
      </h2>

      <p className="mb-4">
        Calcular las comisiones de Mercado Libre es simple si conocés el porcentaje aplicado.
        Solo necesitás multiplicar el precio por la comisión y restarlo del total.
      </p>

      <p className="mb-4">
        Este cálculo te permite saber exactamente cuánto dinero vas a recibir y evitar pérdidas.
      </p>

    </article>
  );
}