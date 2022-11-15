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
  const [pagoModificado, setpagoModificado] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagoId, setPagoId] = useState({});
  const [diplayPagos, setDiplayPagos] = useState("block");
  const [diplayBusqueda, setDiplayBusqueda] = useState("none");

  let api = helpHttp();
  let url = "http://localhost:3001/api/pagos/pendientes";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res.listaPagos);
          console.log(res.listaPagos);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url, pagoModificado]);
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

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Esta seguro que desea cancelar el pago seleccionado?`
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
      <Row className="tablaPago">
        <Col sm={4}>
          <BuscarPago
            createData={createData}
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
                pagoModificado={pagoModificado}
                setpagoModificado={setpagoModificado}
                diplayPagos={diplayPagos}
                setDiplayPagos={setDiplayPagos}
                setDiplayBusqueda={setDiplayBusqueda}
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
                  pagoModificado={pagoModificado}
                  setpagoModificado={setpagoModificado}
                  diplayPagos={diplayPagos}
                  setDiplayPagos={setDiplayPagos}
                  setDiplayBusqueda={setDiplayBusqueda}
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
