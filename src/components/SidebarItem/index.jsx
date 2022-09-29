import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import "./Sidebarltm.css";

const SidebarItem = ({ Icon, Text, Route }) => {
  return (
    <Container>
      <Link className="button" to={Route}>
        <Icon />
        {Text}
      </Link>
    </Container>
  );
};

export default SidebarItem;
