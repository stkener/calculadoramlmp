import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👉 ACÁ va EmailJS después
    console.log("Formulario listo para enviar:", form);

    // simulación visual de envío
    setStatus("success");

    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-200 py-16">

      <div className="max-w-3xl mx-auto px-6">

        {/* ===== Header ===== */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            Contacto
          </h1>

          <p className="text-gray-400">
            ¿Tenés dudas, sugerencias o querés reportar un problema?
            Escribinos — respondemos lo antes posible.
          </p>
        </header>

        {/* ===== Formulario ===== */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/70 backdrop-blur border border-orange-500/20 rounded-xl p-8 shadow-lg space-y-6"
        >

          {/* Nombre */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Nombre
            </label>

            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full bg-gray-950 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-950 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Asunto */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Asunto
            </label>

            <input
              type="text"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              className="w-full bg-gray-950 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Mensaje
            </label>

            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="5"
              required
              className="w-full bg-gray-950 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Aviso legal */}
          <div className="text-xs text-gray-500 leading-relaxed bg-gray-950 border border-gray-800 rounded-md p-4">
            Al enviar este formulario aceptás que tus datos se utilicen
            únicamente para responder esta consulta. No compartimos tu
            información con terceros. Podés leer más en nuestra Política de
            Privacidad.
          </div>

          {/* Feedback */}
          {status === "success" && (
            <div className="text-green-400 text-sm">
              ✔ Mensaje enviado correctamente.
            </div>
          )}

          {status === "error" && (
            <div className="text-red-400 text-sm">
              ❌ Ocurrió un error. Intentá nuevamente.
            </div>
          )}

          {/* Botón */}
            <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 rounded-md transition shadow-lg cursor-pointer"
            >
                Enviar mensaje
            </button>


        </form>
      </div>
    </section>
  );
}
