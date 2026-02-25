{/*import { useState } from "react";

const faqData = [
  {
    question: "¿Qué es esta herramienta?",
    answer:
      "Es una calculadora independiente pensada para ayudar a vendedores a estimar costos, comisiones y resultados de venta. No reemplaza información oficial de ninguna plataforma."
  },
  {
    question: "¿Está afiliada a Mercado Libre o Mercado Pago?",
    answer:
      "No. Este proyecto es completamente independiente y no tiene relación oficial con ninguna plataforma comercial."
  },
  {
    question: "¿Los cálculos son exactos?",
    answer:
      "Los resultados son estimaciones basadas en información pública. Las comisiones reales pueden variar según políticas vigentes."
  },
  {
    question: "¿Se guardan mis datos?",
    answer:
      "No almacenamos información personal ni datos ingresados en las calculadoras. Tu privacidad es respetada."
  },
  {
    question: "¿Tiene costo usar la herramienta?",
    answer:
      "No. El uso de esta herramienta es completamente gratuito."
  },
  {
    question: "¿Por qué puede variar el resultado real?",
    answer:
      "Las plataformas pueden modificar comisiones o condiciones sin previo aviso, lo que puede generar diferencias."
  },
  {
    question: "¿Cómo puedo contactar al proyecto?",
    answer:
      "Podés hacerlo desde la página de contacto mediante el formulario disponible."
  },
  {
    question: "¿Se agregarán nuevas funciones?",
    answer:
      "Sí. El proyecto está en constante desarrollo para incorporar nuevas herramientas útiles."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-10 text-center">
          Preguntas Frecuentes
        </h1>

        <div className="space-y-4">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="box-border w-full border border-zinc-700 rounded-xl bg-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-zinc-700 transition cursor-pointer text-orange-400"
              >
                <span className="font-medium">
                  {item.question}
                </span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-400 box-border">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

        <p className="mt-12 text-sm text-gray-500 text-center">
          Esta información tiene fines orientativos y puede actualizarse con el tiempo.
        </p>

      </div>
    </div>
  );
}*/}

import { useState } from "react";

const faqData = [
  {
    question: "¿Qué es esta herramienta?",
    answer:
      "Es una calculadora independiente pensada para ayudar a vendedores a estimar costos, comisiones y resultados de venta. No reemplaza información oficial de ninguna plataforma."
  },
  {
    question: "¿Está afiliada a Mercado Libre o Mercado Pago?",
    answer:
      "No. Este proyecto es completamente independiente y no tiene relación oficial con ninguna plataforma comercial."
  },
  {
    question: "¿Los cálculos son exactos?",
    answer:
      "Los resultados son estimaciones basadas en información pública. Las comisiones reales pueden variar según políticas vigentes."
  },
  {
    question: "¿Se guardan mis datos?",
    answer:
      "No almacenamos información personal ni datos ingresados en las calculadoras. Tu privacidad es respetada."
  },
  {
    question: "¿Tiene costo usar la herramienta?",
    answer:
      "No. El uso de esta herramienta es completamente gratuito."
  },
  {
    question: "¿Por qué puede variar el resultado real?",
    answer:
      "Las plataformas pueden modificar comisiones o condiciones sin previo aviso."
  },
  {
    question: "¿Cómo puedo contactar al proyecto?",
    answer:
      "Desde la página de contacto mediante el formulario disponible."
  },
  {
    question: "¿Se agregarán nuevas funciones?",
    answer:
      "Sí. El proyecto está en desarrollo constante."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 py-16 flex justify-center">

      {/* CONTENEDOR FIJO RESPONSIVE */}
      <div className="w-full max-w-3xl px-6">

        <h1 className="text-3xl font-bold mb-10 text-center">
          Preguntas Frecuentes
        </h1>

        <div className="space-y-4">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl bg-zinc-800 overflow-hidden w-full"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-zinc-700 transition cursor-pointer text-orange-400"
              >
                <span className="font-medium">
                  {item.question}
                </span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* RESPUESTA — NO AFECTA ANCHO */}
              <div
                className={`px-5 text-gray-400 transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {item.answer}
              </div>
            </div>
          ))}

        </div>

        <p className="mt-12 text-sm text-gray-500 text-center">
          Información orientativa sujeta a cambios.
        </p>

      </div>
    </div>
  );
}

