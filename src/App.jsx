
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Contact from "./pages/Contact";
import Actualite from "./pages/Actualite";
import About from "./pages/About";
import Sustainability from "./pages/Sustainability";
import StrategicExportRoute from "./pages/StrategicExportRoute";
import Products from "./pages/Products";
import DriedPineapple from "./pages/DriedPineapple";
import Devis from './pages/Devis';
import Quality from './pages/Quality';
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    let lenis;
    let frame;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
      });

      const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/strategic-export-route" element={<StrategicExportRoute />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ananas-seche" element={<DriedPineapple />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/quality" element={<Quality />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
