import { useContext } from "react";
import { CreditCardContext } from "../../Context/CreditCardContext";
import { CartContext } from "../../Context/CartContext";

export default function ProgressControl({step, setStep}){
  const {creditCardData} = useContext(CreditCardContext);
  const {data} = useContext(CartContext);
  let totalPrice = 0;    ////這裡同時運算傳給console.log，主要總額計算在Cart.js並顯示於用戶購物車
  for (let i =0 ; i<data.length ;i++){
    totalPrice += data[i].price * data[i].quantity
  }

  function handleClickNext(e) {
    e.stopPropagation()
    setStep(step + 1)  
  } 
  function handleClickPrivious(e) {
    e.stopPropagation()
    setStep(step - 1)  
  }
  function handleClickConfirm(e) {
    e.stopPropagation()
    console.log(`name:${creditCardData.name}, cardNumber:${creditCardData.cardNumber}, exp:${creditCardData.exp}, CVC:${creditCardData.CVC}, TotalPrice: ${totalPrice} `)
  }
  let progressControlButtons;
  if(step === 1) {
    progressControlButtons = (
      <section className="button-group col col-12" data-phase="address">
        <button className="next" onClick={handleClickNext}> 
          下一步
          <svg className="cursor-point">
            <use xlinkHref="#svg-icon-right-arrow" />
          </svg>
        </button>
      </section>
    );
  } else if (step === 2){
    progressControlButtons = (
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev" onClick={handleClickPrivious}>
          <svg className="cursor-point">
            <use xlinkHref="#svg-icon-left-arrow" />
          </svg>
          上一步
        </button>
        <button className="next" onClick={handleClickNext}>
          下一步
          <svg className="cursor-point">
            <use xlinkHref="#svg-icon-right-arrow" />
          </svg>
        </button>
      </section>
    );
  } else {
    progressControlButtons = (
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={handleClickPrivious}>
          <svg className="cursor-point">
            <use xlinkHref="#svg-icon-left-arrow" />
          </svg>
          上一步
        </button>
        <button className="next" onClick={handleClickConfirm}>確認下單</button>
      </section>
    );
  }
  return(
    <section className="progress-control-container col col-lg-6 col-sm-12">
    {progressControlButtons}
    </section>
  );
}