export default function Team() {
  return (
    <>
      <div className="container text-center my-5">
        <div className="row">
          <h1 className="fs-3 mt-5 mb-5">
            People
          </h1>
        </div>

        <div className="row py-4 fs-6" >
            <div className="col"></div>
            <div className="col-4 me-5 mt-3 mb-3" style={{fontSize:"18px",textAlign:"center"}}>
                <img src="./public/images/nithinKamath.jpg" alt="Nithin Kamath" style={{borderRadius:"100%",width:"75%"}}/>
                <h4 className="mt-2">Nithin Kamath</h4>
                <h6>Founder, CEO</h6>
            </div>
            <div className="col-4 text-start mt-3 mb-3" style={{fontSize:"16px"}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
            </div>
            <div className="col"></div>
        </div>
      </div>
    </>
  );
}
