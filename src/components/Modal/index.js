import React, { useState } from 'react'
import { Modal } from 'pretty-modal'
import './index.css'

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [number, setNumber] = useState();
    const [cardname, setcardName] = useState();
    const [cvv, setCvv] = useState();
    const [month,setMonth]=useState();
    const [year,setYear]=useState();
    

   
    function handleSubmit(e) {
      e.preventDefault();
        if(number== null||cardname==null||cvv==null||month==null||year==null){
            alert("Please Fill all Details");
        }
        else{
            const expiryDate=new Date(year+'-'+month+'-01');
             
            if(!/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(number) ){
               alert("Invalid Card Number")
            }

            else if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(cardname)){
                alert("Invalid Card Name")
            }

           else if(!(/^\d{3}$/).test(cvv) ){
              alert("Invalid Cvv")
            }

            else if ( expiryDate<new Date())
            {
            alert("invalid Expiry Date")
            }

           else{
              
              window.location.href='/PaymentPage'
             
            }
       
     } 
    
    }

    function handleNumber(e) {
        setNumber(e.target.value);
    }

    function handleName(e) {
        setcardName(e.target.value);
    }

    function handleCvv(e) {
        setCvv(e.target.value);
    }

    function handleMonth(e){
        setMonth(e.target.value);
    }

    function handleYear(e){
        setYear(e.target.value);
    }


    return (
        <div className="App">
            <button className='paybtn'
                onClick={() => {
                    setIsOpen(true)
                }}
            >
                Pay Now
            </button>
            <Modal
                onClose={() => {
                    setIsOpen(false)
                }}
                open={isOpen}
            >
                <div className='form'>

                    <div className='cardnum'>Card Number:<br />
                        <input type="number" className='inputfield' onChange={handleNumber}></input>
                    </div>
                    <div className='cardname'>Card Holder Name:<br />
                        <input type="text" className='inputfield' onChange={handleName}></input>
                    </div>
                    <div className='cardcvv'>CVV:<br />
                        <input type="number" className='inputfield' onChange={handleCvv}></input>
                    </div>
                    <div className='carddate'>Expiry Date:<br />
                        <select className='inputfield' onChange={handleMonth}>
                            <option></option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select className='inputfield' onChange={handleYear}>
                             <option></option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                        </select>
                    </div>
                    <button className='submitbtn' onClick={(event)=>handleSubmit(event)}>Pay</button>

                </div>

                <button className='closebtn'
                    onClick={() => {
                        setIsOpen(false)
                    }}
                >
                    Close
                </button>


            </Modal>
        </div>
    )
}

export default App