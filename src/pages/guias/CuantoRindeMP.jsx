import { Link } from "react-router-dom";

export default function CuantoRindeMercadoPago() {
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
        Cuánto rinde Mercado Pago hoy en Argentina (2026): tasa, ganancias y ejemplos reales
      </h1>

      {/* imagen */}
      <img
        src="/public/image/MPRendimiento.jpg"
        alt="Cobrar dinero con Mercado Pago en Argentina"
        className="rounded-xl mb-6 w-full"
      />

      {/* INTRO */}
      <p className="mb-4">
        Mercado Pago permite generar rendimientos diarios simplemente dejando dinero en la cuenta. 
        A diferencia de un plazo fijo tradicional, no necesitás bloquear los fondos y podés usarlos en cualquier momento. 
        Esta función se conoce como <strong>cuenta remunerada</strong> y es una de las opciones más usadas en Argentina para hacer rendir el dinero sin riesgo alto.
      </p>

      <p className="mb-4">
        En 2026, el rendimiento de Mercado Pago se ubica aproximadamente entre 
        <strong> 21% y 26% anual</strong>, dependiendo de las condiciones del mercado y del fondo de inversión asociado.
        Esto equivale aproximadamente a entre <strong>1,7% y 2,3% mensual</strong>.
      </p>

      {/* BOTON PRINCIPAL */}
      <div className="my-6">
        <Link
          to="/mercadopago"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular cuánto podés ganar con Mercado Pago
        </Link>
      </div>

      {/* RESPUESTA RAPIDA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto rinde Mercado Pago hoy
      </h2>

      <p className="mb-4">
        El rendimiento exacto cambia todos los días, pero actualmente Mercado Pago ofrece aproximadamente:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Entre 21% y 26% anual</li>
        <li>Aproximadamente 0,05% a 0,07% diario</li>
        <li>Entre 1,7% y 2,3% mensual</li>
        <li>Rendimientos acreditados todos los días</li>
        <li>Dinero disponible en cualquier momento</li>
      </ul>

      <p className="mb-4">
        El porcentaje que ves en la app es una estimación basada en el rendimiento reciente del 
        fondo común de inversión donde se coloca el dinero.
      </p>

      {/* EJEMPLOS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Ejemplos reales de ganancias
      </h2>

      <p className="mb-4">
        Estos son ejemplos aproximados usando una tasa anual del 24%:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Dinero</th>
              <th className="border border-orange-600 p-2 text-left">Ganancia mensual</th>
              <th className="border border-orange-600 p-2 text-left">Ganancia anual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">$100.000</td>
              <td className="border border-orange-600 p-2">$2.000</td>
              <td className="border border-orange-600 p-2">$24.000</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">$500.000</td>
              <td className="border border-orange-600 p-2">$10.000</td>
              <td className="border border-orange-600 p-2">$120.000</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">$1.000.000</td>
              <td className="border border-orange-600 p-2">$18.000 aprox.</td>
              <td className="border border-orange-600 p-2">$240.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Por ejemplo, con un millón de pesos, Mercado Pago puede generar alrededor de 
        $18.000 mensuales dependiendo de la tasa vigente.
      </p>

      {/* COMO FUNCIONA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cómo funciona el rendimiento de Mercado Pago
      </h2>

      <p className="mb-4">
        Mercado Pago invierte tu dinero automáticamente en un fondo común de inversión 
        de bajo riesgo administrado por su propia gestora. 
        Esto permite generar intereses diarios sin que tengas que hacer nada.
      </p>

      <p className="mb-4">
        A diferencia de un plazo fijo tradicional:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>No hay plazo mínimo</li>
        <li>Podés retirar el dinero en cualquier momento</li>
        <li>Los intereses se acreditan diariamente</li>
        <li>No tiene costos de mantenimiento</li>
        <li>Se activa automáticamente</li>
      </ul>

      {/* COMPARACION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Mercado Pago vs plazo fijo
      </h2>

      <p className="mb-4">
        Actualmente, los plazos fijos bancarios en Argentina ofrecen alrededor de 
        23% a 27% anual, valores similares a las billeteras virtuales.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Característica</th>
              <th className="border border-orange-600 p-2 text-left">Mercado Pago</th>
              <th className="border border-orange-600 p-2 text-left">Plazo fijo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">Disponibilidad</td>
              <td className="border border-orange-600 p-2">Inmediata</td>
              <td className="border border-orange-600 p-2">30 días mínimo</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Rendimiento</td>
              <td className="border border-orange-600 p-2">21% a 26%</td>
              <td className="border border-orange-600 p-2">23% a 27%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Intereses</td>
              <td className="border border-orange-600 p-2">Diarios</td>
              <td className="border border-orange-600 p-2">Al vencimiento</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Liquidez</td>
              <td className="border border-orange-600 p-2">Alta</td>
              <td className="border border-orange-600 p-2">Baja</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CUANTO POR DIA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuánto paga Mercado Pago por día
      </h2>

      <p className="mb-4">
        Aproximadamente:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>$100.000 → $50 a $70 por día</li>
        <li>$500.000 → $250 a $350 por día</li>
        <li>$1.000.000 → $500 a $700 por día</li>
      </ul>

      <p className="mb-4">
        Los intereses se depositan automáticamente en tu cuenta todos los días.
      </p>

      {/* VENTAJAS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Ventajas de usar Mercado Pago para generar intereses
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>No requiere monto mínimo alto</li>
        <li>Sin costos</li>
        <li>Dinero siempre disponible</li>
        <li>Intereses diarios</li>
        <li>Activación automática</li>
        <li>Funciona como cuenta de uso diario</li>
      </ul>

      {/* BOTON SECUNDARIO */}
      <div className="my-6">
        <Link
          to="/mercadopago/rendimiento"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular ganancias exactas ahora
        </Link>
      </div>

      {/* DESVENTAJAS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Desventajas
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>La tasa puede bajar o subir</li>
        <li>No garantiza un porcentaje fijo</li>
        <li>Puede rendir menos que otras inversiones</li>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Preguntas frecuentes
      </h2>

      <h3 className="font-semibold mt-4">
        ¿Cuándo paga Mercado Pago?
      </h3>

      <p className="mb-4">
        Los intereses se acreditan todos los días automáticamente.
      </p>

      <h3 className="font-semibold mt-4">
        ¿Cuál es el rendimiento mensual?
      </h3>

      <p className="mb-4">
        Aproximadamente entre 1,7% y 2,3% mensual.
      </p>

      <h3 className="font-semibold mt-4">
        ¿Es seguro?
      </h3>

      <p className="mb-4">
        El dinero se invierte en fondos de bajo riesgo y podés retirarlo cuando quieras.
      </p>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Conclusión
      </h2>

      <p className="mb-4">
        Mercado Pago es una de las formas más simples de generar rendimientos en pesos en Argentina. 
        Actualmente ofrece tasas cercanas al 21%–26% anual, con disponibilidad inmediata y sin requisitos complicados.
      </p>

      <p className="mb-4">
        Aunque no reemplaza inversiones más avanzadas, es una excelente opción para dinero que necesitás usar diariamente.
      </p>

    </article>
  );
}