export default function LeftProduct({imgUrl,title,desc,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 mb-5">
                    <img src={imgUrl} alt="image" width="90%"/>
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-4 d-flex flex-column justify-content-center">
                    <div className="">
                        <h2 className="mb-3">{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="mb-3">
                        <a href="" style={{marginRight:"30px"}}>Try Demo →</a>
                        <a href="">Learn More →</a>
                    </div>
                    <div>
                        <img src={googlePlay} alt="googlePlay" style={{marginRight:"20px"}} width="30%"/>
                        <img src={appStore} alt="appStore" width="30%"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}