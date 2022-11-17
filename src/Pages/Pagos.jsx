import React, { useEffect, useState } from "react";

import { helpHttp } from "../components/helpers/helpHttp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BuscarPago from "../components/BuscarPago";
import CrudTable from "../components/CrudTable";
import Loader from "../components/loader/Loader";
import Message from "../components/loader/Messaje";
import CrudTableRow from "../components/CrudTableRow";
import VistaComprobante from "../components/Comprobante/modal";
import styled from "styled-components";
import Comprobante from "../components/Comprobante/Comprobante";
import ComprobantePdf from "../components/Comprobante/ComprobantePdf";
import {PDFViewer } from "@react-pdf/renderer";

const Pagos = () => {
  const [db, setDb] = useState(null);
  const [pagoModificado, setpagoModificado] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagoId, setPagoId] = useState({});
  const [diplayPagos, setDiplayPagos] = useState("block");
  const [diplayBusqueda, setDiplayBusqueda] = useState("none");
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [atualizarPago, seActualizarPago] = useState({});
  const [verPdf, setVerPdf] = useState(true);
  const [bontonComprobante, setBontonComprobante] = useState("Ver pdf");

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

  const updatePago = (datos) => {
    console.log("modificando pago");
    if (window.confirm(`Se le enviará un correo al cliente`)) {
      let endpoint = `http://localhost:3001/api/pagos/${datos.id}`;
      const data = {
        estado: "pagado",
      };
      let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
      api.put(endpoint, options).then((res) => {
        if (!res.err) {
          if (pagoModificado === false) {
            setpagoModificado(true);
          } else {
            setpagoModificado(false);
          }
        } else {
          console.log("ocurrio un error: ", res);
        }
      });
    }
    if (diplayPagos === "none") {
      setDiplayBusqueda("none");
      setDiplayPagos("block");
    }
  };

  const getPago = (codigo) => {
    db.map((el) => {
      if (el.codigo == codigo) {
        setPagoId(el);
      }
    });
  };
  const confirmarPago = (atualizarPago) => {
    updatePago(atualizarPago);
    cambiarEstadoModal1(!estadoModal1);
  };
  const CCC = () => {
    if (bontonComprobante === "Ver pdf") {
      setBontonComprobante("cerrar pdf");
    } else {
      setBontonComprobante("Ver pdf");
    }
  };
  useEffect(() => {
    setVerPdf(!verPdf);
  }, [bontonComprobante]);

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
                estadoModal1={estadoModal1}
                cambiarEstadoModal1={cambiarEstadoModal1}
                seActualizarPago={seActualizarPago}
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
                  estadoModal1={estadoModal1}
                  cambiarEstadoModal1={cambiarEstadoModal1}
                  seActualizarPago={seActualizarPago}
                />
              </tbody>
            </table>
          </div>
        </Col>
        <VistaComprobante
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo={"Detalle de pago para enviar por mail"}
          verPdf={verPdf}
        >
          <Contenido>
            {verPdf ? (
              <PDFViewer style={{ width: "83%", height: "50vh" }}>
                <ComprobantePdf
                  cliente={atualizarPago.cliente}
                  codigo={atualizarPago.codigo}
                  fecha={atualizarPago.fecha}
                  monto={atualizarPago.monto}
                />
              </PDFViewer>
            ) : (
              <Comprobante
                cliente={atualizarPago.cliente}
                codigo={atualizarPago.codigo}
                fecha={atualizarPago.fecha}
                monto={atualizarPago.monto}
              />
            )}
            <div className="btn-group">
              <Boton onClick={() => confirmarPago(atualizarPago)}>
                Realizar Pago
              </Boton>
              <Boton onClick={() => CCC()}>{bontonComprobante}</Boton>
            </div>
          </Contenido>
        </VistaComprobante>
      </Row>
    </div>
  );
};

export default Pagos;

const Boton = styled.button`
  text-align: center;
  padding: 10px 10px;
  width: 120px;
  border-radius: 80px;
  color: black;
  border: none;
  background: #e2d784;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  display: inline-block;
  &:hover {
    background: #05595b;
    color: #ffff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
