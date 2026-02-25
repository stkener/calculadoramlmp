import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tablaPesos = [
  { max: 0.3, costo: 7400 },
  { max: 0.5, costo: 8200 },
  { max: 1, costo: 9000 },
  { max: 2, costo: 10500 },
  { max: 5, costo: 14000 },
  { max: 10, costo: 18000 },
  { max: 20, costo: 24000 },
];

const multiplicadoresLogistica = {
  standard: 1,
  flex: 0.85,
  full: 1.25,
};

const multiplicadoresZona = {
  promedio: 1,           // como ML al publicar
  mismaProvincia: 1.15,
  otraProvincia: 1.35,
  zonaLejana: 1.6,
};

export default function SimuladorEnvios() {
  const [peso, setPeso] = useState("");
  const [logistica, setLogistica] = useState("standard");
  const [zona, setZona] = useState("promedio");
  const [envioGratis, setEnvioGratis] = useState(true);
  const [modoAvanzado, setModoAvanzado] = useState(false);

  const [resultado, setResultado] = useState(0);

  const navigate = useNavigate();

  const calcular = () => {
    const p = parseFloat(peso);
    if (!p) return;

    const rango = tablaPesos.find(item => p <= item.max);
    if (!rango) return;

    let costo = rango.costo;

    costo *= multiplicadoresLogistica[logistica];

    if (modoAvanzado) {
      costo *= multiplicadoresZona[zona];
    }

    setResultado(envioGratis ? costo : 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">

        <button
            onClick={() => navigate(-1)}
            className="mb-8 text-sm text-orange-500 hover:text-orange-400 transition cursor-pointer"
        >
            ← Volver al menú
        </button>

      <h1 className="text-2xl font-bold text-center mb-8">
        Simulador de Costos de Envío
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
        <input
          type="number"
          placeholder="Peso del producto (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-full bg-transparent border border-zinc-600 rounded-xl p-4 focus:outline-none focus:border-orange-500"
        />

        <select
          value={logistica}
          onChange={(e) => setLogistica(e.target.value)}
          className="w-full bg-transparent border border-zinc-600 rounded-xl p-4"
        >
          <option value="standard" className="text-black">Standard</option>
          <option value="flex" className="text-black">Flex</option>
          <option value="full" className="text-black">Full</option>
        </select>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={envioGratis}
            onChange={() => setEnvioGratis(!envioGratis)}
          />
          <label>Ofrezco envío gratis</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={modoAvanzado}
            onChange={() => setModoAvanzado(!modoAvanzado)}
          />
          <label>Modo avanzado (simular destino)</label>
        </div>

        {modoAvanzado && (
          <select
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-4"
          >
            <option value="promedio" className="text-black">Promedio nacional</option>
            <option value="mismaProvincia" className="text-black">Misma provincia</option>
            <option value="otraProvincia" className="text-black">Otra provincia</option>
            <option value="zonaLejana" className="text-black">Zona lejana</option>
          </select>
        )}
        
        <button
          onClick={calcular}
          className="w-full bg-orange-600 hover:bg-orange-700 rounded-xl p-4 font-semibold cursor-pointer"
        >
          Calcular envío
        </button>
        </div>
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mt-6 text-center">
          <p className="text-sm text-zinc-400">
            Costo estimado que Mercado Pago descontaría por envío
          </p>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            ${resultado.toFixed(2)}
          </p>
        </div>
        
      </div>

      <p className="text-xs text-zinc-500 mt-10 text-center">
        Estimación basada en rangos públicos de Mercado Envíos Argentina.
        El valor real puede variar según dimensiones, destino exacto y promociones vigentes.
      </p>

      <p className="text-xs text-zinc-500 mt-4 text-center">
        Para conocer los costos y condiciones oficiales actualizados,
        podés consultar la información pública de Mercado Libre Argentina en:
        <a
            href="https://www.mercadolibre.com.ar/ayuda"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-500 ml-1"
        >
            Ver Centro de ayuda para vendedores
        </a>
      </p>

    </div>
  );
}