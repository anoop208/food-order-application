import React from 'react'
import { selectCartItems } from '../../../Redux/cart/cartselector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const FinalMenuItems = ({item,orderList}) => {
  const {name} = item;
  return (
    <div className='finallist'>
       <h2>{name}</h2>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  orderList: selectCartItems,
});

export default connect(mapStateToProps)(FinalMenuItems)