import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Contactos</h4>
            <li>342-420-6969</li>
            <li>Moscow, Russia</li>
            <li>123 Streeet South North</li>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Actividades</h4>
            <ul>
              <li>Factor F</li>
              <li>Gym Adultos</li>
              <li>Power</li>
              <li>Ritmos</li>
              <li>Ubound</li>
              <li>X55</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Entrenadores</h4>
            <ul>
              <li>Ariel</li>
              <li>Sil</li>
              <li>Martin</li>
              <li>Edith</li>
            </ul>
          </div>
        </div>
        {/* <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default footer;
