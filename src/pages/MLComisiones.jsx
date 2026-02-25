import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mercadoLibreConfig } from "../config/mercadoLibreConfig";

export default function MLComisiones() {
  const navigate = useNavigate();

  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipoPublicacion, setTipoPublicacion] = useState("clasica");

  const [resultado, setResultado] = useState({
    porcentajeAplicado: 0,
    cargoPorVender: 0,
    cargoFijo: 0,
    totalCostosML: 0
  });

  const calcular = () => {
    const p = parseFloat(precio);
    if (!p || !categoria) return;

    const catData = mercadoLibreConfig.categorias[categoria];
    const porcentaje = catData[tipoPublicacion];

    const cargoPorVender = p * porcentaje;

    let cargoFijo = 0;
    mercadoLibreConfig.cargosFijos.forEach((item) => {
      if (p <= item.hasta) {
        cargoFijo = item.cargo;
      }
    });

    const totalCostosML = cargoPorVender + cargoFijo;

    setResultado({
      porcentajeAplicado: porcentaje * 100,
      cargoPorVender,
      cargoFijo,
      totalCostosML
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 text-white">

      {/* BOTÓN VOLVER */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-sm text-orange-500 hover:text-orange-400 transition cursor-pointer"
      >
        ← Volver al menú
      </button>

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Calculadora de Comisión Mercado Libre
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORMULARIO */}
        <div className="space-y-6">

          <input
            type="number"
            placeholder="Precio de venta (ARS)"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          >
            <option value="">Seleccioná categoría</option>
            {Object.keys(mercadoLibreConfig.categorias).map((cat) => (
              <option key={cat} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>

          <select
            value={tipoPublicacion}
            onChange={(e) => setTipoPublicacion(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-4 focus:outline-none focus:border-orange-500"
          >
            <option value="clasica" className="text-black">Clásica</option>
            <option value="premium" className="text-black">Premium</option>
          </select>

          <button
            onClick={calcular}
            className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-xl p-4 font-semibold cursor-pointer"
          >
            Calcular
          </button>

        </div>

        {/* RESULTADOS - SIEMPRE VISIBLE */}
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-2xl p-8 space-y-6 shadow-xl">

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">
              Porcentaje aplicado en esta categoría
            </p>
            <p className="text-xl md:text-2xl font-semibold text-orange-500">
              {resultado.porcentajeAplicado}%
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">
              Cargo por vender
            </p>
            <p className="text-xl font-semibold">
              ${resultado.cargoPorVender.toFixed(2)}
            </p>
          </div>

          <div className="border-b border-zinc-700 pb-4">
            <p className="text-sm text-zinc-400">
              Cargo fijo por rango de precio
            </p>
            <p className="text-xl font-semibold">
              ${resultado.cargoFijo.toFixed(2)}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Total de costos de Mercado Libre
            </p>
            <p className="text-2xl md:text-3xl font-bold text-orange-500">
              ${resultado.totalCostosML.toFixed(2)}
            </p>
          </div>

        </div>

      </div>

      <div className="text-xs text-zinc-500 mt-12 text-center">
        Datos basados en la información oficial de Mercado Libre Argentina.
        <a
          href="https://www.mercadolibre.com.ar/ayuda/Costos-de-vender-un-producto_1148"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-orange-500 ml-1"
        >
          Ver tabla oficial de costos
        </a>
      </div>

      <div className="text-xs text-zinc-500 mt-6 text-center">
        Mercado Libre® es una marca registrada de MercadoLibre S.R.L.
        Esta herramienta no está afiliada, asociada ni respaldada por Mercado Libre.
      </div>

    </div>
  );
}