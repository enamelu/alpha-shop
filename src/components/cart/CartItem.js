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
                  <svg className="product-action minus">
                    <use xlinkHref="#svg-icon-minus" />
                  </svg>
                  <span className="product-count" />
                  <svg className="product-action plus">
                    <use xlinkHref="#svg-icon-plus" />
                  </svg>
                </div>
              </div>
              <div className="price" >{`$${itemData.price}`}</div>
            </div>
          </div>
  );}