import React from "react";
import CrudTableRow from "./CrudTableRow";
import "./BuscarPago.css"

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Pagos Pendientes</h3>
      <table>
        <thead>
          <tr>
            <th className="encabezado">Cliente</th>
            <th className="encabezado">Codigo</th>
            <th className="encabezado">monto</th>
            <th className="encabezado">tipo</th>
            <th className="encabezado">Estado</th>
            <th className="encabezado">Vencimiento</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
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
