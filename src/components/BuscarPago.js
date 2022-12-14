import React, { useState, useEffect } from "react";
import "./BuscarPago.css";

const initailForm = {
  name: "",
};

export const BuscarPago = ({
  dataToEdit,
  setDataToEdit,
  getPago,
  setDiplayPagos,
  setDiplayBusqueda,
}) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      alert("No ingresó ningún código");
      return;
    }
    console.log(form.name);
    getPago(form.name);
    setDiplayBusqueda("block");
    setDiplayPagos("none")
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
    setDiplayBusqueda("none");
    setDiplayPagos("block")
  };
  return (
    <div>
      <h3>
        {dataToEdit ? "Buscar pago por Código" : "Buscar pago por Código"}
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          size="40"
          type="text"
          name="name"
          placeholder="Ingrese código de pago por favor"
          onChange={handleChange}
          value={form.name}
        />
        <h1></h1>
        <h1></h1>
        <input className="buscar" type="submit" value="Buscar" />
        <input
          className="buscar"
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />
      </form>
    </div>
  );
};
export default BuscarPago;
