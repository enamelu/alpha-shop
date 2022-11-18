import { createContext } from "react"

export const creditCardDefault = { 
  name: "John Doe" ,
  cardNumber: "1111 2222 3333 4444" ,
  exp: "MM/YY",
  CVC: "123",
}

export const CreditCardContext = createContext(creditCardDefault); 