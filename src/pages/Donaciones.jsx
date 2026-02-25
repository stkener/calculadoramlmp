import React from "react";

export default function Donaciones() {

  const cafecitoLink = "https://cafecito.app/stkener";
  const mpLibre = "https://link.mercadopago.com.ar/laberintos";
  const mp500 = "https://mpago.la/31YxBzc";

  const cardBase = `
    group
    flex flex-col items-center justify-center
    text-center

    bg-gradient-to-b from-zinc-800 to-zinc-900
    border border-zinc-700
    rounded-xl

    px-10 py-10
    min-h-[180px]

    hover:scale-[1.02]
    
    transition-all duration-200
    cursor-pointer
  `;

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 px-6 py-16">

      {/* header */}
      <div className="max-w-4xl mx-auto text-center mb-14">

        <h1 className="text-4xl font-bold mb-4">
          Donaciones
        </h1>

        <p className="text-zinc-400">
          Podés apoyar el desarrollo del proyecto con una donación.
        </p>

      </div>


      {/* cards */}
      <div className="
        max-w-5xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
      ">

        {/* Cafecito */}
        <a href={cafecitoLink} target="_blank" rel="noopener noreferrer" className={`${cardBase} hover:border-orange-500`}>

          <div className="text-5xl mb-3">
            ☕
          </div>

          <div className="text-lg font-semibold mb-1">
            Invitar un cafecito
          </div>

          <div className="text-sm text-zinc-400">
            Donación rápida mediante Cafecito
          </div>

        </a>


        {/* Mercado Pago libre */}
        <a href={mpLibre} target="_blank" rel="noopener noreferrer" className={`${cardBase} hover:border-pink-500`}>

          <div className="text-5xl mb-3">
            💳
          </div>

          <div className="text-lg font-semibold mb-1">
            Donar con Mercado Pago
          </div>

          <div className="text-sm text-zinc-400">
            Elegí el monto que quieras
          </div>

        </a>


        {/* Mercado Pago fijo */}
        <a href={mp500} target="_blank" rel="noopener noreferrer" className={`${cardBase} hover:border-yellow-500`}>

          <div className="text-5xl mb-3">
            ❤️
          </div>

          <div className="text-lg font-semibold mb-1">
            Donar $500
          </div>

          <div className="text-sm text-zinc-400">
            Apoyo directo al desarrollo
          </div>

        </a>

      </div>


      {/* legal */}
      <div className="max-w-3xl mx-auto mt-14 text-xs text-zinc-500 text-center">

        Esta página acepta donaciones voluntarias. No existe obligación de pago
        para utilizar las herramientas. Los pagos son procesados de forma segura
        por Mercado Pago y Cafecito.

      </div>

    </div>
  );

}