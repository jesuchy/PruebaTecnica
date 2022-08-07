import React from "react";
import "../assets/css/Footer.css";
import Img23517 from "../assets/img/Grupo_23517.png";
import Img0989009 from "../assets//img/Grupo_0989009.png";
import Img1 from '../assets/img/Red_1.png'
import Img2 from '../assets/img/Red_2.png'
import Img3 from '../assets/img/Red_3.png'
import Img4 from '../assets/img/Red_4.png'
import Img2499 from '../assets/img/Grupo_2499.png'
import Img454435 from '../assets/img/Grupo_454435.png'
import Img9878 from '../assets/img/Grupo_9878.png'
import FnSection from "./FnSection";

function Footer() {
  return (
    <div className="Footer">
      <FnSection/>
      <div className="row">
        <div className="col-md-4">
          <div className="COL1">
            <img src={Img23517} alt="" />
          </div>
          
        </div>
        <div className="col-md-4 COL2">
          <img src={Img0989009} alt="" className="Img0989009" />
          <h5 className="Text1">¿Necesitas ayuda?</h5>
          <div className="Span">
            <p>Contactar a un humano</p>
            <p>Los términos y condiciones de esta relación <img src={Img2499} alt="" className="Img2499" /></p> 
            <p>Las políticas de nuestro amor (shhh, son las de privacidad) <img src={Img454435} alt="" className="Img454435"/> </p>
            <p>Conozcámonos más <img src={Img9878} alt="" className="Img9878" /> </p>
          </div>
          
          <h5 className="Text2">¡Hagamos Match!</h5>
          <img src={Img1} alt="" className="Img1" />
          <img src={Img2} alt="" className="Img2" />
          <img src={Img3} alt="" className="Img3"  />
          <img src={Img4} alt="" className="Img4"/>
        </div>
        <div className="col-md-4 COL3">
          <form>
            <br/>
            <h5>Tú, nosotros y tu correo...</h5>
            <p className="T">La magia se materializa y nuestro amor también</p>
            <input className="Campos" placeholder="El nombre de alguien" />
            <input className="Campos" placeholder="uncorreocualquiera@gmail,com" />
            <div className="InforForm">
              <input className="Chek" type="checkbox" checked></input>
              <p>Aceptas las políticas de este amor y las condiciones de esta relación.</p>
            </div>
            <button className="ButonFor" type="button">Formalicemos lo nuestro</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
