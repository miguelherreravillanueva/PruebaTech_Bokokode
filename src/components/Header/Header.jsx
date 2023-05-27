import React from 'react'
import './Header.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-izq'>
                    <Link to="/" className='link'>BEJAMAS_</Link>
                </div>
                <div className='header-drch'>
                    <Link to="*">
                        <ShoppingCartOutlined style={{ fontSize: '24px', color: 'black' }} />
                    </Link>
                </div>
            </div>


        </>
    )
}

export default Header