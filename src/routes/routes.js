import { Route, Routes } from "react-router-dom";
import CadDoadores from "../pages/cadDoadores";
import Home from "../pages/Home";
import Login from "../pages/login";
import Dashboard from "../pages/Dashboard";
import CadDoacao from "../pages/cadDoacao";
import { AuthData } from "../auth/AuthWrapper";
import { TIPO_EMPRESA } from "../constants/empresa";

export default function AppRoutes() {
    
  const { user } = AuthData()
  
  return (
    <Routes>
      { <Route path="/" element={<Home />} /> }
      { <Route path="/cadastro" element={!user ? <CadDoadores /> : <Home />} /> }
      { <Route path="/login" element={!user ? <Login /> : <Home />} /> }
      { <Route path="/dashboard" element={ user ? <Dashboard /> : <Home /> }/> }
      { <Route path="/cadastro-doacao" element={ user && TIPO_EMPRESA[user.tipo] === 1 ? <CadDoacao /> : <Home /> }/> }
    </Routes>
  );
}
