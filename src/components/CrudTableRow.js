import React from "react";
import "./BuscarPago.css"

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { cliente,codigo,monto,tipo,estado,vencimiento, id } = el;

  return (
    <tr>
      <th className="item">{cliente}</th>
      <th className="item">{codigo}</th>
      <th className="item">{monto}</th>
      <th className="item">{tipo}</th>
      <th className="item">{estado}</th>
      <th className="item">{vencimiento}</th>
      <td>
        <button className="editar" onClick={() => setDataToEdit(el)}>Editar</button>
        <button className="pagar" onClick={() => deleteData(id)}>Pagar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
