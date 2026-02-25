import { useState } from "react";
import { Link } from "react-router-dom";

export default function MPComisiones() {

  const [monto, setMonto] = useState("");
  const [herramienta, setHerramienta] = useState("qr");
  const [medio, setMedio] = useState("");
  const [acreditacion, setAcreditacion] = useState("");

  const [resultado, setResultado] = useState({
    porcentaje: 0,
    comision: 0,
    total: 0
  });

  // Tabla REAL Mercado Pago Argentina
  const comisiones = {

    qr: {
      cuenta: {
        inmediato: 0.8
      },
      debito: {
        inmediato: 1.35,
        "2dias": 0.85
      },
      credito: {
        inmediato: 6.29,
        "10dias": 4.39
      },
      prepaga: {
        inmediato: 3.75
      }
    },

    link: {
      unico: {
        inmediato: 6.29,
        "10dias": 4.39,
        "18dias": 3.39,
        "35dias": 1.49
      }
    },

    point: {
      debito: {
        inmediato: 3.25,
        "2dias": 2.99
      },
      credito: {
        inmediato: 6.29,
        "5dias": 5.39
      }
    }

  };

  const calcular = () => {

    if (!monto) return;

    let porcentaje = 0;

    if (herramienta === "link") {

      porcentaje =
        comisiones.link.unico[acreditacion] || 0;

    } else {

      porcentaje =
        comisiones[herramienta]?.[medio]?.[acreditacion] || 0;

    }

    const comision = monto * porcentaje / 100;
    const total = monto - comision;

    setResultado({
      porcentaje,
      comision,
      total
    });

  };

  const format = (n) =>
    n.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-14">

      <div className="max-w-6xl mx-auto">

        <Link
          to="/mercadopago"
          className="text-zinc-400 hover:text-orange-500 mb-6 inline-block"
        >
          ← Volver al menú
        </Link>

        <h1 className="text-3xl font-bold mb-10 text-center">
          Calculadora de Comisiones Mercado Pago
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* INPUTS */}
          <div className="space-y-5">

            <div>
              <label className="text-sm text-zinc-400">
                Monto a cobrar (ARS)
              </label>
              <input
                type="number"
                value={monto}
                onChange={(e) =>
                  setMonto(Number(e.target.value))
                }
                className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
                placeholder="Ej: 10000"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">
                Herramienta
              </label>
              <select
                value={herramienta}
                onChange={(e) => {

                  setHerramienta(e.target.value);
                  setMedio("");
                  setAcreditacion("");

                }}
                className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
              >

                <option value="qr">
                  Código QR
                </option>

                <option value="link">
                  Link de pago
                </option>

                <option value="point">
                  Point
                </option>

              </select>
            </div>


            {herramienta !== "link" && (

              <div>

                <label className="text-sm text-zinc-400">
                  Medio de pago
                </label>

                <select
                  value={medio}
                  onChange={(e) =>
                    setMedio(e.target.value)
                  }
                  className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
                >

                  <option value="">
                    Seleccionar
                  </option>

                  {herramienta === "qr" && (
                    <>
                      <option value="cuenta">
                        Dinero en cuenta
                      </option>

                      <option value="debito">
                        Tarjeta débito
                      </option>

                      <option value="credito">
                        Tarjeta crédito
                      </option>

                      <option value="prepaga">
                        Tarjeta prepaga
                      </option>
                    </>
                  )}

                  {herramienta === "point" && (
                    <>
                      <option value="debito">
                        Tarjeta débito
                      </option>

                      <option value="credito">
                        Tarjeta crédito
                      </option>
                    </>
                  )}

                </select>

              </div>

            )}


            <div>

              <label className="text-sm text-zinc-400">
                Acreditación
              </label>

              <select
                value={acreditacion}
                onChange={(e) =>
                  setAcreditacion(e.target.value)
                }
                className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
              >

                <option value="">
                  Seleccionar
                </option>

                {herramienta === "qr" && medio === "cuenta" && (
                  <option value="inmediato">
                    inmediato
                  </option>
                )}

                {herramienta === "qr" && medio === "debito" && (
                  <>
                    <option value="inmediato">
                      inmediato
                    </option>
                    <option value="2dias">
                      2 días
                    </option>
                  </>
                )}

                {herramienta === "qr" && medio === "credito" && (
                  <>
                    <option value="inmediato">
                      inmediato
                    </option>
                    <option value="10dias">
                      10 días
                    </option>
                  </>
                )}

                {herramienta === "qr" && medio === "prepaga" && (
                  <option value="inmediato">
                    inmediato
                  </option>
                )}

                {herramienta === "link" && (
                  <>
                    <option value="inmediato">
                      inmediato
                    </option>
                    <option value="10dias">
                      10 días
                    </option>
                    <option value="18dias">
                      18 días
                    </option>
                    <option value="35dias">
                      35 días
                    </option>
                  </>
                )}

                {herramienta === "point" && medio === "debito" && (
                  <>
                    <option value="inmediato">
                      inmediato
                    </option>
                    <option value="2dias">
                      2 días
                    </option>
                  </>
                )}

                {herramienta === "point" && medio === "credito" && (
                  <>
                    <option value="inmediato">
                      inmediato
                    </option>
                    <option value="5dias">
                      5 días
                    </option>
                  </>
                )}

              </select>

            </div>


            <button
              onClick={calcular}
              className="
              w-full
              bg-orange-600
              hover:bg-orange-500
              transition
              py-3
              rounded-lg
              font-semibold
              "
            >
              Calcular
            </button>

          </div>


          {/* RESULTADOS */}

          <div className="bg-zinc-800 rounded-xl p-6 space-y-5">

            <div>

              <div className="text-zinc-400 text-sm">
                Comisión aplicada
              </div>

              <div className="text-orange-500 text-2xl font-bold">
                {resultado.porcentaje}%
              </div>

            </div>


            <hr className="border-zinc-700"/>


            <div>

              <div className="text-zinc-400 text-sm">
                Comisión
              </div>

              <div className="text-orange-500 text-2xl font-bold">
                ${format(resultado.comision)}
              </div>

            </div>


            <hr className="border-zinc-700"/>


            <div>

              <div className="text-zinc-400 text-sm">
                Recibís
              </div>

              <div className="text-orange-500 text-3xl font-bold">
                ${format(resultado.total)}
              </div>

            </div>


            <hr className="border-zinc-700"/>


            <div className="text-xs text-zinc-500">

              Simulación basada en comisiones públicas de Mercado Pago Argentina.
              Los valores pueden variar según promociones o condiciones comerciales.

            </div>


          </div>


        </div>

      </div>

    </div>
  );

}