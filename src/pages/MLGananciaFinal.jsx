import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MLGananciaFinal() {

  const navigate = useNavigate();

  const [precioVenta, setPrecioVenta] = useState("");
  const [descuentosML, setDescuentosML] = useState("");
  const [costoProducto, setCostoProducto] = useState("");
  const [objetivoGanancia, setObjetivoGanancia] = useState("");

  const [resultado, setResultado] = useState(null);
  const [calculado, setCalculado] = useState(false);

  const calcular = () => {
    const P = parseFloat(precioVenta);
    const D = parseFloat(descuentosML);
    const C = parseFloat(costoProducto);
    const O = parseFloat(objetivoGanancia);

    if (isNaN(P) || P <= 0) return;
    if (isNaN(D) || D < 0) return;
    if (isNaN(C) || C < 0) return;

    const neto = P - D;
    const gananciaUnidad = neto - C;

    let unidadesNecesarias = 0;

    if (!isNaN(O) && O > 0 && gananciaUnidad > 0) {
      unidadesNecesarias = Math.ceil(O / gananciaUnidad);
    }

    setResultado({
      neto,
      gananciaUnidad,
      unidadesNecesarias
    });

    setCalculado(true);
  };

  const valores = calculado && resultado
    ? resultado
    : {
        neto: 0,
        gananciaUnidad: 0,
        unidadesNecesarias: 0
      };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-sm text-orange-500 hover:text-orange-400 transition cursor-pointer"
      >
        ← Volver al menú
      </button>

      <h1 className="text-3xl font-bold text-center mb-12">
        💰 Total que recibís / Ganancia final
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LADO IZQUIERDO */}
        <div className="space-y-6">

          <input
            type="number"
            placeholder="Precio de venta (ARS)"
            value={precioVenta}
            onChange={(e) => {
              setPrecioVenta(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <input
            type="number"
            placeholder="Total descontado por Mercado Libre (ARS)"
            value={descuentosML}
            onChange={(e) => {
              setDescuentosML(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <input
            type="number"
            placeholder="Costo del producto (ARS)"
            value={costoProducto}
            onChange={(e) => {
              setCostoProducto(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <input
            type="number"
            placeholder="Objetivo de ganancia mensual (opcional)"
            value={objetivoGanancia}
            onChange={(e) => {
              setObjetivoGanancia(e.target.value);
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

        {/* RESULTADOS */}
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-2xl p-8 space-y-6 shadow-xl">

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Neto recibido después de ML</p>
            <p className="text-2xl font-bold text-orange-500">
              ${valores.neto.toFixed(2)}
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Ganancia real por unidad</p>
            <p className="text-xl font-semibold">
              ${valores.gananciaUnidad.toFixed(2)}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Unidades necesarias para alcanzar tu objetivo</p>
            <p className="text-xl font-semibold">
              {valores.unidadesNecesarias > 0
                ? valores.unidadesNecesarias
                : "-"}
            </p>
          </div>

        </div>

      </div>

      <p className="text-xs text-zinc-500 mt-10 text-center">
        Esta herramienta muestra cuánto dinero real te queda luego de pagar costos y cargos de venta.
      </p>

    </div>
  );
}