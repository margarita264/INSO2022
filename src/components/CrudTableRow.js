import React from "react";
import "./BuscarPago.css";

const CrudTableRow = ({
  el,
  estadoModal1,
  cambiarEstadoModal1,
  seActualizarPago,
}) => {
  let { cliente, codigo, monto, tipo, estado, vencimiento, id } = el;
  const pagoOp = (codigo, id) => {
    cambiarEstadoModal1(!estadoModal1);
    const fecha = new Date();
    const datosPago = {
      id: id,
      codigo: codigo,
      cliente: cliente,
      monto: monto,
      fecha: fecha.toLocaleDateString(),
    };
    seActualizarPago(datosPago);
  };

  const handleChange = () => {};
  return (
    <tr>
      <th className="item">{cliente}</th>
      <th className="item">{codigo}</th>
      <th className="item">{monto}</th>
      <th className="item">{tipo}</th>
      <th className="item">{estado}</th>
      <th className="item">{vencimiento}</th>
      <td>
        <button className="editar" onClick={() => handleChange()}>
          Editar
        </button>
        <button
          className="pagar"
          onClick={() => pagoOp(codigo, id, cliente, monto)}
        >
          Pagar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
