import { useDispatch } from 'react-redux'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Productdetails from './components/Productdetails'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App () {
   

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-details/:id' element={<Productdetails/>}/>
      <Route path='/add-to-cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
