import React from "react";
import "../assets/css/Cards.css";
import Img780908 from "../assets/img/Gupo_780908.png";

function Cards() {
  return (
    <div className="card Tamaño">
      <img src={Img780908} className="card-img-top" alt="..." />
      <hr/>
      <div className="card-body">
        <h5 className="card-title">
          Lorem ipsum dolor
          <br /> sit amet, consect
        </h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tinciLorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tinci
        </p>
      </div>
    </div>
  );
}

export default Cards;
