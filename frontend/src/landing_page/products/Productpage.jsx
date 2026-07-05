import Hero from "./Hero";
import LeftProduct from "./leftProduct";
import RightProduct from "./rightProduct";
import Universe from "./Universe";
export default function Productpage() {
    return (
        <>  
            <Hero />
            <LeftProduct 
                imgUrl="./public/images/kite.png"
                title="Kite"
                desc= "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  
                tryDemo=""
                learnMore=""
                googlePlay="./public/images/googlePlayBadge.svg"    
                appStore="./public/images/appstoreBadge.svg"/>

            <RightProduct 
                imgUrl="./public/images/console.png"
                title="Console"
                desc= "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  
                tryDemo=""/>

            <LeftProduct 
                imgUrl="./public/images/coin.png"
                title="Coin"
                desc= "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."  
                tryDemo=""
                learnMore=""
                googlePlay="./public/images/googlePlayBadge.svg"    
                appStore="./public/images/appstoreBadge.svg"/>
            
            <RightProduct 
                imgUrl="./public/images/kiteconnect.png"
                title="Kite Connect API"
                desc= "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  
                tryDemo=""/>
            
            <LeftProduct 
                imgUrl="./public/images/varsity.png"
                title="Varsity mobile"
                desc= "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  
                tryDemo=""
                learnMore=""
                googlePlay="./public/images/googlePlayBadge.svg"    
                appStore="./public/images/appstoreBadge.svg"/>
            <p className="text-center fs-4 mt-4">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />
        </>
    );
}