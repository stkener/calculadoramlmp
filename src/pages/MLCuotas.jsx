import { useState } from "react";
import { useNavigate } from "react-router-dom";

const planesCuotas = [
  { label: "Sin cuotas", cuotas: 1, factor: 0 },
  { label: "3 cuotas al mismo precio", cuotas: 3, factor: 0.094 },
  { label: "6 cuotas al mismo precio", cuotas: 6, factor: 0.151 },
  { label: "9 cuotas al mismo precio", cuotas: 9, factor: 0.207 },
  { label: "12 cuotas al mismo precio", cuotas: 12, factor: 0.30 },
  { label: "3 a 12 cuotas con interés bajo", cuotas: 12, factor: 0.10 }
];



export default function MLCuotas() {
  const [precio, setPrecio] = useState("");
  const [planIndex, setPlanIndex] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [calculado, setCalculado] = useState(false);

  const navigate = useNavigate();

  const calcular = () => {
    const P = parseFloat(precio);
    if (!P || P <= 0) return;

    const plan = planesCuotas[planIndex];
    const cargoCuotas = P * plan.factor;
    const recibeVendedor = P - cargoCuotas;
    const valorCuota = P / plan.cuotas;

    setResultado({
      plan: plan.label,
      cargoCuotas,
      recibeVendedor,
      valorCuota,
      cuotas: plan.cuotas
    });

    setCalculado(true);
  };

  const valores = calculado && resultado
    ? resultado
    : {
        plan: "-",
        cargoCuotas: 0,
        recibeVendedor: 0,
        valorCuota: 0,
        cuotas: 0
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
        Calculadora de Cuotas Mercado Libre
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LADO IZQUIERDO */}
        <div className="space-y-6">

          <input
            type="number"
            placeholder="Precio de venta (ARS)"
            value={precio}
            onChange={(e) => {
              setPrecio(e.target.value);
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <select
            value={planIndex}
            onChange={(e) => {
              setPlanIndex(parseInt(e.target.value));
              setCalculado(false);
            }}
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4"
          >
            {planesCuotas.map((plan, i) => (
              <option key={i} value={i} className="text-black">
                {plan.label}
              </option>
            ))}
          </select>

          <button
            onClick={calcular}
            className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-xl p-4 font-semibold cursor-pointer"
          >
            Calcular
          </button>

        </div>

        {/* LADO DERECHO - CARD RESULTADO */}
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-2xl p-8 space-y-6 shadow-xl">

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Plan seleccionado</p>
            <p className="text-xl font-semibold text-orange-500">
              {valores.plan}
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">Cargo por ofrecer cuotas</p>
            <p className="text-xl font-semibold">
              ${valores.cargoCuotas.toFixed(2)}
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">
              Valor de cada cuota
            </p>
            <p className="text-xl font-semibold">
              ${valores.valorCuota.toFixed(2)}
            </p>
            <p className="text-sm text-zinc-400">
              {valores.cuotas > 0 && `(× ${valores.cuotas} cuotas)`}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Total que recibe el vendedor
            </p>
            <p className="text-2xl font-bold text-orange-500">
              ${valores.recibeVendedor.toFixed(2)}
            </p>
          </div>

        </div>

      </div>

      <p className="text-xs text-zinc-500 mt-10 text-center">
        Estimación basada en rangos públicos de Mercado Envíos Argentina.
        El valor real puede variar según dimensiones, destino exacto y promociones vigentes.
      </p>

      {/* FOOTER LEGAL */}
      <p className="text-xs text-zinc-500 mt-12 text-center">
        Para información oficial sobre cuotas y costos para vendedores, podés consultar la información pública de Mercado Libre Argentina en el: 
        <a
            href="https://www.mercadolibre.com.ar/ayuda"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-500 ml-1"
        >
            Centro de ayuda para vendedores.
        </a>
      </p>

    </div>
  );
}