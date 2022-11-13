import CartItem from './CartItem';

const data = [ 
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
export default function CartItems(){
  return(
    <>
      <section className="product-list col col-12" data-total-price={0}>
          <CartItem
            className="product-container col col-12"
            itemData={data[0]}
          />
          <CartItem
            className="product-container col col-12"
            itemData={data[1]}
          />
        </section>
      </>
  );
}