import React from "react";
import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "../SidebarItem";

export const Sidebar = () => {
  return (
    <Container sidebar>
      <Content>
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
      </Content>
    </Container>
  );
};

export const ListSidebar = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registrar">Registrar</Link>
        </li>
      </ol>
    </nav>
  );
};
