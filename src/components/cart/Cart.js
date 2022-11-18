import CartItems from './CartItems';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function Cart(){  //這裡是主要總額顯示於購物車，於ProgressControl中的是同時運算傳給console.log
  const {data} = useContext(CartContext);   
  let totalPrice = 0;
  for (let i =0 ; i<data.length ;i++){
    totalPrice += data[i].price * data[i].quantity
  }
  return(
    <>
      <section className="cart-container col col-lg-5 col-sm-12" >
        <h3 className="cart-title">購物籃</h3>
        <CartItems className="product-list col col-12" />   
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div> 
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">{totalPrice}</div> 
        </section>
      </section>
   </>
  );
}