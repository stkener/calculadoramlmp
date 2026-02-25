import { useState } from "react";
import { Link } from "react-router-dom";

export default function MPCuotas() {

  const [monto, setMonto] = useState("");
  const [cuotas, setCuotas] = useState("1");
  const [tipo, setTipo] = useState("sin_interes");

  const [resultado, setResultado] = useState({
    porcentaje: 0,
    comision: 0,
    recibis: 0,
    valorCuota: 0
  });

  // porcentajes reales aproximados Mercado Pago Argentina
  const porcentajesSinInteres = {
    1: 4.39,
    3: 7.99,
    6: 11.99,
    9: 15.99,
    12: 19.99
  };

  const porcentajesConInteres = {
    1: 4.39,
    3: 4.39,
    6: 4.39,
    9: 4.39,
    12: 4.39
  };

  const calcular = () => {

    const m = parseFloat(monto);

    if (!m || m <= 0) return;

    const porcentaje =
      tipo === "sin_interes"
        ? porcentajesSinInteres[cuotas]
        : porcentajesConInteres[cuotas];

    const comision = m * (porcentaje / 100);

    const recibis = m - comision;

    const valorCuota =
      tipo === "sin_interes"
        ? m / cuotas
        : (m * 1.35) / cuotas; // estimación interés comprador

    setResultado({
      porcentaje,
      comision,
      recibis,
      valorCuota
    });

  };

  return (

    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-14">

      <div className="max-w-5xl mx-auto">
        
        <Link
          to="/mercadopago"
          className="text-zinc-400 hover:text-orange-500 mb-6 inline-block"
        >
          ← Volver al menú
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-center">
          Simulador de Cuotas Mercado Pago
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {/* formulario */}

          <div className="bg-zinc-900 p-6 rounded-xl">

            <label className="block mb-2 text-sm">
              Monto a cobrar (ARS)
            </label>

            <input
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              placeholder="Ej: 100000"
              className="w-full bg-zinc-800 border border-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500"
            />

            <label className="block mt-4 mb-2 text-sm">
              Cantidad de cuotas
            </label>

            <select
              value={cuotas}
              onChange={(e) => setCuotas(e.target.value)}
              className="w-full p-3 rounded bg-zinc-800 rounded-xl px-6 py-4"
              
            >
              <option value="1">1 cuota</option>
              <option value="3">3 cuotas</option>
              <option value="6">6 cuotas</option>
              <option value="9">9 cuotas</option>
              <option value="12">12 cuotas</option>
            </select>

            <label className="block mt-4 mb-2 text-sm">
              Tipo de cuotas
            </label>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full p-3 rounded bg-zinc-800 rounded-xl px-6 py-4"
            >
              <option value="sin_interes">
                Sin interés (vos pagás comisión)
              </option>

              <option value="con_interes">
                Con interés (cliente paga interés)
              </option>

            </select>

            <button
              onClick={calcular}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 p-3 rounded font-bold"
            >
              Calcular
            </button>

          </div>


          {/* resultados */}

          <div className="bg-zinc-800 p-6 rounded-xl">

            <div className="mb-4 ">

              <p className="text-sm text-gray-400">
                Comisión aplicada
              </p>

              <p className="text-2xl text-orange-500 font-bold">
                {resultado.porcentaje}%
              </p>

            </div>

            <hr className="border-gray-600 mb-4"/>

            <div className="mb-4">

              <p className="text-sm text-gray-400">
                Comisión total
              </p>

              <p className="text-xl text-orange-500 font-bold">
                ${resultado.comision.toFixed(2)}
              </p>

            </div>

            <hr className="border-gray-600 mb-4"/>

            <div className="mb-4">

              <p className="text-sm text-gray-400">
                Recibís
              </p>

              <p className="text-xl text-orange-500 font-bold">
                ${resultado.recibis.toFixed(2)}
              </p>

            </div>

            <hr className="border-gray-600 mb-4"/>

            <div>

              <p className="text-sm text-gray-400">
                Valor por cuota (cliente)
              </p>

              <p className="text-xl text-orange-500 font-bold">
                ${resultado.valorCuota.toFixed(2)}
              </p>

            </div>

            <p className="text-xs text-gray-400 mt-6">
              Simulación basada en comisiones públicas de Mercado Pago Argentina.
              Los valores reales pueden variar según promociones y tipo de cuenta.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}