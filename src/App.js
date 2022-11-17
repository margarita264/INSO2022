import React,{useState} from 'react';
import "./App.css";
import VistaAdmin from "./Pages/VistaAdmin";
import Login from "./Pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Rout from "./components/Routes/Rout";
import Navb from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import Contenedor from "./components/Contenedor/Contenedor";
import Login from "./components/Login/Login";
import Actividades from './Pages/Actividades';
import Rout from './components/Routes/Rout';

function App() {
  const [cliente, seCliente] = useState(false);
  return (
    <>
      <Navb />
      <Contenedor />
      <Footer />
    </>
  );
}

export default App;
