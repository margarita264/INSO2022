import React from "react";
import CrudTableRow from "./HistorialTableRow";
import "../BuscarPago.css";

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Historial de asistencias</h3>
      <table>
        <thead>
          <tr>
            <th className="encabezado">ID</th>
            <th className="encabezado">Nombre</th>
            <th className="encabezado">Actividad</th>
            <th className="encabezado">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el._id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
