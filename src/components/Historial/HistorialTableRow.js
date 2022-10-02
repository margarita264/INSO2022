import React from "react";
import "../BuscarPago.css";

const CrudTableRow = ({ el}) => {
  let { id,nombre,actividad,fecha} = el;

  return (
    <tr>
      <th className="item">{id}</th>
      <th className="item">{nombre}</th>
      <th className="item">{actividad}</th>
      <th className="item">{fecha}</th>
    </tr>
  );
};

export default CrudTableRow;
