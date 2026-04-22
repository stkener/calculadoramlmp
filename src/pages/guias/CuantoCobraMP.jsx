import { Link } from "react-router-dom";
import PromoLibro from "../../components/PromoLibro";

export default function CuantoCobraMercadoPago() {

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-200">

      {/* volver */}
      <Link
        to="/guias"
        className="text-sm text-orange-500 hover:text-orange-400 transition"
      >
        ← Volver a Guías
      </Link>


      {/* titulo */}
      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
        Cuánto cobra Mercado Pago por cobrar dinero en Argentina (2026)
      </h1>


      {/* imagen */}
      <img
        src="/image/MP1.jpg"
        alt="Cobrar dinero con Mercado Pago en Argentina"
        className="rounded-xl mb-6 w-full"
      />


      {/* intro */}
      <p className="text-zinc-300 mb-4">
        Mercado Pago es una de las formas más usadas en Argentina para cobrar ventas,
        servicios o transferencias. Sin embargo, cada vez que recibís un pago,
        la plataforma puede descontar una comisión dependiendo de cómo cobres el dinero.
      </p>

      <p className="text-zinc-300 mb-6">
        En esta guía actualizada a 2026 vas a ver cuánto cobra Mercado Pago,
        qué porcentaje te descuentan y cuánto dinero recibís realmente después de cobrar.
      </p>


      {/* seccion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Comisión de Mercado Pago por cobrar dinero
      </h2>

      <p className="text-zinc-300 mb-4">
        La comisión depende principalmente de cuándo querés disponer del dinero.
        Cuanto más rápido lo recibís, mayor es la comisión.
      </p>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-6">

        <p className="mb-2">
          Dinero disponible inmediatamente:
        </p>

        <p className="text-orange-400 font-semibold mb-4">
          aproximadamente 6% a 8%
        </p>

        <p className="mb-2">
          Dinero disponible en 14 días:
        </p>

        <p className="text-orange-400 font-semibold">
          0% de comisión
        </p>

      </div>

      <p className="text-zinc-300 mb-6">
        Esto aplica a cobros con link de pago, QR, tarjetas de débito y crédito.
        Las transferencias entre cuentas de Mercado Pago generalmente no tienen comisión.
      </p>


      {/* calculadora */}
      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Calculá la comisión exacta de Mercado Pago
        </h3>

        <p className="text-sm text-zinc-400 mb-4">
          Usá nuestra herramienta gratuita para saber cuánto te descuenta Mercado Pago.
        </p>

        <Link
          to="/mercadopago/comisiones"
          className="inline-block bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-xl font-semibold transition"
        >
          Abrir calculadora de Mercado Pago
        </Link>

      </div>


      {/* ejemplo */}
      <h2 className="text-2xl font-semibold mb-4">
        Ejemplo real de comisión
      </h2>

      <p className="text-zinc-300 mb-4">
        Supongamos que cobrás $100.000 con dinero disponible inmediatamente.
      </p>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-6">

        <p>
          Monto cobrado: $100.000
        </p>

        <p>
          Comisión aproximada (7%):
        </p>

        <p className="text-red-400">
          − $7.000
        </p>

        <p className="mt-2 font-semibold">
          Dinero que recibís:
        </p>

        <p className="text-green-400 text-xl font-bold">
          $93.000
        </p>

      </div>

      <p className="text-zinc-300 mb-8">
        Si elegís recibir el dinero en 14 días, recibirías el monto completo sin comisión.
      </p>


      {/* metodos */}
      <h2 className="text-2xl font-semibold mb-4">
        Métodos de cobro disponibles
      </h2>

      <p className="text-zinc-300 mb-4">
        Mercado Pago permite cobrar de diferentes formas:
      </p>

      <ul className="list-disc ml-6 text-zinc-300 mb-6 space-y-2">
        <li>Link de pago</li>
        <li>Código QR</li>
        <li>Terminal Point</li>
        <li>Tarjetas de débito y crédito</li>
        <li>Dinero en cuenta Mercado Pago</li>
      </ul>


      {/* factores */}
      <h2 className="text-2xl font-semibold mb-4">
        Factores que afectan la comisión
      </h2>

      <p className="text-zinc-300 mb-4">
        El porcentaje exacto puede variar según:
      </p>

      <ul className="list-disc ml-6 text-zinc-300 mb-8 space-y-2">
        <li>Tiempo de liberación del dinero</li>
        <li>Tipo de tarjeta utilizada</li>
        <li>Cantidad de cuotas</li>
        <li>Promociones activas</li>
        <li>Tipo de cuenta (personal o negocio)</li>
      </ul>


      {/* conclusion */}
      <h2 className="text-2xl font-semibold mb-4">
        Conclusión
      </h2>

      <p className="text-zinc-300 mb-4">
        Mercado Pago cobra entre un 0% y un 8% por cobrar dinero en Argentina,
        dependiendo de cuándo quieras recibirlo.
      </p>

      <p className="text-zinc-300 mb-4">
        Elegir correctamente el tiempo de liberación puede ayudarte a ahorrar miles de pesos en comisiones.
      </p>

      <p className="text-zinc-300">
        Antes de cobrar, es recomendable calcular la comisión exacta para conocer tu ganancia real.
      </p>

      <PromoLibro />


      {/* legal */}
      <p className="text-xs text-zinc-500 mt-10">
        Esta guía es informativa y se basa en datos públicos de Mercado Pago Argentina.
        Las comisiones pueden variar según condiciones, promociones y tipo de cuenta.
      </p>


    </div>
  );

}