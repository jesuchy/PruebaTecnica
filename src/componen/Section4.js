import React from 'react'
import '../assets/css/Section4.css'
import Img2719 from '../assets/img/Trazado_2719.png'
import Img2197 from '../assets/img/Grupo_2197.png'
import Img2202 from '../assets/img/Grupo_2202.png'
import { Link } from "react-router-dom";

function Section4() {
  return (
    <div className='Section4'>
        <img src={Img2719} alt="" className='Img2719' />
        <h1>ETIQUETAS</h1>
        <img src={Img2197} alt="" className='Img2197' />
        <div className='contenedo2'>
            <Link to="/Error" className='Cursor'>
                <div className='BotonesSec4 '>
                    <button className='BotonS'>
                        <span>
                            Seguros
                        </span>
                    </button>
                    <button className='BotonS'>
                        <span>
                            Familia
                        </span>
                    </button>
                    <button className='BotonS'>
                        <span>
                            Entretenimiento
                        </span>
                    </button>
                    <button className='BotonS'>
                        <span>
                            Curiosidades
                        </span>
                    </button>
                    <button className='Boton'>
                        <span>
                            Enprendimiento
                        </span>
                    </button>
                </div>
            </Link>
            <Link to="/Error" className='Cursor'>
                <div className='BotonesSec4'>
                    <button className='Boton'>
                        <span>
                            Aun que usted no lo crea
                        </span>
                    </button>
                    <button className='Boton'>
                        <span>
                            Viajes
                        </span>
                    </button>
                    <button className='Boton'>
                        <span>
                            Tecnología
                        </span>
                    </button>
                    <button className='Boton'>
                        <span>
                            Medio Ambiente
                        </span>
                    </button>
                    <button className='Boton'>
                        <span>
                            Ciencias
                        </span>
                    </button>
                </div>
            </Link>
                
            <img src={Img2202} alt="" className='Img2202'/>
        </div>
            
    </div>
  )
}

export default Section4