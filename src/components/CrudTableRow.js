import React from "react";
import { helpHttp } from "../components/helpers/helpHttp";
import "./BuscarPago.css";

const CrudTableRow = ({
  el,
  pagoModificado,
  setpagoModificado,
  diplayPagos,
  setDiplayPagos,
  setDiplayBusqueda,
}) => {
  let { cliente, codigo, monto, tipo, estado, vencimiento, id } = el;

  let api = helpHttp();

  const updatePago = (codigo, id) => {
    console.log(codigo);
    let isDelete = window.confirm(
      `¿Esta seguro que desea cancelar el pago con código: ${codigo}?`
    );
    let endpoint = `http://localhost:3001/api/pagos/${id}`;
    const data = {
      estado: "pagado",
    };
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        if (pagoModificado === false) {
          setpagoModificado(true);
        } else {
          setpagoModificado(false);
        }
      } else {
        console.log("ocurrio un error: ", res);
      }
    });
    if (diplayPagos === "none") {
      setDiplayBusqueda("none");
      setDiplayPagos("block");
    }
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
        <button className="pagar" onClick={() => updatePago(codigo, id)}>
          Pagar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
