import React from "react";
import "../assets/css/Section2.css";
import Img2103 from "../assets/img/Grupo_2103.png";
import Cards from "./Cards";


function Section2() {
    return (

    <div className="Section2 row">
        <div className="col-md-12 mt-5">
            <img src={Img2103} alt="" className="Img2103" />
            <div className="Sectio2cO">
                <h1>Lo Que Más Se Vendió</h1>
                <h5 className="h5">
                    Bueno, no vendimos nada… Pero fueron esas <b>fórmulas top </b><br/> que le
                    arreglaron el día a más de uno
                </h5>
            </div>
        </div>
        <div className="Contenedor">
            <div className="row">
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
            </div>
            
        </div>
        
    </div>
    
  );
}

export default Section2;
