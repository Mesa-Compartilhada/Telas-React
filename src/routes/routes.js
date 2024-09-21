import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadDoadores from "../pages/cadDoadores";
import CadRecebedores from "../pages/cadRecebedores";
import Home from "../pages/Home";
import Login from "../pages/login";
import PagInicial from "../pages/pagInicial";

export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagInicial />} />
          <Route path="/cadastro" element={<CadDoadores />} />
          <Route path="/CadRecebedores" element={<CadRecebedores />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
}
