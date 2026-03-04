import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import MercadoLibre from "./pages/MercadoLibre";
import MercadoPago from "./pages/MercadoPago";
import Noticias from "./pages/Noticias";
import Guias from "./pages/GuiasYRecursos";
import Donaciones from "./pages/Donaciones";

import SobreProyecto from "./pages/SobreProyecto";
import Contacto from "./pages/Contacto";
import FAQ from "./pages/FAQ";

import Privacidad from "./pages/Privacidad";
import AvisoLegal from "./pages/AvisoLegal";
import Terminos from "./pages/Terminos";

import MLComisiones from "./pages/MLComisiones";
import MLEnvios from "./pages/MLEnvios";
import MLCuotas from "./pages/MLCuotas";
import MLMargen from "./pages/MLMargen";
import MLGananciaFinal from "./pages/MLGananciaFinal";
import MLSimuladorCompleto from "./pages/MLSimuladorCompleto";

import RendimientoMercadoPago from "./pages/MPRendimiento";
import CalculadoraComisionesMP from "./pages/MPComisiones";
import CuotasMP from "./pages/MPCuotas";

{/*ARTICULOS*/}
import CuantoCobraMercadoLibre from "./pages/guias/CuantoCobraML";
import CuantoCobraMercadoPago from "./pages/guias/CuantoCobraMP";
import CuantoRindeMercadoPago from "./pages/guias/CuantoRindeMP";
import ComoCalcularComisionesML from "./pages/guias/ComoCalcularComisionesML";
import CuantasVentasNecesito from "./pages/guias/CuantasVentasNecesito";


function App() {
  return (
    
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercadolibre" element={<MercadoLibre />} />
        <Route path="/mercadopago" element={<MercadoPago />} />

        <Route path="/noticias" element={<Noticias />} />

        <Route path="/guias" element={<Guias />} />

        <Route path="/donaciones" element={<Donaciones />} />

        <Route path="/sobreproyecto" element={<SobreProyecto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/terminos" element={<Terminos />} />

        <Route path="/mercadolibre/comisiones" element={<MLComisiones />} />
        <Route path="/mercadolibre/envio" element={<MLEnvios />} />
        <Route path="/mercadolibre/cuotas" element={<MLCuotas />} />
        <Route path="/mercadolibre/margen" element={<MLMargen />} />
        <Route path="/mercadolibre/gananciaFinal" element={<MLGananciaFinal />} />
        <Route path="/mercadolibre/simuladorCompleto" element={<MLSimuladorCompleto />} />

        <Route path="/mercadopago/rendimiento" element={<RendimientoMercadoPago />} />
        <Route path="/mercadopago/comisiones" element={<CalculadoraComisionesMP />} />
        <Route path="/mercadopago/cuotas" element={<CuotasMP />} />

        <Route path="/guias/cuantocobraml" element={<CuantoCobraMercadoLibre />} />
        <Route path="/guias/cuantocobramp" element={<CuantoCobraMercadoPago />} />
        <Route path="/guias/cuantorindemp" element={<CuantoRindeMercadoPago />} />
        <Route path="/guias/comocalcularcomisionesml" element={<ComoCalcularComisionesML />} />
        <Route path="/guias/cuantasventasnecesito" element={<CuantasVentasNecesito />} />


      </Routes>
      
    </Layout>

  );
}

export default App;
