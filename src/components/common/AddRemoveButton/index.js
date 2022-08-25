import React from 'react'
import './index.css'

const AddRemoveButton = ({quantity,addItem,removeItem}) => {
  return (
    <div className='addRemovebtn'>
      {quantity !==0 ? (
        <div className='positive'>
          <i className="fa fa-minus" area-hidden='true' onClick={removeItem}></i>
          <span className='quantity'> {quantity}</span>
          <i className="fa fa-plus" area-hidden='true' onClick={addItem}></i>
        </div>
      ):(<div className='negative' onClick={addItem}>
            <span className='addBtn'>ADD</span>
            <i className="fa fa-plus" area-hidden='true'></i>
        </div>
        )}
    </div>
  );
}

export default AddRemoveButton;