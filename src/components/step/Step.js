import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Step({step}){
  if (step === 1) {
    // address phase 
    return <Step1 />
  } else if (step === 2){
    // shipping phase 
    return <Step2 />
  } else {
    // credit-card phase 
    return <Step3 />
  }
}