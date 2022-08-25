import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import img from './cartEmpty.png'
import './index.css'
const EmptyCart = () => {
  const Navigate=useNavigate()
  return (
    <div className='empty-cart'>
      <img src={img} alt="image" className='cartimg'/>
      <div className='backbtn'>
      <button className='btn' onClick={()=>Navigate('/')}>Go Back</button>
      </div>
    </div>
  )
}

export default EmptyCart