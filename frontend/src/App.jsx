import { Route, Routes } from 'react-router-dom'
import {About, Cart, Collection, Contact, Home, Login, Orders, PlaceOrder, Product} from './pages/index.js'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer } from 'react-toastify';
import Verify from './pages/Verify.jsx'

function App() {
  return (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <ToastContainer/>
    <Navbar />
    <SearchBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/verify' element={<Verify/>}/>

    </Routes>
    <Footer />
  </div>
  )
}

export default App
