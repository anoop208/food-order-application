import React from 'react';

import {useNavigate} from 'react-router';
import './index.css';

const CartButton = ({count}) => {
    const Navigate=useNavigate();
  return (
    <div className='cartCount' onClick={()=>Navigate('/OrderPage')}>
       <i className='fas fa-shopping-cart'></i>
    </div>
  );
}

export default CartButton;