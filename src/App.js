import "./App.css";
import VistaAdmin from "./Pages/VistaAdmin";
import Login from "./Pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Rout from "./components/Routes/Rout";
import Navb from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import Contenedor from "./components/Contenedor/Contenedor";

function App() {
  return (
    <>
      <Navb />
      <Contenedor />
      <Footer />
    </>
  );
}

export default App;
