import React from 'react';
import '../BuscarPago.css'

export const ScaningTable = () => {
  return (
    <div>
    <h3>Historial de Asistencia</h3>
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
        {/* {data.length > 0 ? (
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
        )} */}
      </tbody>
    </table>
  </div>
  )
}
export default ScaningTable;