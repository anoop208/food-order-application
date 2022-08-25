import React, { forwardRef } from 'react'
import FinalMenuItems from '../finalMenuItems'
import './index.css'

const FinalMenu = forwardRef(({listItems},ref) => {
  return (
    <div className='finalmenu' ref={ref}>
        {listItems.map((item)=>(
            <FinalMenuItems key={item.id} item={item}/>
        ))}
        
    </div>
  );
}
);


export default FinalMenu


