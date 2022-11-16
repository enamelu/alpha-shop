export default function ProgressControl({step}){
  let progressControlButtons;
  if(step === 1) {
    progressControlButtons = (
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
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
    );
  } else {
    progressControlButtons = (
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <svg className="cursor-point">
            <use xlinkHref="#svg-icon-left-arrow" />
          </svg>
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    );
  }
  return(
    <section className="progress-control-container col col-lg-6 col-sm-12">
    {progressControlButtons}
    </section>
  );
}