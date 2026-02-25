import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MLMargen() {

  const navigate = useNavigate();

  const [costo, setCosto] = useState("");
  const [comision, setComision] = useState("");
  const [margenDeseado, setMargenDeseado] = useState("");
  const [resultado, setResultado] = useState(null);
  const [calculado, setCalculado] = useState(false);

  const calcular = () => {
    const C = parseFloat(costo);
    const K = parseFloat(comision) / 100;
    const M = parseFloat(margenDeseado) / 100;

    if (isNaN(C) || C <= 0) {
      alert("Ingresá un costo válido");
      return;
    }

    if (isNaN(K) || K < 0) {
      alert("Ingresá una comisión válida");
      return;
    }

    if (isNaN(M) || M < 0) {
      alert("Ingresá un margen válido");
      return;
    }

    if (K + M >= 1) {
      alert("La suma de comisión y margen no puede ser mayor o igual a 100%");
      return;
    }

    const precio = C / (1 - K - M);
    const comisionPesos = precio * K;
    const ganancia = precio - comisionPesos - C;
    const margenReal = (ganancia / precio) * 100;
    const precioEquilibrio = C / (1 - K);

    setResultado({
      precio,
      ganancia,
      margenReal,
      precioEquilibrio
    });

    setCalculado(true);
  };

  const valores = calculado && resultado
    ? resultado
    : {
        precio: 0,
        ganancia: 0,
        margenReal: 0,
        precioEquilibrio: 0
      };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">

      {/* BOTÓN VOLVER */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-sm text-orange-500 hover:text-orange-400 transition cursor-pointer"
      >
        ← Volver al menú
      </button>

      <h1 className="text-3xl font-bold text-center mb-12">
        📊 Planificador de Precio Objetivo
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LADO IZQUIERDO */}
        <div className="space-y-6">

          <input
            type="number"
            placeholder="Costo total del producto (ARS)"
            value={costo}
            onChange={(e) => {
              setCosto(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <input
            type="number"
            placeholder="Comisión estimada (%)"
            value={comision}
            onChange={(e) => {
              setComision(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <input
            type="number"
            placeholder="Margen deseado (%)"
            value={margenDeseado}
            onChange={(e) => {
              setMargenDeseado(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <button
            onClick={calcular}
            className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-xl p-4 font-semibold cursor-pointer"
          >
            Calcular
          </button>

        </div>

        {/* LADO DERECHO - RESULTADOS */}
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-2xl p-8 space-y-6 shadow-xl">

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Precio sugerido</p>
            <p className="text-2xl font-bold text-orange-500">
              ${valores.precio.toFixed(2)}
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Ganancia estimada</p>
            <p className="text-xl font-semibold">
              ${valores.ganancia.toFixed(2)}
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Margen real</p>
            <p className="text-xl font-semibold">
              {valores.margenReal.toFixed(2)}%
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Precio mínimo sin ganancia</p>
            <p className="text-xl font-semibold">
              ${valores.precioEquilibrio.toFixed(2)}
            </p>
          </div>

        </div>

      </div>

      <p className="text-xs text-zinc-500 mt-10 text-center">
        Esta herramienta permite planificar precios antes de publicar, proyectando rentabilidad según comisión y margen deseado.
      </p>

    </div>
  );
}