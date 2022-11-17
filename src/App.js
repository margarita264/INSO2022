import React, { useState } from "react";
import "./App.css";
import VistaAdmin from "./Pages/VistaAdmin";
import { Route, Routes } from "react-router-dom";
import Rout from "./components/Routes/Rout";
import Navb from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import Contenedor from "./components/Contenedor/Contenedor";
import Login from "./components/Login/Login.jsx";
import Actividades from "./Pages/Actividades";
//import Rout from './components/Routes/Rout';

function App() {
  const [LoginE, setLogin] = useState(true);
  return (
    // <>
    //   {LoginE ? (
    //     <Login LoginE={LoginE} setLogin={setLogin} />
    //   ) : (
        <>
          <Navb />
          <Contenedor />
          <Footer />
        </>
    //   )}
    // </>
  );
}

export default App;
