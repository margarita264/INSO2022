import React from "react";
import { Route, Routes } from "react-router-dom";
import Actividades from "../../Pages/Actividades";
import Cliente from "../../Pages/Cliente";
import Asistencia from "../../Pages/Asistencia";
import Calendario from "../../Pages/Calendario";
import Estadisticas from "../../Pages/Estadisticas";
import Home from "../../Pages/Home";
import Pagos from "../../Pages/Pagos";
import Registrar from "../../Pages/Registrar";
import Login from "../../Pages/Login/Login";
import Admin from "../../Pages/VistaAdmin";
import Deporte from "../../Pages/Deporte";

const Rout = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/vistaAdmin" element={<Admin />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route exact path="/calendario" element={<Calendario />} />
      <Route exact path="/pagos" element={<Pagos/>} />
      <Route exact path="/estadisticas" element={<Estadisticas/>} />
      <Route exact path="/asistencia" element={<Asistencia/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/actividades" element={<Actividades/>} />
      <Route exact path="/cliente" element={<Cliente/>} />
      <Route exact path="/deporte" element={<Deporte/>} />
    </Routes>
  );
};
export default Rout;
