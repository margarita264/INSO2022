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
            <h3>Infomacion</h3>
            <ul>
              <li>GYM Extreme Fitness</li>
              <li>Direccion: Av. Rio de la Plata 83, 4612 Palpala, Jujuy</li>
              <li>Telefono: 03885072611</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h3>Actividades</h3>
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
            <h3>Entrenadores</h3>
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
