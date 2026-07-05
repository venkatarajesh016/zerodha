export default function Education() {
    return (
        <>
        <div className="container mb-5">
            <div className="row p-5">
                <div className="col-6">
                    <img src="./public/images/education.svg" alt="education" width="80%"/>
                </div>

                <div className="col-6 p-5 fs-7">
                    <h2>Free and open market education</h2>
                   <div className="mb-5">
                     <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>Varsity<i className="fa-solid fa-arrow-right"></i></a>
                   </div>

                    <div><p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}}>TradingQ&A<i className="fa-solid fa-arrow-right"></i></a></div>
                </div>

            </div>
        </div>
        </>
    );
}