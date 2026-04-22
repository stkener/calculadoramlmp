import React from "react";

export default function PromoLibro() {
  return (
    <section className="my-10 rounded-2xl border border-blue-400 bg-zinc-900/40 p-6 md:p-8">
      
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-2xl font-bold text-blue-200 mb-4">
            ¿Querés organizar mejor tu dinero?
          </h2>

          <p className="text-blue-100 mb-4">
            Descargá el ebook <strong>"Presupuesto y Control de Gastos"</strong> y aprendé
            a ordenar tus finanzas, controlar tus gastos mensuales y evitar perder
            poder adquisitivo.
          </p>

          <p className="text-blue-100 mb-6">
            Una guía práctica y simple para empezar a administrar mejor tu plata
            desde hoy.
          </p>

          <a
            href="https://presupuestoycontroldegastos.s.dropyfile.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Ver el libro ahora
          </a>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <img
            src="/image/portadalibro.png"
            alt="Ebook presupuesto y control de gastos"
            className="rounded-xl shadow-lg max-w-[240px] w-full border border-blue-300"
          />
        </div>

      </div>
    </section>
  );
}