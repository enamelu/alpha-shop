import { createContext } from "react"

export const creditCardDefault = {    //這裡預設不輸入值，底部文字已經寫在placeholder中
  name: "" ,
  cardNumber: "" ,
  exp: "",
  CVC: "",
}

export const CreditCardContext = createContext(creditCardDefault); 