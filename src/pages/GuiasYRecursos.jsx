{/*import { Link } from "react-router-dom";

export default function Guias() {

  const categorias = [
    {
      titulo: "Mercado Libre",
      descripcion: "Comisiones, costos, envíos y cálculo de ganancias",
      icono: "🛒",
      link: "/guias/mercado-libre",
      color: "hover:border-yellow-500"
    },
    {
      titulo: "Mercado Pago",
      descripcion: "Comisiones, QR, links de pago y acreditaciones",
      icono: "💳",
      link: "/guias/mercado-pago",
      color: "hover:border-blue-500"
    },
    {
      titulo: "Inversiones",
      descripcion: "Rendimientos, comparativas y simulaciones",
      icono: "📈",
      link: "/guias/inversiones",
      color: "hover:border-green-500"
    },
    {
      titulo: "Calculadoras",
      descripcion: "Herramientas para calcular comisiones y ganancias",
      icono: "🧮",
      link: "/",
      color: "hover:border-orange-500"
    },
    {
      titulo: "Estrategias",
      descripcion: "Cómo vender más y reducir costos",
      icono: "🚀",
      link: "/guias/estrategias",
      color: "hover:border-pink-500"
    },
    {
      titulo: "Impuestos",
      descripcion: "Monotributo, AFIP y obligaciones fiscales",
      icono: "🧾",
      link: "/guias/impuestos",
      color: "hover:border-purple-500"
    }
  ];


  const destacados = [
    {
      titulo: "Cuánto cobra Mercado Libre por vender en Argentina (2026)",
      link: "/guias/cuanto-cobra-mercado-libre"
    },
    {
      titulo: "Cuánto cobra Mercado Pago por cobrar con QR",
      link: "/guias/cuanto-cobra-mercado-pago-qr"
    },
    {
      titulo: "Conviene Mercado Pago o plazo fijo",
      link: "/guias/mercado-pago-vs-plazo-fijo"
    },
    {
      titulo: "Cómo calcular tu ganancia real en Mercado Libre",
      link: "/guias/calcular-ganancia-mercado-libre"
    }
  ];


  const cardBase = `
    group
    bg-gradient-to-b from-zinc-800 to-zinc-900
    border border-zinc-700
    rounded-xl
    p-6
    transition-all duration-200
    hover:scale-[1.02]
  `;


  return (

    <div className="max-w-6xl mx-auto px-6 py-12 text-white">


      {/* HEADER */}

{/*}      <div className="text-center mb-12">

        <h1 className="text-3xl font-bold mb-3">
          Guías y Recursos
        </h1>

        <p className="text-zinc-400 max-w-xl mx-auto">
          Aprendé a calcular comisiones, maximizar ganancias y usar Mercado Libre y Mercado Pago de forma profesional.
        </p>

      </div>



      {/* CATEGORIAS */}

{/*      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

        {categorias.map((cat) => (

          <Link
            key={cat.titulo}
            to={cat.link}
            className={`${cardBase} ${cat.color}`}
          >

            <div className="text-center">

              <div className="text-4xl mb-4">
                {cat.icono}
              </div>

              <h2 className="font-semibold text-lg mb-2">
                {cat.titulo}
              </h2>

              <p className="text-sm text-zinc-400">
                {cat.descripcion}
              </p>

            </div>

          </Link>

        ))}

      </div>



      {/* BLOQUE ADS */}

      {/*<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center mb-16">

        <p className="text-sm text-zinc-500">
          Espacio publicitario
        </p>

        <div className="h-24 flex items-center justify-center text-zinc-600">
          Google Ads
        </div>

      </div>*/}



      {/* ARTICULOS DESTACADOS */}

{/*      <div>

        <h2 className="text-xl font-semibold mb-6">
          Artículos más leídos
        </h2>


        <div className="grid md:grid-cols-2 gap-4">

          {destacados.map((art) => (

            <Link
              key={art.titulo}
              to={art.link}
              className="
                bg-zinc-900
                border border-zinc-800
                rounded-xl
                p-5
                hover:border-orange-500
                transition
              "
            >

              {art.titulo}

            </Link>

          ))}

        </div>

      </div>



      {/* CTA CALCULADORAS */}

{/*      <div className="mt-16 text-center bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-8">

        <h2 className="text-xl font-semibold mb-3">
          Calculá tus comisiones ahora
        </h2>

        <p className="text-zinc-400 mb-6">
          Usá nuestras herramientas gratuitas para saber cuánto vas a ganar realmente.
        </p>


        <div className="flex flex-wrap gap-4 justify-center">

          <Link
            to="/mercadolibre"
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Calculadora Mercado Libre
          </Link>


          <Link
            to="/mercadopago"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            Calculadora Mercado Pago
          </Link>

        </div>

      </div>


    </div>

  );

}*/}

import { Link } from "react-router-dom";

export default function GuiasArticulos() {

  const articulos = [
    {
      titulo: "Cuánto cobra Mercado Libre por vender en Argentina (2026)",
      slug: "/guias/cuantocobraml"
    },
    {
      titulo: "Cuánto cobra Mercado Pago por cobrar dinero en Argentina (2026)",
      slug: "/guias/cuantocobramp"
    },
    {
      titulo: "Cuánto rinde Mercado Pago hoy en Argentina (2026): tasa, ganancias y ejemplos reales",
      slug: "/guias/cuantorindemp"
    },
    {
      titulo: "Cómo calcular las comisiones de Mercado Libre paso a paso (2026)",
      slug: "/guias/comocalcularcomisionesml"
    },
    {
      titulo: "Cuántas ventas necesito para ganar X dinero en Mercado Libre (2026)",
      slug: "/guias/cuantasventasnecesito"
    },
    {
      titulo: "Envios Mercado Libre (2026)",
      slug: "/guias/enviosmercadolibre"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">

      <h1 className="text-3xl font-bold text-center mb-3">
        Guías y Recursos
      </h1>

      <p className="text-center text-zinc-400 mb-10">
        Aprendé a calcular comisiones, maximizar ganancias y usar Mercado Libre y
        Mercado Pago de forma profesional.
      </p>


      {/* lista */}
      <div className="space-y-4 mb-12">

        {articulos.map((articulo) => (

          <Link
            key={articulo.slug}
            to={articulo.slug}
            className="
              block
              bg-zinc-900
              border border-zinc-700
              rounded-xl
              px-6 py-4
              hover:border-orange-500
              hover:bg-zinc-800
              transition
            "
          >
            {articulo.titulo}
          </Link>

        ))}

      </div>


      {/* CTA calculadoras */}
      <div className="
        bg-zinc-900
        border border-zinc-700
        rounded-2xl
        p-6
        text-center
      ">

        <p className="text-zinc-400 mb-4">
          Calculá tus comisiones ahora
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/mercadolibre"
            className="
              bg-yellow-500
              hover:bg-yellow-600
              text-black
              font-semibold
              px-5 py-3
              rounded-xl
              transition
            "
          >
            Calculadora Mercado Libre
          </Link>

          <Link
            to="/mercadopago"
            className="
              bg-blue-600
              hover:bg-blue-700
              font-semibold
              px-5 py-3
              rounded-xl
              transition
            "
          >
            Calculadora Mercado Pago
          </Link>

        </div>

      </div>

    </div>
  );
}