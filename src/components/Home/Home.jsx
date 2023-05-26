import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
import imagen from "../../assets/pexels-evgeny-tchebotarev-2187304 (1) 1.png"
import imagen1 from "../../assets/Rectangle 10.png"
import imagen2 from "../../assets/Rectangle 10.1.png"
import imagen3 from "../../assets/Rectangle 10.2.png"

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='cont-izq'>
                    <p>Samurai King Resting</p>
                </div>
                <div className='cont-drch'>
                    <button>ADD TO CART</button>
                </div>
            </div>
            <div>
                <img src={imagen} alt="" className="imagen" />
            </div>
            <div className='container1'>
                <div className='div-izquierda'>
                    <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.</p>
                </div>
                <div className='div-derecha'>
                    <Link to="products" className='link'>People also buy</Link>
                    <figure className='img'>
                        <img src={imagen1} alt="" />
                        <figcaption>Door</figcaption>
                    </figure>
                    {/* <figure className='img'>
                        <img src={imagen2} alt="" />
                        <figcaption>Window</figcaption>
                    </figure>
                    <figure className='img'>
                        <img src={imagen3} alt="" />
                        <figcaption>Egg Balloon</figcaption>
                    </figure> */}
                    </div>
            </div>
        </>
    )
}

export default Home 