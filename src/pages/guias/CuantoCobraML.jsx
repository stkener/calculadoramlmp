import { Link } from "react-router-dom";
import PromoLibro from "../../components/PromoLibro";

export default function CuantoCobraMercadoLibre() {

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-200">

      {/* volver */}
      <Link
        to="/guias"
        className="text-sm text-orange-500 hover:text-orange-400 transition"
      >
        ← Volver a Guías
      </Link>


      {/* titulo */}
      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
        Cuánto cobra Mercado Libre por vender en Argentina (2026)
      </h1>


      {/* imagen */}
      <img
        src="/image/ml1.jpg"
        alt="Vendedor usando Mercado Libre desde computadora"
        className="rounded-xl mb-6 w-full"
      />


      {/* intro */}
      <p className="text-zinc-300 mb-4">
        Vender en Mercado Libre es una de las formas más rápidas de iniciar un negocio online en Argentina.
        Sin embargo, muchos vendedores cometen un error grave: no calcular correctamente las comisiones.
        Esto puede hacer que vendas mucho, pero ganes poco o incluso pierdas dinero.
      </p>

      <p className="text-zinc-300 mb-6">
        En esta guía actualizada a 2026 vas a ver exactamente cuánto cobra Mercado Libre,
        qué porcentaje te descuentan y cuánto dinero recibís realmente después de vender.
      </p>


      {/* ADS placeholder */}
      {/*<div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 text-center my-8">
        <span className="text-zinc-500 text-sm">
          Espacio para anuncio Google AdSense
        </span>
      </div>*/}


      {/* seccion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Qué comisión cobra Mercado Libre
      </h2>

      <p className="text-zinc-300 mb-4">
        Mercado Libre cobra una comisión por cada venta realizada en la plataforma.
        Este porcentaje depende principalmente del tipo de publicación que uses.
      </p>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-6">

        <p className="mb-2">Publicación Clásica:</p>
        <p className="text-orange-400 font-semibold mb-4">
          aproximadamente 13% a 16%
        </p>

        <p className="mb-2">Publicación Premium:</p>
        <p className="text-orange-400 font-semibold">
          aproximadamente 28% a 31%
        </p>

      </div>

      <p className="text-zinc-300 mb-6">
        La publicación Premium tiene mayor comisión porque permite ofrecer cuotas sin interés,
        lo que aumenta la probabilidad de venta.
      </p>


      {/* calculadora */}
      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Calculá tu comisión exacta
        </h3>

        <p className="text-sm text-zinc-400 mb-4">
          Usá nuestra herramienta gratuita para ver cuánto te descuenta Mercado Libre.
        </p>

        <Link
          to="/mercadolibre/comisiones"
          className="inline-block bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-xl font-semibold transition"
        >
          Abrir calculadora de comisiones
        </Link>

      </div>


      {/* ejemplo */}
      <h2 className="text-2xl font-semibold mb-4">
        Ejemplo real de comisión
      </h2>

      <p className="text-zinc-300 mb-4">
        Supongamos que vendés un producto a $100.000.
      </p>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-6">

        <p>Precio de venta: $100.000</p>

        <p>Comisión aproximada (16%):</p>

        <p className="text-red-400">
          − $16.000
        </p>

        <p className="mt-2 font-semibold">
          Dinero que recibís:
        </p>

        <p className="text-green-400 text-xl font-bold">
          $84.000
        </p>

      </div>


      <p className="text-zinc-300 mb-8">
        Este valor puede variar según la categoría, promociones activas y tipo de publicación.
      </p>


      {/* cuanto te queda */}
      <h2 className="text-2xl font-semibold mb-4">
        Cuánto dinero recibís realmente
      </h2>

      <p className="text-zinc-300 mb-4">
        La comisión no es el único costo. También pueden aplicarse:
      </p>

      <ul className="list-disc ml-6 text-zinc-300 mb-6 space-y-2">
        <li>Costo de envío si ofrecés envío gratis</li>
        <li>Costo de cuotas sin interés</li>
        <li>Impuestos según tu situación fiscal</li>
        <li>Costo del producto</li>
      </ul>


      {/* simulador */}
      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Simulador completo de ganancia
        </h3>

        <p className="text-sm text-zinc-400 mb-4">
          Calculá tu ganancia final incluyendo comisiones, envíos y costos.
        </p>

        <Link
          to="/mercadolibre/simuladorCompleto"
          className="inline-block bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-xl font-semibold transition"
        >
          Abrir simulador completo
        </Link>

      </div>


      {/* clasica vs premium */}
      <h2 className="text-2xl font-semibold mb-4">
        Publicación clásica vs premium
      </h2>

      <p className="text-zinc-300 mb-4">
        Elegir correctamente el tipo de publicación puede aumentar tu ganancia.
      </p>

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-6">

        <p className="mb-2 font-semibold">
          Clásica
        </p>

        <ul className="list-disc ml-6 text-zinc-300 mb-4">
          <li>Menor comisión</li>
          <li>Sin cuotas sin interés</li>
          <li>Menor exposición</li>
        </ul>


        <p className="mb-2 font-semibold">
          Premium
        </p>

        <ul className="list-disc ml-6 text-zinc-300">
          <li>Mayor comisión</li>
          <li>Permite cuotas sin interés</li>
          <li>Mayor visibilidad</li>
        </ul>

      </div>

      {/* ads */}
      {/*<div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 text-center my-10">
        <span className="text-zinc-500 text-sm">
          Espacio para anuncio Google AdSense
        </span>
      </div>*/}


      {/* conclusion */}
      <h2 className="text-2xl font-semibold mb-4">
        Conclusión
      </h2>

      <p className="text-zinc-300 mb-4">
        Mercado Libre cobra entre un 13% y un 31% por cada venta en Argentina,
        dependiendo del tipo de publicación.
      </p>

      <p className="text-zinc-300 mb-4">
        Antes de publicar un producto, es fundamental calcular correctamente las comisiones
        para asegurarte de que tu negocio sea rentable.
      </p>

      <p className="text-zinc-300">
        Podés usar nuestras calculadoras gratuitas para conocer exactamente cuánto vas a ganar
        antes de vender.
      </p>
      <br></br>
      {/* herramienta margen */}
      <div className="bg-zinc-900 border border-orange-500 rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Calculá tu margen real
        </h3>

        <Link
          to="/mercadolibre/margen"
          className="inline-block bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-xl font-semibold transition"
        >
          Calcular margen de ganancia
        </Link>

      </div>

      <PromoLibro />

      {/* legal */}
      <p className="text-xs text-zinc-500 mt-10">
        Esta guía es informativa y se basa en datos públicos de Mercado Libre Argentina.
        Las comisiones reales pueden variar según categoría, promociones y condiciones de la plataforma.
      </p>


    </div>
  );

}