import React from "react";
import Footer from "../components/footer/footer";
import Navb from "../components/Navbar/navbar";
import Contenedor from "../components/Contenedor/Contenedor"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Sidebar} from "../components/Sidebar/index";
import Rout from "../components/Routes/Rout";
//import "./Contenedor.css";

const VistaAdmin = () => {
  return (
    <>
      <Navb />
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <Rout />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default VistaAdmin;
