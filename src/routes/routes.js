import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadDoadores from "../pages/cadDoadores";
import CadRecebedores from "../pages/cadRecebedores";
import Home from "../pages/Home";
import Login from "../pages/login";
import Dashboard from "../pages/Dashboard";
import CadDoacao from "../pages/cadDoacao";
export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadDoadores />} />
          <Route path="/CadRecebedores" element={<CadRecebedores />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/cadastrar-doacao" element={<CadDoacao />}/>
        </Routes>
      </BrowserRouter>
    );
}
