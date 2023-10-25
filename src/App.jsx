import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Detalle from "./pages/Detalle";

const App = () => {
  return (
    <>
      <Navbar />
      {/* '....' */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
      fotter
    </>
  );
};

export default App;
