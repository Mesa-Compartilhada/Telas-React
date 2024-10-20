import { Route, Routes } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { TIPO_EMPRESA } from "../constants/empresa";
import CadDoacao from "../pages/cadDoacao";
import CadDoadores from "../pages/cadDoadores";
import Dashboard from "../pages/Dashboard";
import Historico from "../pages/Historico";
import Home from "../pages/Home";
import Login from "../pages/login";
import MeusDados from "../pages/MeusDados";

export default function AppRoutes() {
    
  const { user } = AuthData()
  
  return (
    <Routes>
      { <Route path="/" element={<Home />} /> }
      { <Route path="/cadastro" element={!user ? <CadDoadores /> : <Home />} /> }
      { <Route path="/login" element={!user ? <Login /> : <Home />} /> }
      { <Route path="/dashboard" element={ user ? <Dashboard /> : <Home /> }/> }
      { <Route path="/cadastro-doacao" element={ user && TIPO_EMPRESA[user.tipo] === TIPO_EMPRESA.DOADORA ? <CadDoacao /> : <Home /> }/> }
      { <Route path="/meus-dados" element={ user ? <MeusDados />: <Home />}/> }
      { <Route path="/historico" element={ user ? <Historico/> : <Home/>}/>}
    </Routes>
  );
}
