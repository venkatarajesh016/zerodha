import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Homepage from './landing_page/Home/Homepage.jsx'
import Aboutpage from './landing_page/about/Aboutpage.jsx'
import Pricingpage from './landing_page/pricing/Pricingpage.jsx'
import Productpage from './landing_page/products/Productpage.jsx'
import Signuppage from './landing_page/signup/SignUppage.jsx'
import Supportpage from './landing_page/support/Supportpage.jsx'
import Header from './landing_page/Header.jsx'
import Footer from './landing_page/Footer.jsx'
import Notfound from './landing_page/Notfound.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='/pricing' element={<Pricingpage />} />
      <Route path='/products' element={<Productpage />} />
      <Route path='/signup' element={<Signuppage />} />
      <Route path='/support' element={<Supportpage />} />
      <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
