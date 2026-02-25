export default function SobreProyecto() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Título */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Sobre el proyecto
          </h1>
          <p className="text-gray-400">
            Herramientas claras para vendedores que quieren tomar mejores decisiones.
          </p>
        </section>

        {/* Qué es */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            ¿Qué es esta plataforma?
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Esta web fue creada para ofrecer simuladores y calculadoras que ayudan a
            vendedores a entender costos, comisiones y ganancias al operar en
            plataformas de comercio digital.
          </p>

          <p className="text-gray-400 mt-4">
            El objetivo es simplificar números que normalmente son confusos,
            permitiendo planificar ventas con mayor seguridad.
          </p>
        </section>

        {/* Propósito */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            Nuestro propósito
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Queremos brindar herramientas gratuitas, accesibles y fáciles de usar
            que ayuden a vendedores nuevos y experimentados a optimizar sus decisiones.
          </p>

          <p className="text-gray-400 mt-4">
            La plataforma evoluciona constantemente para adaptarse a cambios en
            comisiones, reglas y dinámicas del mercado.
          </p>
        </section>

        {/* Transparencia */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            Transparencia
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Esta web es independiente y tiene fines informativos.
            Los cálculos son estimativos y pueden variar según políticas o cambios
            externos.
          </p>

          <p className="text-gray-400 mt-4">
            Siempre recomendamos verificar la información oficial antes de tomar
            decisiones comerciales.
          </p>
        </section>

        {/* Futuro */}
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            Evolución del proyecto
          </h2>

          <p className="text-gray-300 leading-relaxed">
            A futuro se agregarán nuevas herramientas, guías, artículos y recursos
            educativos para mejorar la experiencia del vendedor digital.
          </p>

          <p className="text-gray-400 mt-4">
            El crecimiento del proyecto depende del uso, el feedback de los usuarios
            y el apoyo de la comunidad.
          </p>
        </section>

      </div>

    </main>
  );
}
