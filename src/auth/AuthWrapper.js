import { createContext, useContext, useState } from "react";
import AppRoutes from "../routes/routes";
import { login } from "../lib/api/empresa";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header_V2.jsx";

export const AuthContext = createContext()
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-mesa-compartilhada")))
  const navigator = useNavigate()

  const loginUser = async (email, password) => {
    const result = await login(email, password);
      if(result) {
        const { id, nome, tipo, email } = result
        const usuario = { id, nome, tipo, email }
        localStorage.setItem("user-mesa-compartilhada", JSON.stringify(usuario))
        setUser(JSON.parse(localStorage.getItem("user-mesa-compartilhada")))
        return { status: true, usuario }
      }
      else {
        return { status: false }
      }
  }

  const logoutUser = () => {
    localStorage.removeItem("user-mesa-compartilhada")
    setUser(null)
    navigator("/")
    return
  }

  return (
    <AuthContext.Provider value={{user: user ?? null, loginUser, logoutUser}}>
      {
        user
        &&
        <Header />
      }
      <AppRoutes />
    </AuthContext.Provider>
  )
}