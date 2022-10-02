import React, { useState, useEffect } from "react";
import "./BuscarPago.css";

const initailForm = {
  name:"",
  constellation: "",
  id: null,
};

export const BuscarPago = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  getPago,
}) => {
  const [form, setForm] = useState(initailForm);
  const [buscar, setBuscar] = useState(false);

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
    console.log(form);
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
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
