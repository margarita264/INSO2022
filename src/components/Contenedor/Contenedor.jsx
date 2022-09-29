import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Sidebar, ListSidebar } from "../../components/Sidebar/index";
import Rout from "../Routes/Rout";
import "./Contenedor.css";

function Contenedor() {
  return (
    <div className="vista1">
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <Rout />
        </Col>
      </Row>
    </div>
  );
}

export default Contenedor;
