import React, { useState } from 'react'
import './index.css'
import { createStructuredSelector } from 'reselect'
import { selectCartTotal,selectCartItems } from '../../Redux/cart/cartselector'
import { connect } from 'react-redux'
import items from '../../components/common/Menu/index.json'
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers'

function check(orderList){
 for(var  i=0;i<orderList.length;i++){
    if(orderList[i].name!='Chicken')
    return false;
    // console.log(element.name=='Chicken')
  }
  return true;
 
}

const PromoCode = ({orderTotal,orderList}) => {

const [code,setCode]=useState('')
const[submit,setSubmit]=useState()

const handleInput=(e)=>{
   setCode(e.target.value);
}

const handleSubmit=()=>{
        if(code=='save25'){
        orderTotal-=orderTotal/4;
        setSubmit(orderTotal);
        }
       else if(code=='save50'){
         if(check(orderList))
         {
          orderTotal-=orderTotal/2;
          setSubmit(orderTotal);
         }
         else{
           alert('Only valid for Nonveg')
         }
        }
        else{
          alert('Invalid Code')
        }
    
}
  
  console.log(check(orderList));
  return (
    <>
    <div className='inputForm'>
      <div className='codeinput'>
      <input type="text" className='name' placeholder='Enter Code Here'
      value={code} onChange={handleInput}></input>
      <div>
      <input type="submit" className='Submit' onClick={handleSubmit}/>
      </div>
      </div>
      <h2 className='onsubmit'>Now,You have to Pay Rs.{submit}</h2>
    </div>
    </>
    
  )
}


const mapStateToProps = createStructuredSelector({
  orderTotal: selectCartTotal,
  orderList: selectCartItems
});


export default connect(mapStateToProps)(PromoCode)