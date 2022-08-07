import React from 'react'
import ImgFormulaSe from "../assets/img/Grupo_1969.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

function ConHeader() {
  return (
    <div className='container'>
        
        <img src={ImgFormulaSe}  alt="" className='ImgQuien'/>
        <div className="Icono"></div>
        <Link to="/Proceso">
          <button className="BotonInicio">
            <span> ADVERTENCIA: SOLO PARA CURIOSOS</span>
          </button>
        </Link>
        
        
    </div>
  )
}

export default ConHeader