import { Link } from "react-router-dom";

export default function TablaComisionesMercadoLibre() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">

      {/* volver */}
      <Link
        to="/guias"
        className="text-sm text-orange-500 hover:text-orange-400 transition"
      >
        ← Volver a Guías
      </Link>

      {/* TITULO */}
      <h1 className="text-3xl font-bold mb-4">
        Tabla actualizada de comisiones de Mercado Libre (2026)
      </h1>

      {/* imagen */}
      <img
        src="/image/comisionesML.jpg"
        alt="Tabla de comisiones Mercado Libre 2026"
        className="rounded-xl mb-6 w-full"
      />

      {/* INTRO */}
      <p className="mb-4">
        Si vendés en Mercado Libre, entender las comisiones es clave para no perder plata.
      </p>

      <p className="mb-4">
        Las tarifas varían según la categoría del producto y el tipo de publicación
        (clásica o premium). En esta guía vas a ver una tabla actualizada y clara
        para entender cuánto cobra la plataforma en 2026.
      </p>

      <p className="mb-4">
        Tener estos números en cuenta te permite calcular precios correctos y mejorar
        tu margen de ganancia.
      </p>

      {/* BOTON */}
      <div className="my-6">
        <Link
          to="/mercadolibre/comisiones"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular comisiones automáticamente
        </Link>
      </div>

      {/* TABLA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Tabla completa de comisiones
      </h2>

      <p className="mb-4">
        Estas son comisiones aproximadas según categoría en Argentina:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Categoría</th>
              <th className="border border-orange-600 p-2 text-left">Clásica</th>
              <th className="border border-orange-600 p-2 text-left">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">Tecnología</td>
              <td className="border border-orange-600 p-2">14% – 17%</td>
              <td className="border border-orange-600 p-2">12% – 15%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Hogar y muebles</td>
              <td className="border border-orange-600 p-2">14% – 17%</td>
              <td className="border border-orange-600 p-2">13% – 17%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Indumentaria</td>
              <td className="border border-orange-600 p-2">12% – 15%</td>
              <td className="border border-orange-600 p-2">12% – 14%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Deportes</td>
              <td className="border border-orange-600 p-2">13% – 16%</td>
              <td className="border border-orange-600 p-2">12% – 15%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Salud y belleza</td>
              <td className="border border-orange-600 p-2">13% – 16%</td>
              <td className="border border-orange-600 p-2">12% – 15%</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Supermercado</td>
              <td className="border border-orange-600 p-2">11,8% – 15% + extra</td>
              <td className="border border-orange-600 p-2">12% – 15% + extra</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        En general, Mercado Libre cobra entre <strong>11% y 17%</strong> en publicaciones
        estándar, aunque puede variar según el producto.
      </p>

      {/* DIFERENCIA */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Diferencia entre publicación clásica y premium
      </h2>

      <p className="mb-4">
        La principal diferencia está en la visibilidad y en las comisiones.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-orange-600">
          <thead className="bg-orange-600">
            <tr>
              <th className="border border-orange-600 p-2 text-left">Característica</th>
              <th className="border border-orange-600 p-2 text-left">Clásica</th>
              <th className="border border-orange-600 p-2 text-left">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-orange-600 p-2">Comisión</td>
              <td className="border border-orange-600 p-2">Más baja</td>
              <td className="border border-orange-600 p-2">Más alta</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Visibilidad</td>
              <td className="border border-orange-600 p-2">Alta</td>
              <td className="border border-orange-600 p-2">Máxima</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Cuotas sin interés</td>
              <td className="border border-orange-600 p-2">No</td>
              <td className="border border-orange-600 p-2">Sí</td>
            </tr>
            <tr>
              <td className="border border-orange-600 p-2">Conversión</td>
              <td className="border border-orange-600 p-2">Media</td>
              <td className="border border-orange-600 p-2">Alta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        La publicación Premium tiene mayor exposición y permite ofrecer cuotas,
        pero puede superar el <strong>30% de comisión</strong> en algunos casos.
      </p>

      {/* CUANDO USAR */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cuándo elegir publicación Premium
      </h2>

      <p className="mb-4">
        No siempre conviene usar Premium. Depende del tipo de producto y estrategia.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Productos con alta competencia</li>
        <li>Artículos de alto margen</li>
        <li>Cuando necesitás vender rápido</li>
        <li>Si querés ofrecer cuotas sin interés</li>
      </ul>

      <p className="mb-4">
        En cambio, la publicación clásica suele ser mejor para mantener un margen
        más alto y vender de forma más rentable.
      </p>

      {/* CTA FINAL */}
      <div className="my-6">
        <Link
          to="/mercadolibre/comisiones"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Calcular comisiones automáticamente
        </Link>
      </div>

    </article>
  );
}