import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mercadoLibreConfig } from "../config/mercadoLibreConfig";

const planesCuotas = [
  { label: "Sin cuotas", factor: 0 },
  { label: "3 cuotas al mismo precio", factor: 0.094 },
  { label: "6 cuotas al mismo precio", factor: 0.151 },
  { label: "9 cuotas al mismo precio", factor: 0.207 },
  { label: "12 cuotas al mismo precio", factor: 0.30 },
  { label: "3 a 12 cuotas con interés bajo", factor: 0.10 }
];

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
  promedio: 1,
  mismaProvincia: 1.15,
  otraProvincia: 1.35,
  zonaLejana: 1.6,
};

export default function MLSimuladorCompleto() {

  const navigate = useNavigate();

  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipoPublicacion, setTipoPublicacion] = useState("clasica");

  const [peso, setPeso] = useState("");
  const [logistica, setLogistica] = useState("standard");
  const [zona, setZona] = useState("promedio");
  const [modoAvanzado, setModoAvanzado] = useState(false);
  const [envioGratis, setEnvioGratis] = useState(true);

  const [planCuotas, setPlanCuotas] = useState(0);
  const [costoProducto, setCostoProducto] = useState("");

  const [resultado, setResultado] = useState({
    totalComision: 0,
    cargoCuotas: 0,
    costoEnvio: 0,
    totalDescuentos: 0,
    netoRecibido: 0,
    gananciaReal: 0,
    margenReal: 0
  });

  const calcular = () => {

    const P = parseFloat(precio) || 0;
    const C = parseFloat(costoProducto) || 0;
    const pesoNum = parseFloat(peso) || 0;

    if (!P || !categoria) return;

    // ===== COMISIÓN =====
    const catData = mercadoLibreConfig.categorias[categoria];
    const porcentaje = catData[tipoPublicacion];
    const cargoPorVender = P * porcentaje;

    let cargoFijo = 0;
    mercadoLibreConfig.cargosFijos.forEach((item) => {
      if (P <= item.hasta) {
        cargoFijo = item.cargo;
      }
    });

    const totalComision = cargoPorVender + cargoFijo;

    // ===== CUOTAS =====
    const cargoCuotas = P * planesCuotas[planCuotas].factor;

    // ===== ENVÍO =====
    let costoEnvio = 0;

    if (pesoNum > 0) {
      const rango = tablaPesos.find(item => pesoNum <= item.max);
      if (rango) {
        costoEnvio = rango.costo;
        costoEnvio *= multiplicadoresLogistica[logistica];

        if (modoAvanzado) {
          costoEnvio *= multiplicadoresZona[zona];
        }

        if (!envioGratis) {
          costoEnvio = 0;
        }
      }
    }

    const totalDescuentos = totalComision + cargoCuotas + costoEnvio;
    const netoRecibido = P - totalDescuentos;
    const gananciaReal = netoRecibido - C;
    const margenReal = P > 0 ? (gananciaReal / P) * 100 : 0;

    setResultado({
      totalComision,
      cargoCuotas,
      costoEnvio,
      totalDescuentos,
      netoRecibido,
      gananciaReal,
      margenReal
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-white">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-sm text-orange-500 hover:text-orange-400 transition cursor-pointer"
      >
        ← Volver al menú
      </button>

      <h1 className="text-3xl font-bold text-center mb-12">
        🚀 Simulador Completo de Venta
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* FORMULARIO */}
        <div className="space-y-4">

          <input
            type="number"
            placeholder="Precio de venta (ARS)"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
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
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
          >
            <option value="clasica" className="text-black">Clásica</option>
            <option value="premium" className="text-black">Premium</option>
          </select>

          <input
            type="number"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
          />

          <select
            value={logistica}
            onChange={(e) => setLogistica(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
          >
            <option value="standard" className="text-black">Envío Standard</option>
            <option value="flex" className="text-black">Envío Flex</option>
            <option value="full" className="text-black">Mercado Envíos Full</option>
          </select>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={modoAvanzado}
              onChange={() => setModoAvanzado(!modoAvanzado)}
            />
            Activar cálculo por zona
          </label>

          {modoAvanzado && (
            <select
              value={zona}
              onChange={(e) => setZona(e.target.value)}
              className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
            >
              <option value="promedio" className="text-black">Zona Promedio</option>
              <option value="mismaProvincia" className="text-black">Misma Provincia</option>
              <option value="otraProvincia" className="text-black">Otra Provincia</option>
              <option value="zonaLejana" className="text-black">Zona Lejana</option>
            </select>
          )}

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={envioGratis}
              onChange={() => setEnvioGratis(!envioGratis)}
            />
            Ofrecés Envío Gratis
          </label>

          <select
            value={planCuotas}
            onChange={(e) => setPlanCuotas(parseInt(e.target.value))}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
          >
            {planesCuotas.map((plan, i) => (
              <option key={i} value={i} className="text-black">
                {plan.label}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Costo del producto (ARS)"
            value={costoProducto}
            onChange={(e) => setCostoProducto(e.target.value)}
            className="w-full bg-transparent border border-zinc-600 rounded-xl p-3"
          />

          <button
            onClick={calcular}
            className="w-full bg-orange-600 hover:bg-orange-700 rounded-xl p-4 font-semibold cursor-pointer"
          >
            Calcular simulación completa
          </button>

        </div>

        {/* RESULTADOS */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 space-y-6">

          <div>
            <p className="text-sm text-zinc-400">Total comisión ML</p>
            <p className="text-xl">${resultado.totalComision.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Cargo por cuotas</p>
            <p className="text-xl">${resultado.cargoCuotas.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Costo envío</p>
            <p className="text-xl">${resultado.costoEnvio.toFixed(2)}</p>
          </div>

          <div className="border-t border-zinc-700 pt-4">
            <p className="text-sm text-zinc-400">Total descontado</p>
            <p className="text-2xl font-bold text-orange-500">
              ${resultado.totalDescuentos.toFixed(2)}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Neto recibido</p>
            <p className="text-xl">${resultado.netoRecibido.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Ganancia real</p>
            <p className="text-xl">${resultado.gananciaReal.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Margen real</p>
            <p className="text-xl">{resultado.margenReal.toFixed(2)}%</p>
          </div>

        </div>

      </div>

    </div>
  );
}