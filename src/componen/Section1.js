import React from "react";
import "../assets/css/Section1.css";
import Img2065 from "../assets/img/Grupo_2065.png";
import Img3327 from '../assets/img/Grupo_3327V2.png'
import Img7866 from '../assets/img/Grupo_7866.png'
import { Link } from "react-router-dom";

function Section1() {
  return (
    <div className="Section1 container">
      <div className="Padre">
        <img src={Img2065} alt="" />

        <h1>La fórmula de la semana</h1>
        <h5>Tú tranqui que ya fue analizada, testeada y aprobada</h5>
        <button>
          <span>TECNOLOGÍA</span>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 CajaDiv"></div>
          <div className="col-md-6 Sec1Sun">
            <h3 className="">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing
            </h3>
            <div className="DivTex">
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br/>
                nonummy nibh euismod tinciLorem ipsum dolor sit amet,<br/> consectetuer
                adipiscing elit.
              </span>
            </div>
            <Link to="/Proceso">
              <button>
                <span>¡Leer Ahora!</span>
              </button>
            </Link>
            
            <div>
              <img src={Img7866} className="Img7866" alt="" />
              <img src={Img3327} className="Img3327" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
