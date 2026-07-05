export default function Universe() {
  return (
    <>
      <div className="container mt-5 p-4">
        <div className="row text-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="row mt-5">
            <div className="col-4">
              <img
                src="./public/images/zerodhaFundhouse.png"
                alt="zerodhaFundhouse"
                width="50%"
              />
              <p></p>
            </div>
            <div className="col-4">
                <img src="./public/images/sensibullLogo.svg" alt="sensibullLogo" width="50%" />
            </div>
            <div className="col-4">
                <img src="./public/images/tijori.svg" alt="tijori" width="40%" />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-4">
              <img
                src="./public/images/streakLogo.png"
                alt="streakLogo"
                width="50%"
              />
              <p></p>
            </div>
            <div className="col-4">
                <img src="./public/images/smallcaseLogo.png" alt="smallcaseLogo" width="50%" />
            </div>
            <div className="col-4">
                <img src="./public/images/dittoLogo.png" alt="dittoLogo" width="40%" />
            </div>
          </div>
          <button className="btn btn-primary mx-auto d-block mt-5" style={{width: "180px"}}>Sign Up for Free</button>
        </div>
      </div>
    </>
  );
}
