import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagInicial from "../pages/pagInicial";
import CadDoadores from "../pages/cadDoadores";
import CadRecebedores from "../pages/cadRecebedores";
import Login from "../pages/login";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagInicial />} />
                <Route path="/cadastro" element={<CadDoadores />} />
                <Route path="/CadRecebedores" element={<CadRecebedores />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}