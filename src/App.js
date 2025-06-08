import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper";
import { ToastContainer } from "react-toastify";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
      <AuthWrapper />
    </BrowserRouter>
  );
}
export default App;
