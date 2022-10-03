import React, { useEffect, useState, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QrReader } from "react-qr-reader";
import "./styles.css";
import { helpHttp } from "../components/helpers/helpHttp";
import Loader from "../components/loader/Loader";
import Message from "../components/loader/Messaje";
import HistorialTable from "../components/Historial/HistorialTable";
import { Link } from "react-router-dom";
import "../components/Button/Boton.css";

export const Asistencia = () => {
  const [data, setData] = useState("No result");
  const [dbH, setDbH] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cliente, setCliente] = useState({});
  const [diplayTarjeta, setDiplayTarjeta] = useState("none");
  const [diplayQR, setdiplayQR] = useState("block");
  const [asistencia, setAsistencia] = useState({});
  const [cuota, setCuota] = useState("Cuota al dia");
  const [colorButon, setColorButon] = useState("#38E54D");
  const [ruta, setRuta] = useState("/asistencia");
  const [selected, setSelected] = useState("environment");

  //CONTROL CAMARA QR****************************************
  const [isRecording, setIsRecording] = useState(false);
  const ref = useRef(null);

  //rutas para consultar la base de datos
  let api = helpHttp();
  let url = "http://localhost:5000/clientes";
  let urlHistorial = "http://localhost:5000/historial";

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

  //consulta un cliente
  useEffect(() => {
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

  //guarda registro de asistencia en historial
  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(urlHistorial, options).then((res) => {
      if (!res.err) {
        setDbH([...dbH, res]);
      } else {
        setError(res);
      }
    });
  };
  //armado de objeto asistencia para guardar
  useEffect(() => {
    // obtener la fecha y la hora
    var today = new Date();
    var now = today.toLocaleString();
    const initailAsitencia = {
      nombre: nombre,
      actividad: actividad,
      fecha: now,
      id: null,
    };
    setAsistencia(initailAsitencia);

    if (estado_pago == "pendiente") {
      setCuota("Registrar Pago");
      setColorButon("red");
      setRuta("/pagos");
    }
  }, [cliente]);

  //guardar historial de asistencias
  const handleSubmit = (cliente) => {
    if (cuota == "Cuota al dia") {
      createData(cliente);
    }
    setDiplayTarjeta("none");
    setdiplayQR("block");
  };
  const Submit = () => {
    console.log('HOLA');
    setIsRecording(true)
  };
  return (
    <div>
      <Row>
        <Col sm={6} class="text-center">
          <div className="reader" style={{ display: diplayQR}}>
            <button onClick={() => Submit()}>Start Scanning</button>
            <QrReader
              className="camara"
              facingMode={selected}
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }
                if (!!error) {
                  console.info(error);
                }
              }}
              showViewFinder={false}
            />
            
          </div>

          <div className="tarjeta" style={{ display: diplayTarjeta }}>
            <div className="T2"> <div className="foto">
              <img
                className="perfil"
                src={img}
                alt="random"
                class="img-fluid"
              />
            </div>
            <div className="datos">
              <p>Nombre:</p>
              <h4 className="nombre">{nombre}</h4>
              <p>Actividad:</p>
              <h4 className="actividad">{actividad}</h4>
            </div>
            <Link
              className="boton"
              to={ruta}
              style={{ backgroundColor: colorButon }}
              onClick={() => handleSubmit(asistencia)}
            >
              {cuota}
            </Link></div>
           
          </div>
        </Col>
        <Col sm={4}>
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="white"
            />
          )}
          {dbH && <HistorialTable data={dbH} />}
        </Col>
      </Row>
    </div>
  );
};
export default Asistencia;
