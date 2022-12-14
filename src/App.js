import { useState } from 'react';

import ProgressControl from "./components/step/ProgressControl";
import Step from "./components/step/Step.js";

import Step2 from "./components/step/Step2";


import StepProgress from "./components/step/StepProgress";
import Cart from "./components/cart/Cart";

import logo from "./icons/alphalogo.svg";
import alphaShop from "./icons/alphaShop.svg";
import search from "./icons/search.svg";
import cart from "./icons/cart.svg";
import moon from "./icons/moon.svg";

import facebook from "./icons/facebook.svg";
import whatsapp from "./icons/whatsapp.svg";
import instagram from "./icons/instagram.svg";
import { CartContext, initialData } from './Context/CartContext';
import { CreditCardContext, creditCardDefault } from './Context/CreditCardContext';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [creditCardData, setCreditCardData] = useState(creditCardDefault)

  return (
    <CreditCardContext.Provider value={{creditCardData, setCreditCardData}}>
    <CartContext.Provider value={{data, setData}}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ALPHA Shop</title>
      <link rel="stylesheet" href="./dist/main.css" />
      <div id="svg-icons-container" style={{ display: "none" }} />
      {/* header */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <svg className="icon-toggle cursor-point">
              <use xlinkHref="#svg-icon-toggle" />
            </svg>
          </label>
          {/* navbar-menu */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ??????
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ??????
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ????????????
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ????????????
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ????????????
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* search */}
              <li className="nav-item">
                <img
                  src={search}
                  className="icon-logo cursor-point"
                  alt="search"
                />
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-search" />
                </svg>
              </li>
              {/* cart */}
              <li className="nav-item">
                <img src={cart} className="icon-logo cursor-point" alt="cart" />
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-cart" />
                </svg>
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* moon */}
                <img src={moon} className="icon-logo cursor-point" alt="moon" />
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-moon" />
                </svg>
                {/* sun */}
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-sun" />
                </svg>
              </li>
            </ul>
          </nav>
          {/* logo */}
          <a className="header-logo-container" href="#">
            <img src={logo} className="icon-logo cursor-point" alt="logo" />
            <img
              src={alphaShop}
              className="icon-logo cursor-point"
              alt="logo"
            />
            <svg className="icon-logo cursor-point">
              <use xlinkHref="#svg-icon-logo" />
            </svg>
          </a>
        </div>
      </header>
      {/* main */}
      <main className="site-main">
        <div className="main-container">
          {/* register */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={step}
            // data-total-price={0}
          >
            {/* register-title */}
            <StepProgress />
            {/* register-form */}
            <section className="form-container col col-12">
             {/* <Step step={Step2}/> */}
             <Step step={step}/>
            </section>
          </section>
          {/* cart */}
          <Cart className="cart-container col col-lg-5 col-sm-12" />
          {/* progress-control */}
          <ProgressControl step={step} setStep={setStep} />
        </div>
      </main>
      {/* footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo-container">
            <img src={logo} className="icon-logo" alt="icon-logo" />
            <img
              src={alphaShop}
              className="icon-logo cursor-point"
              alt="logo"
            />
            <svg className="icon-logo">
              <use xlinkHref="#svg-icon-logo" />
            </svg>
          </div>
          <section className="footer-section">
            <h2 className="section-title">????????????</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                ????????????
              </a>
              <a className="page-link" href="#">
                ???????????????
              </a>
              <a className="page-link" href="#">
                ????????????
              </a>
              <a className="page-link" href="#">
                FAQ
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">????????????</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                ????????????
              </a>
              <a className="page-link" href="#">
                ????????????
              </a>
              <a className="page-link" href="#">
                Press kit
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">??????</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                ???????????????
              </a>
              <a className="page-link" href="#">
                Cookie
              </a>
              <a className="page-link" href="#">
                GDPR
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">?????? ALPHA Shop</h2>
            <div className="section-content">
              <div className="tel-info">+886 02123-45678</div>
              <div className="social-icon-group">
                <img
                  src={facebook}
                  className="social-icon cursor-point"
                  alt="facebook"
                />
                <svg className="social-icon cursor-point">
                  <use xlinkHref="#svg-icon-facebook" />
                </svg>
                <img
                  src={instagram}
                  className="social-icon cursor-point"
                  alt="instagram"
                />
                <svg className="social-icon cursor-point">
                  <use xlinkHref="#svg-icon-instagram" />
                </svg>
                <img
                  src={whatsapp}
                  className="social-icon cursor-point"
                  alt="whatsapp"
                />
                <svg className="social-icon cursor-point">
                  <use xlinkHref="#svg-icon-whatsapp" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </CartContext.Provider>
    </CreditCardContext.Provider>
  );
}

export default App;
