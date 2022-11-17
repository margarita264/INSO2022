import React from "react";
import { Container, Content } from "./styles";
import {
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
  FaRegCalendarAlt,
  FaChartBar,
  FaArrowLeft,
} from "react-icons/fa";

import SidebarItem from "../SidebarItem";

export const Sidebar = () => {
  return (
    <Container sidebar>
      <Content style={{paddingTop: 40}}>
        <SidebarItem Icon={FaHome} Text="Inicio" Route="/" />
        <SidebarItem Icon={FaUserAlt} Text="Registrar" Route="/registrar" />
        <SidebarItem
          Icon={FaRegCalendarAlt}
          Text="Calendario"
          Route="/calendario"
        />
        <SidebarItem Icon={FaEnvelope} Text="Pagos" Route="/pagos" />
        <SidebarItem
          Icon={FaChartBar}
          Text="Estadistica"
          Route="/estadisticas"
        />
        <SidebarItem
          Icon={FaIdCardAlt}
          Text="Registrar Asistencia"
          Route="/asistencia"
        />
        <SidebarItem Icon={FaArrowLeft} Text="Salir" Route="/login"/>
      </Content>
    </Container>
  );
};
