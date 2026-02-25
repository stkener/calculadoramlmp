export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
      <h1 className="text-3xl font-bold mb-8 text-white">
        Política de Privacidad
      </h1>

      <p className="mb-6">
        En Calculadora Mercado Libre y Mercado Pago respetamos tu privacidad.
        Esta política explica qué datos recopilamos y cómo los utilizamos.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-white">
        1. Información que recopilamos
      </h2>
      <p className="mb-6">
        Podemos recopilar información técnica como dirección IP, tipo de
        navegador, páginas visitadas y tiempo de permanencia en el sitio.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-white">
        2. Uso de la información
      </h2>
      <p className="mb-6">
        Utilizamos esta información para mejorar el funcionamiento del sitio,
        analizar estadísticas y ofrecer contenido relevante.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-white">
        3. Cookies
      </h2>
      <p className="mb-6">
        Este sitio utiliza cookies técnicas y analíticas para mejorar la
        experiencia de navegación. Podés aceptar o rechazar las cookies desde
        el banner correspondiente.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-white">
        4. Contacto
      </h2>
      <p>
        Si tenés preguntas sobre esta política, podés contactarnos a través
        del formulario disponible en el sitio.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-white">
        5. Gestión y desactivación de cookies
      </h2>
      <p className="mb-6">
        El usuario puede configurar su navegador para rechazar o eliminar cookies en
        cualquier momento. A continuación se incluyen enlaces a la documentación
        oficial de los navegadores más utilizados:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
            <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
            >
                Google Chrome
            </a>
        </li>

        <li>
            <a
                href="https://support.mozilla.org/es/kb/Borrar%20cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
            >
                Mozilla Firefox
            </a>
        </li>

        <li>
            <a
                href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
            >
                Microsoft Edge
            </a>
        </li>

        <li>
            <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
            >
                Safari
            </a>
        </li>
      </ul>

        <p>
            La desactivación de cookies puede afectar el correcto funcionamiento de
            algunas secciones del sitio.
        </p>
    </div>
  );
}
