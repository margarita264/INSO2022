import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QrReader } from "react-qr-reader";
import "./styles.css";
import { helpHttp } from "../components/helpers/helpHttp";
import Loader from "../components/loader/Loader";
import Message from "../components/loader/Messaje";
import HistorialTable from "../components/Historial/HistorialTable";

export const Asistencia = () => {
  const [data, setData] = useState("No result");
  const [db, setDb] = useState(null);
  const [dbH, setDbH] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cliente, setCliente] = useState({});
  const [diplayTarjeta, setDiplayTarjeta] = useState("none");
  const [diplayQR, setdiplayQR] = useState("block");
  const [asistencia, setAsistencia] = useState({});

  //consulta a la base de datos
  let api = helpHttp();
  let url = "http://localhost:5000/clientes";
  let urlHistorial = "http://localhost:5000/historial";

  //Trae todos lo datos de los clientes
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);
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

  //Trae los datos de historial
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(urlHistorial)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDbH(res);
          setError(null);
        } else {
          setDbH(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [urlHistorial]);

  //desectructura el objeto cliente
  let { nombre, apellido, actividad, img, estado_pago } = cliente;

  //
  useEffect(() => {
    //consulta un cliente
    let endpoint = `${url}/${data}`;
    let options = {
      headers: { "content-type": "application/json" },
    };
    api.get(endpoint, options).then((res) => {
      if (!res.err) {
        setCliente(res);
      } else {
        setError(res);
      }
    });
    if (data !== "No result") {
      setdiplayQR("none");
      setDiplayTarjeta("block");
    }
  }, [data]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(urlHistorial, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDbH([...dbH, res]); //actualiza la bd
      } else {
        setError(res);
      }
    });
  };

  useEffect(() => {
    // obtener la fecha y la hora
    var today = new Date();
    var now = today.toLocaleString();
    console.log(now);
    const initailAsitencia = {
      nombre: nombre,
      actividad: actividad,
      fecha: now,
      id: null,
    };
    setAsistencia(initailAsitencia);
  }, [cliente]);

  //guardar historial de asistencias
  const handleSubmit = (cliente) => {
    console.log(cliente);
    createData(cliente);
  };
  return (
    <div>
      <h1></h1>
      <Row>
        <Col sm={7}>
          <div className="reader" style={{ display: diplayQR }}>
            <QrReader
              className="camara"
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }
                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: "100%" }}
            />
            <p>{data}</p>
            {/* <button onClick={() => getCliente(data)}>mostrar</button> */}
          </div>
          <div className="tarjeta" style={{ display: diplayTarjeta }}>
            <div>
              <img className="perfil" src={img} alt="random" />
            </div>
            <div>
              <p>Nombre:</p>
              <h4 className="nombre">{nombre}</h4>
              <p>Actividad:</p>
              <h4 className="actividad">{actividad}</h4>
              <p>Membresia:</p>
              <h4>1 mes</h4>
            </div>
            <button
              className="boton-deuda"
              onClick={() => handleSubmit(asistencia)}
            >
              Cuoota al dia
            </button>
          </div>
        </Col>
        <Col sm={5}>
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
          {dbH && <HistorialTable data={dbH} />}
        </Col>
      </Row>
    </div>
  );
};
export default Asistencia;
