// import logo from './logo.svg';
// import './App.css';

import style from './App.module.scss'
import Step3 from './components/step/Step3';
import StepProgress from './components/step/StepProgress';

function App() {
  return (
    <>
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
              男款
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              女款
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              最新消息
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              客製商品
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              聯絡我們
            </a>
          </li>
        </ul>
        <ul className="nav-list site-action-list">
          {/* search */}
          <li className="nav-item">
            <svg className="nav-icon cursor-point">
              <use xlinkHref="#svg-icon-search" />
            </svg>
          </li>
          {/* cart */}
          <li className="nav-item">
            <svg className="nav-icon cursor-point">
              <use xlinkHref="#svg-icon-cart" />
            </svg>
          </li>
          <li id="theme-toggle" className="nav-item">
            {/* moon */}
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
        data-phase={1}
        data-total-price={0}
      >
        {/* register-title */}
        <StepProgress/>
        {/* register-form */}
        <section className="form-container col col-12">
          {/* address phase */}
          <form className="col col-12" data-phase="address">
            <h3 className="form-title">寄送地址</h3>
            <section className="form-body col col-12">
              <div className="col col-12">
                <div className="input-group input-w-lg-2 input-w-sm-s1">
                  <div className="input-label">稱謂</div>
                  <div className="select-container">
                    <select>
                      <option value="mr" selected="">
                        先生
                      </option>
                      <option value="ms">女士</option>
                      <option value="mx">不明</option>
                    </select>
                  </div>
                </div>
                <div className="input-group input-w-lg-4 input-w-sm-s2">
                  <div className="input-label">姓名</div>
                  <input type="text" placeholder="請輸入姓名" />
                </div>
              </div>
              <div className="col col-12">
                <div className="input-group input-w-lg-3 input-w-sm-full">
                  <div className="input-label">電話</div>
                  <input type="tel" placeholder="請輸入行動電話" />
                </div>
                <div className="input-group input-w-lg-3 input-w-sm-full">
                  <div className="input-label">Email</div>
                  <input type="email" placeholder="請輸入電子郵件" />
                </div>
              </div>
              <div className="col col-12">
                <div className="input-group input-w-lg-2 input-w-sm-full">
                  <div className="input-label">縣市</div>
                  <div className="select-container">
                    <select required="">
                      <option value="">請選擇縣市</option>
                      <option value="KLU">基隆市</option>
                      <option value="TPH">新北市</option>
                      <option value="TPE">臺北市</option>
                      <option value="TYC">桃園市</option>
                      <option value="HSH">新竹縣</option>
                      <option value="HSC">新竹市</option>
                      <option value="MAC">苗栗市</option>
                      <option value="MAL">苗栗縣</option>
                      <option value="TXG">臺中市</option>
                      <option value="CWH">彰化縣</option>
                      <option value="CWS">彰化市</option>
                      <option value="NTC">南投市</option>
                      <option value="NTO">南投縣</option>
                      <option value="YLH">雲林縣</option>
                      <option value="CHY">嘉義縣</option>
                      <option value="CYI">嘉義市</option>
                      <option value="TNN">臺南市</option>
                      <option value="KHH">高雄市</option>
                      <option value="IUH">屏東縣</option>
                      <option value="PTS">屏東市</option>
                      <option value="ILN">宜蘭縣</option>
                      <option value="ILC">宜蘭市</option>
                      <option value="HWA">花蓮縣</option>
                      <option value="HWC">花蓮市</option>
                      <option value="TTC">臺東市</option>
                      <option value="TTT">臺東縣</option>
                      <option value="PEH">澎湖縣</option>
                      <option value="KMN">金門縣</option>
                      <option value="LNN">連江縣</option>
                    </select>
                  </div>
                </div>
                <div className="input-group input-w-lg-4 input-w-sm-full">
                  <div className="input-label">地址</div>
                  <input type="text" placeholder="請輸入地址" />
                </div>
              </div>
            </section>
          </form>
          {/* shipping phase */}
          <form className="col col-12" data-phase="shipping">
            <h3 className="form-title">運送方式</h3>
            <section className="form-body col col-12">
              <label className="radio-group col col-12" data-price={0}>
                <input
                  id="shipping-standard"
                  type="radio"
                  name="shipping"
                  defaultChecked=""
                />
                <div className="radio-info">
                  <div className="col col-12">
                    <div className="text">標準運送</div>
                    <div className="price" />
                  </div>
                  <div className="period col col-12">約 3~7 個工作天</div>
                </div>
                <div className="radio-box-border" />
              </label>
              <label className="radio-group col col-12" data-price={500}>
                <input id="shipping-dhl" type="radio" name="shipping" />
                <div className="radio-info">
                  <div className="col col-12">
                    <div className="text">DHL 貨運</div>
                    <div className="price" />
                  </div>
                  <div className="period col col-12">48 小時內送達</div>
                </div>
                <div className="radio-box-border" />
              </label>
            </section>
          </form>
          {/* credit-card phase */}
        <Step3/>

        </section>
      </section>
      {/* cart */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <div
            className="product-container col col-12"
            data-count={0}
            data-price={3999}
          >
            <img
              className="img-container"
              src="./public/images/product-1.jpg"
            />
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
              src="./public/images/product-2.jpg"
            />
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
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price" />
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price" />
        </section>
      </section>
      {/* progress-control */}
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase="address">
          <button className="next">
            下一步
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-right-arrow" />
            </svg>
          </button>
        </section>
        <section className="button-group col col-12" data-phase="shipping">
          <button className="prev">
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-left-arrow" />
            </svg>
            上一步
          </button>
          <button className="next">
            下一步
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-right-arrow" />
            </svg>
          </button>
        </section>
        <section className="button-group col col-12" data-phase="credit-card">
          <button className="prev">
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-left-arrow" />
            </svg>
            上一步
          </button>
          <button className="next">確認下單</button>
        </section>
      </section>
    </div>
  </main>
  {/* footer */}
  <footer className="site-footer">
    <div className="footer-container">
      <div className="footer-logo-container">
        <svg className="icon-logo">
          <use xlinkHref="#svg-icon-logo" />
        </svg>
      </div>
      <section className="footer-section">
        <h2 className="section-title">客戶服務</h2>
        <div className="section-content">
          <a className="page-link" href="#">
            運送說明
          </a>
          <a className="page-link" href="#">
            退換貨相關
          </a>
          <a className="page-link" href="#">
            付款資訊
          </a>
          <a className="page-link" href="#">
            FAQ
          </a>
        </div>
      </section>
      <section className="footer-section">
        <h2 className="section-title">關於我們</h2>
        <div className="section-content">
          <a className="page-link" href="#">
            品牌故事
          </a>
          <a className="page-link" href="#">
            媒體聯繫
          </a>
          <a className="page-link" href="#">
            Press kit
          </a>
        </div>
      </section>
      <section className="footer-section">
        <h2 className="section-title">資訊</h2>
        <div className="section-content">
          <a className="page-link" href="#">
            隱私權政策
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
        <h2 className="section-title">追蹤 ALPHA Shop</h2>
        <div className="section-content">
          <div className="tel-info">+886 02123-45678</div>
          <div className="social-icon-group">
            <svg className="social-icon cursor-point">
              <use xlinkHref="#svg-icon-facebook" />
            </svg>
            <svg className="social-icon cursor-point">
              <use xlinkHref="#svg-icon-instagram" />
            </svg>
            <svg className="social-icon cursor-point">
              <use xlinkHref="#svg-icon-whatsapp" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  </footer>
</>

  );
}

export default App;
