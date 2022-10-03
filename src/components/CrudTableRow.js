import React, { useEffect, useState } from "react";
import { helpHttp } from "../components/helpers/helpHttp";
import "./BuscarPago.css";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const [db, setDb] = useState(null);
  const [client, setClient] = useState({});
  const [clientMod, setClientMod] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let { cliente, codigo, monto, tipo, estado, vencimiento, id } = el;

  let api = helpHttp();
  let url = "http://localhost:5000/clientes";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    console.log(data.id);
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  // const getClienteP = (id) => {
  //   let endpoint = `${url}/${id}`;
  //   let options = {
  //     headers: { "content-type": "application/json" },
  //   };

  //   api.get(endpoint, options).then((res) => {
  //     if (!res.err) {
  //       setClient(res);
  //     } else {
  //       setError(res);
  //     }
  //   });
  // };

  useEffect(() => {
    
    //console.log(client);
    //setClientMod(clienteMd);
    console.log(clientMod);
    updateData(clientMod);
   
  }, [clientMod]);

  function todos(id) {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };

    api.get(endpoint, options).then((res) => {
      if (!res.err) {
        const clienteMd = {
          nombre: res.nombre,
          actividad:res.actividad,
          img: res.img,
          estado_pago: "pagado",
          id: res.id,
        };
        setClientMod(clienteMd);
      } else {
        setError(res);
      }
    });
    //getClienteP(id);
    deleteData(id);
  }
 const handleChange = ()=>{}
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
        <button className="pagar" onClick={() => todos(id)}>
          Pagar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
