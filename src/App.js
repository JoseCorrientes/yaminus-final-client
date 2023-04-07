import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/landing/Landing";
import { Encrypt } from "./components/encryptmenu/Encrypt";
import { ProductGrid } from "./components/productmenu/productgrid/ProductGrid";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/encrypt"} element={<Encrypt />} />
          <Route path={"/product"} element={<ProductGrid />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
