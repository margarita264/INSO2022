import React from "react";
import { Route, Routes } from "react-router-dom";

import Asistencia from "../../Pages/Asistencia";
import Calendario from "../../Pages/Calendario";
import Estadisticas from "../../Pages/Estadisticas";
import Home from "../../Pages/Home";
import Pagos from "../../Pages/Pagos";
import Registrar from "../../Pages/Registrar";

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route exact path="/calendario" element={<Calendario />} />
      <Route exact path="/pagos" element={<Pagos/>} />
      <Route exact path="/estadisticas" element={<Estadisticas/>} />
      <Route exact path="/asistencia" element={<Asistencia/>} />
    </Routes>
  );
};
export default Rout;
