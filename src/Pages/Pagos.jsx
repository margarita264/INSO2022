import React, { useState } from "react";
import BuscarPago from "../components/BuscarPago";
import CrudTable from "../components/CrudTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/BuscarPago.css"

const initialDb = [
  {
    id: 1,
    cliente: "Zerpa Micaela",
    codigo: "0001",
    monto: "3000",
    tipo: "efectivo",
    estado: "pendiente",
    vencimiento: "20/09/2020",
  },
  {
    id: 2,
    cliente: "Valeriano Brian",
    codigo: "0002",
    monto: "3500",
    tipo: "efectivo",
    estado: "pendiente",
    vencimiento: "20/09/2020",
  },
  {
    id: 3,
    cliente: "Zerpa Margarita",
    codigo: "0003",
    monto: "2500",
    tipo: "efectivo",
    estado: "pendiente",
    vencimiento: "25/09/2020",
  },
  {
    id: 4,
    cliente: "Carlos Alvarado",
    codigo: "0004",
    monto: "4000",
    tipo: "efectivo",
    estado: "pendiente",
    vencimiento: "25/09/2020",
  },
  {
    id: 5,
    cliente: "Ruiz Jose",
    codigo: "0005",
    monto: "3000",
    tipo: "efectivo",
    estado: "pendiente",
    vencimiento: "26/09/2020",
  },
];

const Pagos = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro que desea cancelar el pago con N° de Código '0004'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h1></h1>
      <div className="row" >
        <div className="col-6 col-md-4" >
          <BuscarPago
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </div>
        <div className="col">
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagos;
