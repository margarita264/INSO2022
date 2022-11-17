import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.JPG";
import { Col } from "react-bootstrap";
export const Comprobante = ({cliente,codigo,fecha,monto}) => {
  console.log(monto,"iervue");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Col sm={9}>
            <h3>Comprobante de pago realizado</h3>
          </Col>
          <Col>
            <img src={logo} height="30" width="15em" />
          </Col>
        </div>
        <hr></hr>
        <div className="row">
          <Col>
            <div>
              <strong>Fecha de pago</strong>
              <br />
              {fecha} <br />
            </div>
          </Col>
          <Col>
            <strong>Código de Pago</strong>
            <br />
            {codigo}
          </Col>
        </div>
        <hr />
        <div>
          <div className="col-xs-6">
            <h4 className="h3">Cliente</h4>
            <strong>{cliente}</strong>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th scope="col">Descripción</th>
                  <th scope="col">Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Por inscripción a Actividad</td>
                  <td>{monto}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div>
          <div className="col-xs-6">
            <h4 className="h3">Total Abonado </h4>
            <strong>{monto}</strong>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Comprobante;
