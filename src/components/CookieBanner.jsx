import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
    setTimeout(() => setShow(true), 0);
  }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-6xl bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow-lg z-50">
  
  <div className="flex flex-col gap-4">

    <p className="text-sm text-gray-300">
      Este sitio utiliza cookies técnicas, analíticas y de terceros para
      mejorar la experiencia de navegación, analizar el uso del sitio y mostrar
      contenido relevante. Al continuar navegando aceptás el uso de cookies.
    </p>

    {/*<a
      href="/privacidad"
      className="underline text-orange-400 hover:text-orange-300 text-sm"
    >
      Leer Política de Privacidad
    </a>*/}

    <Link
      to="/privacidad"
      className="underline text-orange-400 hover:text-orange-300 text-sm"
    >
      Leer Política de Privacidad
    </Link>

    <button
      onClick={acceptCookies}
      className="self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition"
    >
      Aceptar
    </button>

  </div>

</div>

  );
}
