export default function Award() {
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col p-5">
                    <h1 className="mb-5">Trust with confidence</h1>

                    <h2>Customer-first always</h2>
                    <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h2>No spam or gimmicks</h2>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h2>The Zerodha universe</h2>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2>Do better with money</h2>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col p-5">
                    <img src="./public/images/ecosystem.png" alt="award" style={{width:"100%"}}/>
                    <div className="row">
                    <a href="#" style={{textDecoration:"none", textAlign:"center"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" style={{textDecoration:"none", textAlign:"center"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}