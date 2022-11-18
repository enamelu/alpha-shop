import { useContext } from "react";
import { CreditCardContext } from "../../Context/CreditCardContext";


export default function Step3(){
  const {creditCardData, setCreditCardData} = useContext(CreditCardContext);

  function handleNameChange(e) {
    e.stopPropagation()
    setCreditCardData({
      ...creditCardData,
      name : e.target.value
    })
  }
  function handleCardNumberChange(e) {
    e.stopPropagation()
    setCreditCardData({
      ...creditCardData,
      cardNumber: e.target.value
    })
  }
  function handleExpChange(e) {
    e.stopPropagation()
    setCreditCardData({
      ...creditCardData,
      exp: e.target.value
    })
  }

  function handleCVCChange(e) {
    e.stopPropagation()
    setCreditCardData({
      ...creditCardData,
      CVC: e.target.value
    })
  }
  return(
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input value={creditCardData.name} onChange={handleNameChange}type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input  value={creditCardData.cardNumber} onChange={handleCardNumberChange} type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input value={creditCardData.exp} onChange={handleExpChange} type="text" placeholder="MM/YY" />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input value={creditCardData.CVC} onChange={handleCVCChange}  type="text" placeholder={123} />
          </div>
        </div>
      </section>
    </form>
  );

}