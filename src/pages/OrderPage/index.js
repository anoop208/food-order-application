
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Menu from '../../components/common/Menu'

import EmptyCart from '../../components/EmptyCart'
import App from '../../components/Modal'
import PromoCode from '../../components/promoCode'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/cart/cartselector'
import './index.css'
// import {items} from '../../components/common/Menu/index.json'

const OrderPage = ({ orderCount, orderList, orderTotal }) => {
 
  
  return (
    <>
      {orderCount === 0 ? (
        <EmptyCart />) : (
        <div className='order-list'>
          <div className='order-header'>
            <h1>Your Order Details</h1>
          </div>
          <div className='order-list'>
            <Menu list={orderList} />
          </div>
          <hr/>
          <h2 className='total-amount'>Total Rs.{orderTotal}</h2>
          <div className='promocode'>
            <PromoCode />
            </div>
          <App/>
        </div>
      )}
    </>

  )
}

const mapStateToProps = createStructuredSelector({
  orderCount: selectCartItemsCount,
  orderList: selectCartItems,
  orderTotal: selectCartTotal,
});

export default connect(mapStateToProps)(OrderPage);