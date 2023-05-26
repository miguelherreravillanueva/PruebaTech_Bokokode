import React from 'react'
import './Header.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-izq'>
                    <p>BEJAMAS_</p>
                </div>
                <div className='header-drch'>
                <ShoppingCartOutlined/>
                </div>
            </div>
           
            
        </>
    )
}

export default Header