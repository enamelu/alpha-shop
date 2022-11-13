export default function CartItems(){
  return(
    <>
<section className="product-list col col-12" data-total-price={0}>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={3999}
          >
            <img
              className="img-container"
              src={require('./images/product-1.jpg')} alt=""/>
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
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
              <div className="price" />
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={1299}
          >
            <img
              className="img-container"
              src={require('./images/product-2.jpg')} alt=""/>
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
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
              <div className="price" />
            </div>
          </div>
        </section>
      </>
  );
}