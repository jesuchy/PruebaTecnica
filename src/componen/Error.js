import React from "react";
import "../assets/css/Error.css";
import Img12345 from "../assets/img/Grupo_12345.png";
import Img3453 from "../assets/img/Grupo_3453.png";
import Img3454 from '../assets/img/Grupo_3454.png';
import Img0357 from '../assets/img/Grupo_0357.png';
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="ErrorCon">
      <button className="Icon">
        <img src={Img12345} alt="" />
      </button>
      <div className="BacGra">
        
      <h1 className="TextError404"><b>ERROR <span>404</span>    </b></h1>
        <div className="Conf">
            <button className="AlguiS">
                <span>
                    ¡Alguien abrió la puerta que no era!
                </span>
            </button>
            <p>
            No te preocupes, en este laboratorio la  curiosidad no es pecado.<b> Aquí
            tienes la <br/> llave de la puerta principal.</b>
            </p>
            <div className="BtnSalir">
              <Link to="/">
                  <button>
                    <span>
                        ¡Sáquenme de aquí!
                    </span>
                </button>
              </Link>

            </div>

            <img src={Img0357} alt="" className="Img0357"/>
            <img src={Img3454} alt="" className="Img3454" />
        </div>
        <div>
            <img src={Img3453} alt="" className="Img3453" />
        </div>
      </div>
    </div>
  );
}

export default Error;
