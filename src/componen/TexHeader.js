import React from 'react'
import '../assets/css/Header.css'
import ImgBajar from '../assets/img/Grupo_1961.png'
import ImgToxic from '../assets/img/imageedit_4_3420008068.png'
import { Link } from "react-router-dom";

function TexHeader() {
  return (
    <div className='TexHeaderCont container '>
        <div>
            <span className='SubTi'>Las buenas historias tienen unos ingredientes secretos.</span>
        </div>
        <div className='SubTi2'>
            <span>
                Un poco de magia, una pizca de amor, ese toque de la necesaria
                realidad y <b> esa llama que solo se <br/> enciende cuando nos visitas (*GRRRR)</b>
            </span>
        </div>
        <Link to="/Error">
            <button className='BtnHeader'>¿Quieres magia en tu correo?</button>
        </Link>
        <img src={ImgToxic} className="ImgMasNo" alt=""/>
        <div className='BtnBajar'>
            <img src={ImgBajar} alt=""/>
        </div>
    </div>
  )
}

export default TexHeader