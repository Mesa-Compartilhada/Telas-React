import { createContext, useContext, useEffect, useState } from "react";
import AppRoutes from "../routes/routes";
import { getMe, login } from "../lib/api/empresa";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header_V2.jsx";
import HeaderHome from "../components/Header_V1.jsx/index.jsx";

export const AuthContext = createContext()
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const navigator = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const restoreUser = async () => {
    const token = localStorage.getItem("jwt")
    if(token && !user) {
      try {
        const empresa = await getMe()
        setUser(empresa.user)
      } catch(error) {
        console.log("Falha ao recuperar informações do usuário", error)
        localStorage.removeItem("jwt")
      }
    }
    setLoading(false)
  }

  useEffect(() => {  
    restoreUser()
  }, [])

  const loginUser = async (email, password) => {
    const result = await login(email, password);
      if(result.status) {
        localStorage.setItem("jwt", result.token)
        try {
          const empresa = await getMe()
          restoreUser()
          return { status: true, user: empresa.user }
        } catch(error) {
          console.log("Falha ao recuperar informações do usuário", error)
          localStorage.removeItem("jwt")
          return { status: false, user: null }
        }
      }
      else {
        return { status: false, user: null }
      }
  }

  const logoutUser = () => {
    localStorage.removeItem("jwt")
    setUser(null)
    navigator("/")
    return
  }

  if(loading) {
    return (
      <div></div>
    )
  }

  return (
    <AuthContext.Provider value={{user: user, loginUser, logoutUser}}>
      {
        user && pathname !== "/"
        &&
        <Header />
      }
      {
        pathname == "/"
        &&
        <HeaderHome />
      }
      <AppRoutes />
    </AuthContext.Provider>
  )
}