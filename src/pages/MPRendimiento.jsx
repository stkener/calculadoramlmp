import { useState } from "react";
import { Link } from "react-router-dom";

export default function RendimientoMercadoPago() {
  const [monto, setMonto] = useState("");
  const [tasa, setTasa] = useState("25.8");
  const [dias, setDias] = useState("30");

  const [gananciaDiaria, setGananciaDiaria] = useState(0);
  const [gananciaPeriodo, setGananciaPeriodo] = useState(0);
  const [gananciaAnual, setGananciaAnual] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);

  const calcular = () => {
    const montoNum = parseFloat(monto) || 0;
    const tasaNum = parseFloat(tasa) || 0;
    const diasNum = parseInt(dias) || 0;

    const tasaDiaria = tasaNum / 100 / 365;

    const diaria = montoNum * tasaDiaria;
    const periodo = montoNum * tasaDiaria * diasNum;
    const anual = montoNum * (tasaNum / 100);
    const total = montoNum + periodo;

    setGananciaDiaria(diaria);
    setGananciaPeriodo(periodo);
    setGananciaAnual(anual);
    setTotalFinal(total);
  };

  // Calcula automáticamente al cambiar valores
  

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-14">

      <div className="max-w-6xl mx-auto">

        <Link
          to="/mercadopago"
          className="text-zinc-400 hover:text-orange-500 mb-6 inline-block"
        >
          ← Volver al menú
        </Link>

        <h1 className="text-3xl font-bold text-center mb-12">
          Calculadora de Rendimiento Mercado Pago
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Columna izquierda - Inputs */}
          <div className="space-y-6">
            <label className="block mb-2 text-sm text-zinc-300">
              Monto invertido (ARS)
            </label>
            <input
              type="number"
              placeholder="Monto a invertir (ARS)"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500"
            />

            <label className="block mb-2 text-sm text-zinc-300">
              Tasa anual (%)
            </label>
            <input
              type="number"
              placeholder="Tasa anual (%)"
              value={tasa}
              onChange={(e) => setTasa(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500"
            />

            <label className="block mb-2 text-sm text-zinc-300">
              Período (días)
            </label>
            <input
              type="number"
              placeholder="Cantidad de días"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-orange-500"
            />

            <button
              onClick={calcular}
              className="w-full bg-orange-600 hover:bg-orange-500 transition rounded-xl py-4 font-semibold cursor-pointer"
            >
              Calcular
            </button>
          </div>

          {/* Columna derecha - Resultados (siempre visibles) */}
          <div className="bg-zinc-800 rounded-2xl p-8 space-y-6">

            <div>
              <p className="text-gray-400 text-sm">
                Ganancia diaria estimada
              </p>
              <p className="text-2xl font-bold text-orange-500">
                ${gananciaDiaria.toFixed(2)}
              </p>
            </div>

            <hr className="border-gray-700" />

            <div>
              <p className="text-gray-400 text-sm">
                Ganancia en {dias || 0} días
              </p>
              <p className="text-2xl font-bold text-orange-500">
                ${gananciaPeriodo.toFixed(2)}
              </p>
            </div>

            <hr className="border-gray-700" />

            <div className="bg-zinc-800">
              <p className="text-gray-400 text-sm">
                Ganancia anual estimada
              </p>
              <p className="text-2xl font-bold text-orange-500">
                ${gananciaAnual.toFixed(2)}
              </p>
            </div>

            <hr className="border-gray-700" />

            <div>
              <p className="text-gray-400 text-sm">
                Total final estimado
              </p>
              <p className="text-2xl font-bold text-orange-500">
                ${totalFinal.toFixed(2)}
              </p>
            </div>

          </div>
        </div>

        {/* Aviso legal */}
        <div className="mt-12 text-xs text-gray-500 leading-relaxed">
          El cálculo es estimativo y se basa en una tasa anual nominal ingresada manualmente.
          Los rendimientos reales pueden variar según la tasa vigente, capitalización diaria
          y condiciones del mercado. No constituye asesoramiento financiero.
        </div>

      </div>
    </div>
  );
}

