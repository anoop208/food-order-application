import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/common/Menu';
import CartButton from '../../components/common/CartButton';
import items from '../../components/common/Menu/index.json'

const Home = () => {
 
  
  return (
    <div>
        <Header/>
        <Menu list={items} />
        <CartButton/>
    </div>
  );
}

export default Home;