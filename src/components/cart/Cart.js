import CartItems from './CartItems';
import { useState } from 'react';

const initialData = [ 
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]



export default function Cart(){
  const [data, setData] = useState(initialData);
  let totalPrice = 0;
  for (let i =0 ; i<data.length ;i++){
    totalPrice += data[i].price * data[i].quantity
  }
  return(
    <>
      <section className="cart-container col col-lg-5 col-sm-12" >
        <h3 className="cart-title">購物籃</h3>
        <CartItems className="product-list col col-12" data={data} setData={setData}/>   
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