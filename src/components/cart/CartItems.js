import CartItem from './CartItem';


export default function CartItems({data}){
  const itemList =data.map(itemData =>
    <CartItem
      className="product-container col col-12"
      itemData={itemData}
      key={itemData.id}
    />
  )
  return(
    <>
      <section className="product-list col col-12" data-total-price={0}>
        {itemList}
        </section>
      </>
  );
}