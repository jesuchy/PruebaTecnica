import React from 'react'
import '../assets/css/Section3.css'
import Ola from "./Ola";
import Img2118 from '../assets/img/Grupo_2118.png'
import Img2137 from '../assets/img/Grupo_2137.png'
import Img222 from '../assets/img/GRUPO_2222png.png'
import Cards from './Cards';


function Section3() {
  return (
    <div className='Section3'>
        <Ola/>
        <div className='CbaezeraSect3'>
            <img src={Img2118} alt="" className='Img2128'/>
            <h1>Nuestro cuartico de San Alejo</h1>
            <img src={Img2137} alt="" className='Img2137'/>
        </div> 
        <div className='container Ts'>
            {/* <img src={Img2223} alt="#" className='ImgBra' /> */}
            <div className='row '>

                <div className='col-md-4 Expesifico'>
                    <button><span>CATEGORIA</span></button>
                    <div className='Back'>
                        <br/>
                        <div>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className='col-md-4 Expesifico'>
                    <button><span>CATEGORIA</span></button>
                    <div className='Back'>
                        <br/>
                        <div>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className='col-md-4 Expesifico'>
                    <button><span>CATEGORIA</span></button>
                    <div className='Back'>
                        <br/>
                        <div>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
            <img src={Img222} className="Img222" alt=''/>
        </div>        
    </div>
  )
}

export default Section3