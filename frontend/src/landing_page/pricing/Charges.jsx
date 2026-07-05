export default function Charges() {
        
  return (
    <>
      <div className="container mt-5">
        <div>
        <h2>Charges explained</h2>
        <div className="row mb-5 mt-5">
          <div className="col">
            <div>
              <h5>Securities/Commodities transaction tax</h5>
              <p>
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
              </p>
              <p>
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
            </div>

            <div>
              <h5>Transaction/Turnover Charges</h5>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions. BSE has revised transaction charges in XC, XD, XT,
                Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and
                XD groups have been merged into a new group X w.e.f 01.12.2017)
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
              </p>
              <p>
                BSE has revised transaction charges for group A, B and other non
                exclusive scrips (non-exclusive scrips from group E, F, FC, G,
                GC, W, T) at ₹375 per crore of turnover on flat rate basis
                w.e.f. December 1, 2022. BSE has revised transaction charges in
                M, MT, TS and MS groups to ₹275 per crore of gross turnover.
              </p>
            </div>

            <div>
                <h5>Call & trade</h5>
                <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
            </div>

            <div>
                <h5>Stamp charges</h5>
                <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
            </div>

            <div>
                <h5>NRI brokerage charges</h5   >
                <ul>
                    <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                    <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                </ul>
            </div>

            <div>
                <h4>Account with debit balance</h4>
                <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
            </div>
          </div>
        <div className="col-1"></div>
          <div className="col">
            <div>
                <h5>GST</h5>
                <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
            </div>

            <div>SEBI Charges</div>
                <h5>SEBI Charges</h5>
                <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
            

            <div>
                <h5>DP (Depository participant) charges</h5>
                <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
            </div>

            <div>
                <h5>AMC (Account maintenance charges)</h5>
                <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
            </div>

            <div>
                <h5>Corporate action order charges</h5>
                <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
            </div>

            <div>
                <h5>Off-market transfer charges</h5>
                <p>₹25 per transaction.</p>
            </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        </div>
    </>
  );
}
