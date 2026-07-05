export default function Hero() {
  return (
    <>
        <div className="container text-center mb-5">
            <div className="row">
                <img src="public/images/homeHero.png" alt="home page logo"  style={{width:"100%"}}/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary mx-auto" style={{width: "180px"}}>Sign Up for Free</button>
            </div>
        </div>
    </>
    );
}