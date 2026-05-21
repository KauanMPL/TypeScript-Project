import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return <>
    <Navbar />
    <Outlet />
    
  </>
}

export default App;