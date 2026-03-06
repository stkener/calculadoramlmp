import { Link } from "react-router-dom";

export default function EnviosMercadoLibre() {
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
        Cómo funcionan los envíos en Mercado Libre (costos, envío gratis y cuánto te descuentan)
      </h1>

      {/* imagen */}
      <img
        src="/image/enviosML.jpg"
        alt="Cómo funcionan los envíos en Mercado Libre"
        className="rounded-xl mb-6 w-full"
      />

      {/* INTRO */}
      <p className="mb-4">
        Cuando vendés en Mercado Libre, uno de los factores más importantes para calcular tu 
        ganancia real es el costo del envío. Muchos vendedores nuevos miran solamente la comisión 
        de la plataforma, pero el sistema de envíos puede cambiar completamente la rentabilidad 
        de una venta.
      </p>

      <p className="mb-4">
        Mercado Libre utiliza su propio sistema logístico llamado 
        <strong> Mercado Envíos</strong>, que conecta a los vendedores con empresas de transporte 
        para enviar productos a todo el país de forma rápida y automática.
      </p>

      <p className="mb-4">
        En esta guía vas a aprender cómo calcular el envío, cuánto cuesta realmente, 
        cuándo conviene ofrecer envío gratis y cuánto te descuenta Mercado Libre.
      </p>

      {/* BOTON PRINCIPAL */}
      <div className="my-6">
        <Link
          to="/mercadolibre/simuladorCompleto"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Simulador completo de venta
        </Link>
      </div>

      {/* COMO FUNCIONA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo funcionan los envíos en Mercado Libre
      </h2>

      <p className="mb-4">
        Cuando realizás una venta, Mercado Libre genera automáticamente una etiqueta de envío 
        con los datos del comprador y del transporte.
      </p>

      <p className="mb-4">
        El proceso funciona así:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Vendés el producto</li>
        <li>Mercado Libre genera la etiqueta</li>
        <li>Imprimís la etiqueta</li>
        <li>Embalás el producto</li>
        <li>Lo llevás a un punto de despacho</li>
      </ul>

      <p className="mb-4">
        A partir de ese momento, el transporte se encarga del resto del proceso hasta que el 
        producto llega al comprador.
      </p>

      <p className="mb-4">
        Dependiendo del precio del producto y del tipo de publicación, el envío puede pagarlo:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>El comprador</li>
        <li>El vendedor</li>
        <li>Ambos (envío subsidiado)</li>
      </ul>

      {/* CALCULAR ENVIO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo calcular el envío en Mercado Libre
      </h2>

      <p className="mb-4">
        El costo del envío depende de varios factores logísticos.
      </p>

      <p className="mb-4">
        Mercado Libre calcula el precio utilizando principalmente:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Peso del paquete</li>
        <li>Tamaño del producto</li>
        <li>Distancia entre vendedor y comprador</li>
        <li>Tipo de publicación</li>
      </ul>

      <p className="mb-4">
        Por ejemplo, un paquete pequeño puede tener un costo de envío aproximado 
        entre $3.000 y $6.000 dependiendo del destino.
      </p>

      <p className="mb-4">
        Sin embargo, ese no siempre es el monto que paga el vendedor, porque 
        Mercado Libre puede subsidiar parte del envío.
      </p>

      {/* COSTO MERCADO ENVIOS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto cuesta Mercado Envíos
      </h2>

      <p className="mb-4">
        Los costos pueden variar bastante dependiendo del tamaño del producto.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Tipo de paquete</th>
              <th className="border border-orange-600 p-2 text-left">Costo aproximado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">Paquete pequeño</td>
              <td className="border border-orange-600 p-2">$3.000 – $6.000</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Paquete mediano</td>
              <td className="border border-orange-600 p-2">$6.000 – $10.000</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Producto grande</td>
              <td className="border border-orange-600 p-2">$10.000 o más</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        En muchos casos, Mercado Libre cubre una parte del envío para incentivar 
        las ventas.
      </p>

      {/* ENVIO GRATIS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo saber si conviene ofrecer envío gratis
      </h2>

      <p className="mb-4">
        El envío gratis puede aumentar mucho las ventas porque Mercado Libre 
        prioriza este tipo de publicaciones en los resultados de búsqueda.
      </p>

      <p className="mb-4">
        Sin embargo, el costo del envío suele pagarlo parcialmente el vendedor.
      </p>

      <p className="mb-4">
        Para saber si conviene ofrecerlo, deberías calcular:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Precio de venta</li>
        <li>Comisión de Mercado Libre</li>
        <li>Costo del producto</li>
        <li>Parte del envío que pagás</li>
      </ul>

      <p className="mb-4">
        Si el margen de ganancia es bajo, el envío gratis puede hacer que la 
        venta deje muy poca ganancia.
      </p>

      {/* DESCUENTO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto te descuenta Mercado Libre por envío
      </h2>

      <p className="mb-4">
        Mercado Libre no cobra un porcentaje fijo por envío. 
        Simplemente descuenta la parte del envío que te corresponde pagar.
      </p>

      <p className="mb-4">
        Ese descuento aparece en el detalle de la venta junto con la comisión.
      </p>

      <p className="mb-4">
        Por ejemplo:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Concepto</th>
              <th className="border border-orange-600 p-2 text-left">Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">Venta</td>
              <td className="border border-orange-600 p-2">$25.000</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Comisión</td>
              <td className="border border-orange-600 p-2">$3.250</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Envío vendedor</td>
              <td className="border border-orange-600 p-2">$3.000</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Dinero recibido</td>
              <td className="border border-orange-600 p-2">$18.750</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Preguntas frecuentes
      </h2>

      <h3 className="font-semibold mt-4">
        ¿Quién paga el envío en Mercado Libre?
      </h3>

      <p className="mb-4">
        Puede pagarlo el comprador, el vendedor o ambos dependiendo del tipo de publicación.
      </p>

      <h3 className="font-semibold mt-4">
        ¿Mercado Libre siempre exige envío gratis?
      </h3>

      <p className="mb-4">
        No siempre, pero en muchos productos se recomienda porque mejora la visibilidad.
      </p>

      <h3 className="font-semibold mt-4">
        ¿El envío gratis aumenta las ventas?
      </h3>

      <p className="mb-4">
        En la mayoría de los casos sí, porque el algoritmo suele priorizar 
        publicaciones con envío gratis.
      </p>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Conclusión
      </h2>

      <p className="mb-4">
        Los envíos en Mercado Libre son un factor clave para calcular la 
        rentabilidad de cualquier venta. Aunque el sistema de Mercado Envíos 
        facilita mucho la logística, también puede reducir tu ganancia si no 
        calculás correctamente los costos.
      </p>

      <p className="mb-4">
        Antes de publicar un producto, siempre conviene calcular la comisión, 
        el costo del producto y el envío para saber exactamente cuánto dinero 
        vas a recibir.
      </p>

      {/* BOTON FINAL */}
      <div className="my-6">
        <Link
          to="/mercadolibre/envio"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular costo de envio
        </Link>
      </div>

    </article>
  );
}