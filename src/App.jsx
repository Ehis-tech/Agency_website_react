import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Services from './Pages/Services'
import Testimonial from './Pages/Testimonial'
import FAQ from './Pages/FAQ'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

 return(
   <Router>
    <div className='overflow-x-hidden'>
      <Navbar/>

     <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
     </main>
     <Footer/>
    </div>


   </Router>
 )
}

export default App