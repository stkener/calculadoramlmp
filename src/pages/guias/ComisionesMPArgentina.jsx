import { Link } from "react-router-dom";

export default function ComisionesMercadoPago() {
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
        Comisiones de Mercado Pago en Argentina (2026): QR, link de pago, Point y tiempos de acreditación
      </h1>

      {/* imagen */}
      <img
        src="/image/comisionesMP.jpg"
        alt="Comisiones de Mercado Pago para vendedores"
        className="rounded-xl mb-6 w-full"
      />

      {/* INTRO */}
      <p className="mb-4">
        Mercado Pago se convirtió en una de las herramientas más usadas para cobrar
        dinero en Argentina. Permite aceptar pagos con tarjeta, transferencias,
        QR, links de pago e incluso con terminales físicas como Mercado Point.
      </p>

      <p className="mb-4">
        Sin embargo, cada forma de cobro tiene una comisión diferente y
        distintos tiempos de acreditación del dinero. Entender estas diferencias
        es fundamental para vendedores, comercios y trabajadores independientes
        que utilizan la plataforma para cobrar.
      </p>

      <p className="mb-4">
        En esta guía vas a ver cuánto cobra Mercado Pago por cada método de
        cobro, cuánto tarda en acreditarse el dinero y cuál conviene usar según
        cada situación.
      </p>

      {/* BOTON */}
      <div className="my-6">
        <Link
          to="/mercadopago"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular comisiones de Mercado Pago
        </Link>
      </div>

      {/* COMISIONES GENERALES */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Comisiones de Mercado Pago para vendedores
      </h2>

      <p className="mb-4">
        Las comisiones dependen del método de cobro y del tiempo en que querés
        recibir el dinero. En general, cuanto más rápido se acredita el pago,
        mayor es la comisión.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Método de cobro</th>
              <th className="border border-orange-600 p-2 text-left">Comisión aproximada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">QR</td>
              <td className="border border-orange-600 p-2">0% a 6%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Link de pago</td>
              <td className="border border-orange-600 p-2">4% a 7%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Point</td>
              <td className="border border-orange-600 p-2">3% a 6%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Transferencia</td>
              <td className="border border-orange-600 p-2">0%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Los porcentajes pueden variar dependiendo de promociones o cambios en
        las condiciones de la plataforma.
      </p>

      {/* QR */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Comisión por cobrar con QR
      </h2>

      <p className="mb-4">
        Cobrar con código QR es una de las formas más populares para comercios
        físicos. El cliente simplemente escanea el código desde su celular y
        paga con dinero en cuenta o tarjeta.
      </p>

      <p className="mb-4">
        Si el cliente paga con dinero disponible en su cuenta de Mercado Pago,
        generalmente la comisión es <strong>0%</strong>.
      </p>

      <p className="mb-4">
        Si paga con tarjeta de crédito o débito, Mercado Pago cobra una
        comisión que puede variar aproximadamente entre <strong>2% y 6%</strong>,
        dependiendo del tiempo de acreditación.
      </p>

      {/* LINK DE PAGO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Comisión por link de pago
      </h2>

      <p className="mb-4">
        El link de pago permite cobrar enviando un enlace por WhatsApp, redes
        sociales o correo electrónico.
      </p>

      <p className="mb-4">
        Es muy utilizado por vendedores online, freelancers y servicios que no
        tienen una tienda física.
      </p>

      <p className="mb-4">
        La comisión suele ser un poco más alta que en el QR porque incluye
        pagos con tarjeta y cuotas. Generalmente está entre
        <strong> 4% y 7%</strong> dependiendo del plazo de acreditación.
      </p>

      {/* POINT */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Comisión por Mercado Point
      </h2>

      <p className="mb-4">
        Mercado Point es el lector de tarjetas físico que permite cobrar con
        tarjeta de débito o crédito en persona.
      </p>

      <p className="mb-4">
        La comisión depende del plazo en que querés recibir el dinero:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Acreditación inmediata → comisión más alta</li>
        <li>Acreditación en varios días → comisión más baja</li>
      </ul>

      <p className="mb-4">
        En promedio, las comisiones suelen ubicarse entre
        <strong> 3% y 6%</strong>.
      </p>

      {/* ACREDITACION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto tarda en acreditarse el dinero
      </h2>

      <p className="mb-4">
        Mercado Pago permite elegir cuándo querés recibir el dinero.
        Cuanto más rápido lo recibís, mayor es la comisión.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Tiempo de acreditación</th>
              <th className="border border-orange-600 p-2 text-left">Comisión aproximada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">Inmediato</td>
              <td className="border border-orange-600 p-2">Más alta</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">14 días</td>
              <td className="border border-orange-600 p-2">Media</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">30 días</td>
              <td className="border border-orange-600 p-2">Más baja</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* LIBERAR DINERO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto tarda en liberar el dinero Mercado Pago
      </h2>

      <p className="mb-4">
        En la mayoría de los casos, el dinero se acredita automáticamente según
        el plazo elegido al momento de cobrar.
      </p>

      <p className="mb-4">
        Sin embargo, algunas operaciones pueden quedar retenidas por motivos
        de seguridad o verificación, especialmente si el monto es alto o si la
        cuenta es nueva.
      </p>

      <p className="mb-4">
        Cuando esto ocurre, Mercado Pago puede tardar algunos días adicionales
        en liberar el dinero.
      </p>

      {/* DIFERENCIA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Diferencia entre transferencia y cobro con Mercado Pago
      </h2>

      <p className="mb-4">
        Una transferencia entre cuentas de Mercado Pago o desde un banco es
        completamente gratuita y no tiene comisión.
      </p>

      <p className="mb-4">
        En cambio, cuando utilizás herramientas de cobro como QR, link de pago
        o Point, Mercado Pago cobra una comisión porque procesa el pago con
        tarjeta o actúa como intermediario financiero.
      </p>

      <p className="mb-4">
        Por eso muchos vendedores combinan ambos métodos: transferencias para
        pagos directos y QR o link de pago para clientes que quieren pagar con
        tarjeta.
      </p>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Preguntas frecuentes
      </h2>

      <h3 className="font-semibold mt-4">
        ¿Mercado Pago cobra comisión por transferencias?
      </h3>

      <p className="mb-4">
        No. Las transferencias entre cuentas de Mercado Pago o desde un banco
        generalmente no tienen comisión.
      </p>

      <h3 className="font-semibold mt-4">
        ¿Cuál es la comisión más baja para cobrar?
      </h3>

      <p className="mb-4">
        Cobrar con dinero en cuenta a través de QR suele tener comisión 0%.
      </p>

      <h3 className="font-semibold mt-4">
        ¿Se puede evitar la comisión?
      </h3>

      <p className="mb-4">
        Solo en algunos casos, como transferencias directas o pagos con saldo
        en cuenta mediante QR.
      </p>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Conclusión
      </h2>

      <p className="mb-4">
        Mercado Pago ofrece muchas formas de cobrar dinero, desde transferencias
        sin comisión hasta herramientas más avanzadas como QR, links de pago y
        terminales Point.
      </p>

      <p className="mb-4">
        Cada método tiene comisiones y tiempos de acreditación distintos, por
        lo que conviene elegir el que mejor se adapte a tu negocio o actividad.
      </p>

      {/* CTA FINAL */}
      <div className="my-6">
        <Link
          to="/mercadopago"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular comisiones de Mercado Pago
        </Link>
      </div>

    </article>
  );
}