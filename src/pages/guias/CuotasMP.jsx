import { Link } from "react-router-dom";
import PromoLibro from "../../components/PromoLibro";

export default function CuotasMercadoPago() {
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
        Cuánto te descuenta Mercado Pago por cobrar en cuotas (2026): impacto real en tu ganancia
      </h1>

      {/* imagen */}
      <img
        src="/image/mpcuotas.jpg"
        alt="Comisiones de Mercado Pago por cobrar en cuotas"
        className="rounded-xl mb-6 w-full"
      />

      {/* INTRO */}
      <p className="mb-4">
        Cobrar en cuotas con Mercado Pago puede ayudarte a vender más, pero también
        puede reducir considerablemente tu ganancia si no calculás bien los costos.
        Muchas veces el comprador ve “cuotas sin interés”, pero el vendedor sí paga
        una comisión extra por ofrecer esa financiación.
      </p>

      <p className="mb-4">
        Dependiendo de la cantidad de cuotas elegidas, Mercado Pago aplica descuentos
        que pueden ir desde unos pocos puntos porcentuales hasta valores mucho más altos,
        afectando directamente el dinero que recibís.
      </p>

      <p className="mb-4">
        En esta guía vas a ver cuánto te descuenta Mercado Pago por cobrar en cuotas,
        cuánto terminás pagando en 6 cuotas y cómo calcular el impacto real en tu ganancia.
      </p>

      {/* CTA */}
      <div className="my-6">
        <Link
          to="/mercadopago"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular comisión de Mercado Pago
        </Link>
      </div>

      {/* CUANTO DESCUENTA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto te descuenta Mercado Pago por cobrar en cuotas
      </h2>

      <p className="mb-4">
        Cuando ofrecés cuotas, Mercado Pago cobra la comisión base del medio de pago
        más un recargo adicional por financiación.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Cantidad de cuotas</th>
              <th className="border border-orange-600 p-2 text-left">Costo aproximado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">1 cuota</td>
              <td className="border border-orange-600 p-2">Comisión base</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">3 cuotas</td>
              <td className="border border-orange-600 p-2">8% a 12%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">6 cuotas</td>
              <td className="border border-orange-600 p-2">13% a 18%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">12 cuotas</td>
              <td className="border border-orange-600 p-2">20% o más</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Cuantas más cuotas ofrecés, mayor será el descuento sobre el total cobrado.
      </p>

      {/* 6 CUOTAS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto termino pagando en 6 cuotas
      </h2>

      <p className="mb-4">
        Supongamos que vendés un producto por <strong>$100.000</strong> y ofrecés
        <strong> 6 cuotas sin interés</strong>.
      </p>

      <div className="bg-zinc-900/40 border border-orange-500 p-6 rounded-xl mb-6">
        <p className="mb-2">Precio de venta: <strong>$100.000</strong></p>
        <p className="mb-2">Costo financiero estimado: <strong>15%</strong></p>
        <p className="mb-2">Descuento: <strong>$15.000</strong></p>
        <p className="text-orange-500 font-bold text-lg">
          Recibís: $85.000
        </p>
      </div>

      <p className="mb-4">
        Aunque el cliente paga el precio completo, vos recibís menos dinero porque
        Mercado Pago descuenta el costo de la financiación.
      </p>

      {/* CUOTAS SIN INTERES */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo calcular cuotas sin interés
      </h2>

      <p className="mb-4">
        Para calcular cuánto te cuesta ofrecer cuotas sin interés, podés usar esta fórmula:
      </p>

      <div className="bg-zinc-900/40 border border-orange-500 p-6 rounded-xl mb-6">
        <p className="text-lg font-semibold">
          Comisión = Precio × porcentaje de financiación
        </p>
      </div>

      <p className="mb-4">
        Si vendés por <strong>$80.000</strong> y la comisión en cuotas es del
        <strong> 14%</strong>:
      </p>

      <div className="bg-zinc-900/40 border border-orange-500 p-6 rounded-xl mb-6">
        <p className="text-lg font-semibold">
          $80.000 × 14% = $11.200
        </p>
        <p className="text-orange-500 font-bold text-lg mt-2">
          Recibís: $68.800
        </p>
      </div>

      {/* IMPACTO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Impacto real en tu ganancia
      </h2>

      <p className="mb-4">
        El problema principal de cobrar en cuotas es que la comisión sale de tu margen.
        Si tu ganancia era baja, podés terminar vendiendo sin beneficio real.
      </p>

      <p className="mb-4">
        Por ejemplo:
      </p>

      <div className="bg-zinc-900/40 border border-orange-500 p-6 rounded-xl mb-6">
        <p className="mb-2">Precio de venta: <strong>$100.000</strong></p>
        <p className="mb-2">Costo del producto: <strong>$75.000</strong></p>
        <p className="mb-2">Ganancia esperada: <strong>$25.000</strong></p>
        <p className="mb-2">Costo financiero en cuotas: <strong>$15.000</strong></p>
        <p className="text-orange-500 font-bold text-lg">
          Ganancia real: $10.000
        </p>
      </div>

      <p className="mb-4">
        En este caso, las cuotas consumen más de la mitad de la ganancia.
      </p>

      {/* RECOMENDACION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo evitar perder ganancia al vender en cuotas
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Sumar el costo financiero al precio final</li>
        <li>Ofrecer cuotas solo en productos con margen alto</li>
        <li>Comparar si conviene cuotas o descuento en efectivo</li>
        <li>Calcular siempre la ganancia neta antes de publicar</li>
      </ul>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Conclusión
      </h2>

      <p className="mb-4">
        Cobrar en cuotas con Mercado Pago puede aumentar las ventas, pero también puede
        reducir mucho tu rentabilidad si no calculás el costo financiero.
      </p>

      <p className="mb-4">
        Antes de ofrecer cuotas sin interés, conviene calcular cuánto te van a descontar
        y cuánto dinero vas a recibir realmente para asegurarte de no vender con pérdidas.
      </p>

      {/* CTA FINAL */}
      <div className="my-6">
        <Link
          to="/mercadopago"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular cuánto recibís realmente
        </Link>
      </div>

      <PromoLibro />

    </article>
  );
}