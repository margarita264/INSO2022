import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css'
import Logo from '../../assets/logo.JPG'

export const Navbar = () => {
  
  return (
    <div className="Navbar">
      <img src={Logo} alt="logo"/>     
    </div>
  );
};
export default Navbar;
