import React from "react";
import "../assets/css/Header.css";
import Bloc from "./Bloc";
import ConHeader from "./ConHeader";
import TexHeader from "./TexHeader";



function Header() {
  return (
    <div className="Header">
      <div className="SubHeader">
        <Bloc/>
        <ConHeader/>
        <TexHeader/>
      </div>
      
    </div>
  );
}

export default Header;
