import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
import imagen from "../../assets/pexels-evgeny-tchebotarev-2187304 (1) 1.png"
import imagen1 from "../../assets/Rectangle 10.png"
import imagen2 from "../../assets/Rectangle 10.1.png"
import imagen3 from "../../assets/Rectangle 10.2.png"
import { Button } from 'antd';
import Photography from '../Photography/Photography';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='cont-izq'>
                    <p>Samurai King Resting</p>
                </div>
                <div className='cont-drch'>
                    <Button style={{
                        borderRadius: "0",
                        background: "black",
                        color: "white",
                    }}><Link to="*">ADD TO CART</Link>
                    </Button>
                </div>
            </div>
            <div>
                <img src={imagen} alt="" className="imagen" />
            </div>
            <div className='container1'>
                <div className='div-izquierda'>
                    <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.
                    So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.
                    </p>
                </div>
                <div className='div-derecha'>
                    <Link to="*" className='link1'> People also buy</Link>
                    <div className='image-container'>
                        <figure className='image'>
                            <img src={imagen1} alt="" />
                            <figcaption className='img-fig'>Door</figcaption>
                            <p>$93.89</p>
                        </figure>
                        <figure className='image'>
                            <img src={imagen2} alt="" />
                            <figcaption className='img-fig'>Window</figcaption>
                            <p>$93.89</p>
                        </figure>
                        <figure className='image'>
                            <img src={imagen3} alt="" />
                            <figcaption className='img-fig'>Egg Balloon</figcaption>
                            <p>$93.89</p>
                        </figure>
                    </div>
                </div>

            </div>
            <div>
                <Photography/>
            </div>
        </>
    )
}

export default Home 