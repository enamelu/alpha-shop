 import minus from '../../icons/minus.svg';
  import plus from '../../icons/plus.svg';

 
 export default function CartItem({itemData}){
  return(
 <div
            className="product-container col col-12"
            data-count={0}
            data-price={3999}
          >
            <img
              className="img-container"
              src={itemData.img} alt=""/>
            <div className="product-info">
              <div className="product-name">{itemData.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <img src={minus} className="product-action minus" alt="minus" />
                  <span className="product-count" >{itemData.quantity}</span>
                  <img src={plus} className="product-action plus" alt="plus" />
                </div>
              </div>
              <div className="price" >{`$${itemData.price}`}</div>
            </div>
          </div>
  );}