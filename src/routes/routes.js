import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadDoadores from "../pages/cadDoadores";
import CadRecebedores from "../pages/cadRecebedores";
import Home from "../pages/Home";
import Login from "../pages/login";
import PagInicial from "../pages/pagInicial";
import Dashboard from "../pages/Dashboard";
import CadDoacao from "../pages/cadDoacao";
export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagInicial />} />
          <Route path="/cadastro" element={<CadDoadores />} />
          <Route path="/CadRecebedores" element={<CadRecebedores />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/CadDoacao" element={<CadDoacao />}/>
        </Routes>
      </BrowserRouter>
    );
}
