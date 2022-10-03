import React, { useEffect, useState } from "react";
import { helpHttp } from "../components/helpers/helpHttp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BuscarPago from "../components/BuscarPago";
import CrudTable from "../components/CrudTable";
import Loader from "../components/loader/Loader";
import Message from "../components/loader/Messaje";
import CrudTableRow from "../components/CrudTableRow";

const Pagos = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagoId, setPagoId] = useState({});
  const [diplayPagos, setDiplayPagos] = useState("block");
  const [diplayBusqueda, setDiplayBusqueda] = useState("none");

  let api = helpHttp();
  let url = "http://localhost:5000/pagos";

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

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]); //actualiza la bd
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id 0004?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // useEffect(() => {
  //   let endpoint = `${url}/${pagoId}`;
  //   let options = {
  //     headers: { "content-type": "application/json" },
  //   };
  //   api.get(endpoint, options).then((res) => {
  //     if (!res.err) {
  //       setPago(res);
  //     } else {
  //       setError(res);
  //     }
  //   });

  // }, [pagoId]);

  const getPago = (codigo) => {
    db.map((el) => {
      if (el.codigo == codigo) {
        setPagoId(el);
      }
    });
  };

  useEffect(() => {
    console.log(pagoId);
  }, [pagoId]);

  return (
    <div>
      <Row>
        <Col sm={4}>
          <BuscarPago
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            getPago={getPago}
            setDiplayPagos={setDiplayPagos}
            setDiplayBusqueda={setDiplayBusqueda}
          />
        </Col>
        <Col sm={8}>
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
          {db && (
            <div style={{ display: diplayPagos }}>
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            </div>
          )}
          <div style={{ display: diplayBusqueda }}>
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
                <CrudTableRow
                  key={pagoId.id}
                  el={pagoId}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Pagos;
