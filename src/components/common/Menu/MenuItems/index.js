import React from 'react'
import './index.css'
import { connect } from 'react-redux';
import AddRemoveButton from '../../AddRemoveButton';
import { createStructuredSelector } from 'reselect';
import { cartAddItem, cartRemoveItem } from '../../../../Redux/cart/cartaction';
import { selectCartItems, selectCartItemsCount } from '../../../../Redux/cart/cartselector';

const MenuItem = ({ item, orderCount, orderList, cartAddItem, cartRemoveItem }) => {
  const { id, name, price, img} = item;
  const Quantity=()=>{
    let quantity=0;
    if(orderCount !==0){
      const itemFound=orderList.find((item)=>item.id === id);
      if(itemFound){
        quantity=itemFound.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className='menu-items'>
      <img src={img} className="item-img" alt="image" />
      <div className="menu-content">
        <p>{name}</p>
        <p>Rs.{price}</p>
      </div>
      <div className='menu-footer'>
        <AddRemoveButton quantity={Quantity()} removeItem={()=>cartRemoveItem(item)} 
        addItem={()=>cartAddItem(item)} />
      </div>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  orderCount: selectCartItemsCount,
  orderList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});
export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);