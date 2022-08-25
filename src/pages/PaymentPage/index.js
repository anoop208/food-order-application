import React, { useEffect, useState } from 'react'
import './index.css'
import { selectCartItemsCount,selectCartItems} from '../../Redux/cart/cartselector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import FinalMenu from './finalMenu'


const PaymentPage = ({orderCount,orderList}) => {



  
  //  const orderid=getRandomNumbers();
  
  // const orderid=Math.floor((Math.random() * 1000000) + 1);
  // localStorage.setItem('UniqueId',orderid)

 
  // const orderid=Math.floor((Math.random() * 1000000) + 1);
  
  const orderid=orderCount*19999+1;
  
  return (
    <div >
      <p className='header'>Payment Successfull!</p>
      <div className='lastcontent'>
        <div className='blank'>Order Details</div>
        <div className='orderlist'>
         <FinalMenu listItems={orderList}/>
        <h2 className='count'>Quantity: {orderCount}</h2>
        <h2 className='uid'> OrderId: {orderid}</h2>
        </div>
      </div>
        
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  orderCount: selectCartItemsCount,
  orderList: selectCartItems,

});

export default connect(mapStateToProps)(PaymentPage)