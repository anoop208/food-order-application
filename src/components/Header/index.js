import React from 'react'
import './index.css'
import foodorderImg from './foodorder.jpg'

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <img src={foodorderImg} alt="image" className='header-image' />
                <h1 className='title'>FoodOrderApp</h1>
            </div>
        </header>
    );
}

export default Header;