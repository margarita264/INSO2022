import React from "react";
import "../BuscarPago.css";

const CrudTableRow = ({ el }) => {
  let { _id, nombreCliente, actividad, fecha_asistencia } = el;

  return (
    <tr>
      <th className="item">{_id}</th>
      <th className="item">{nombreCliente}</th>
      <th className="item">{actividad}</th>
      <th className="item">{fecha_asistencia}</th>
    </tr>
  );
};

export default CrudTableRow;
