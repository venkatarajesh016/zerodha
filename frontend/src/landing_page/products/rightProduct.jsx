export default function RightProduct({imgUrl,title,desc,tryDemo}) {
    return (
        <>  
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 p-4 d-flex justify-content-center flex-column">
                    <div>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                    <a href="">Learn more →</a>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <img src={imgUrl} alt="console" width="100%"/>
                </div>
            </div>
            </div>
        </>
    )
}