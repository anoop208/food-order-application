import React from 'react'
import MenuItem from './MenuItems'
import './index.css'

const Menu = ({list}) => {
  return (
    <div className="content">
        {list.map((item)=>(
            <MenuItem key={item.id} item={item} />  
        ))}
    </div>
  );
}


export default Menu;