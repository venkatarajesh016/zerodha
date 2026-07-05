export default function Hero() {
  return (
    <>
      <div className="container p-4 mb-5" style={{marginTop:"100px"}}>
        <div className="row text-center">
          <h1>Charges</h1>
          <p className="fs-4 text-muted">List of all charges and taxes</p>
        </div>

        <div className="row text-center"  style={{marginTop:"130px"}}>
            <div className="col-1"></div>
            <div className="col">
                <img src="./public/images/pricingEquity.svg" alt="Free equity delivery" width="80%"/>
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col">
                <img src="./public/images/pricing20.svg" alt="Free equity delivery" width="80%"/>
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col">
                <img src="./public/images/pricingEquity.svg" alt="Free equity delivery" width="80%"/>
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
