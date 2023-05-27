import React, { useState } from 'react'
import "./Photography.css";
import { DownOutlined } from '@ant-design/icons';
import imagen4 from "../../assets/Rectangle 2.png"
import imagen5 from "../../assets/Rectangle 10.2.png"
import imagen6 from "../../assets/Rectangle 10.2.png"
import imagen7 from "../../assets/Rectangle 2.4.png"
import imagen8 from "../../assets/Rectangle 2.5.png"
import imagen9 from "../../assets/Rectangle 2.5.png"
import { Link } from 'react-router-dom';

const Photography = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const handleCheckboxChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };
    return (
        <>
            <div className='photo-container'>
                <div className='photo-container-izq'>
                    <p><strong>Photography</strong> / Premium photos</p>
                </div>
                <div className='photo-container-drch'>
                    <p>Short By <strong>Price</strong>
                    <Link to="*"><DownOutlined style={{ color: 'black' }}  /></Link>
                     </p>
                </div>
            </div>
            <div className="container2">
                <div className="left-div">
                    <h4>Category</h4>
                    <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                        <li>
                            <input
                                type="checkbox"
                                id="item1"
                                name="item1"
                                checked={checkedItems.item1 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item1">People</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="item2"
                                name="item2"
                                checked={checkedItems.item2 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item2">Premium</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="item3"
                                name="item3"
                                checked={checkedItems.item3 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item3">Pets</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="item3"
                                name="item3"
                                checked={checkedItems.item3 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item3">Food</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="item3"
                                name="item3"
                                checked={checkedItems.item3 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item3">Landmarks</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="item3"
                                name="item3"
                                checked={checkedItems.item3 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item3">Cities</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="item3"
                                name="item3"
                                checked={checkedItems.item3 || false}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="item3">Nature</label>
                        </li>
                    </ul>
                </div>
                <div className="right-div">
                    <figure className='image'>
                        <img src={imagen4} alt="" style={{ width: 200, height: 300 }} />
                        <figcaption className='img-fig'>Red Bench</figcaption>
                        <p>$3.89</p>
                    </figure>
                    <figure className='image'>
                        <img src={imagen5} alt="" style={{ width: 200, height: 300 }} />
                        <figcaption className='img-fig'>Egg Balloon</figcaption>
                        <p>$93.89</p>
                    </figure>
                    <figure className='image'>
                        <img src={imagen6} alt="" style={{ width: 200, height: 300 }} />
                        <figcaption className='img-fig'>Egg Balloon</figcaption>
                        <p>$93.89</p>
                    </figure>
                    <figure className='image'>
                        <img src={imagen7} alt="" style={{ width: 200, height: 300 }} />
                        <figcaption className='img-fig'>Man</figcaption>
                        <p>$100.00</p>
                    </figure>
                    <figure className='image'>
                        <img src={imagen8} alt="" style={{ width: 200, height: 300 }} />
                        <figcaption className='img-fig'>Architecture</figcaption>
                        <p>$101.00</p>
                    </figure>
                    <figure className='image'>
                        <img src={imagen9} alt="" style={{ width: 200, height: 300 }} />
                        <figcaption className='img-fig'>Architecture</figcaption>
                        <p>$101.00</p>
                    </figure>
                </div>
            </div>

        </>
    )
}

export default Photography