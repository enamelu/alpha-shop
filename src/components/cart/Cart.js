import CartItems from './CartItems';
export default function Cart(){
  return(
    <>
      <section className="cart-container col col-lg-5 col-sm-12" >
        <h3 className="cart-title">購物籃</h3>
        <CartItems className="product-list col col-12" data-total-price={0} />   
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price" />
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price" />
        </section>
      </section>
   </>
  );
}