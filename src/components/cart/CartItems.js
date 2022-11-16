import CartItem from './CartItem';


export default function CartItems({data, setData}){
  const itemList =data.map((itemData, index) => (
      <CartItem
        className="product-container col col-12"
        setData={setData}
        data={data}
        itemData={itemData}
        key={itemData.id}
        index={index}
      />
    )
  )
  return(
    <>
      <section className="product-list col col-12" data-total-price={0}>
        {itemList}
        </section>
      </>
  );
}