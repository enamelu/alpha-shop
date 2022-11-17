import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';

export default function CartItems(){
  const {data} = useContext(CartContext)
  const itemList =data.map((itemData, index) => (
      <CartItem
        className="product-container col col-12"
        key={itemData.id}
        index={index}
      />
    )
  )
  return(
    <>
      <section className="product-list col col-12">
        {itemList}
        </section>
      </>
  );
}