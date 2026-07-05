export default function Stats() {
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col-4">
                        <h1>Unbeatable pricing</h1>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="#" style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6 row border flex justify-content-center align-items-center p-4">
                        <div className="col border-end pe-4 inline-block text-center">
                            <img src="./public/images/pricing0.svg" alt="price" width="70%"/>
                            <p className="fs-15">Free Account</p>
                        </div>
                        <div className="col border-end px-4 text-center inline-block">
                            <img src="./public/images/pricing0.svg" alt="price" width="70%"/>
                            <p className="fs-15">Free equity delivery</p>
                        </div>
                        <div className="col px-4 text-center inline-block">
                            <img src="./public/images/pricing20.svg" alt="price" width="70%"/>
                            <p className="fs-15">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}