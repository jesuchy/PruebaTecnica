import React from "react";
import "../assets/css/Proceso.css";
import Img12345 from '../assets/img/Grupo_12345.png'
import Img2623 from "../assets/img/Grupo_2623.png";
import Img3455 from "../assets/img/Grupo_3455.png";
import { Link } from "react-router-dom";

function Proceso() {
  return (
    <div className="ErrorBody">
      <Link to="/" className="LinHome">
        <button>
            <img src={Img12345} alt="" />
        </button>
        <div className="Master">
          
          <div className="Contenido">
              <br/>
            <h1>¡YA CASI SE <br/> SECA EL PISO!</h1>
            <p>
              Danos unos minutitos más, mientras el<br/> bichito del aseo termina de
              dejar bien pispo<br/> el laboratorio.<b> Tú sabes, primero muertos que <br/> mal
              trapeado.</b>
            </p>
            <div >
              <img src={Img2623} alt="" className="Img2623" />
              <img src={Img3455} alt="" className="Img3455" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Proceso;
