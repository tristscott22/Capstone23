import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductList from './Components/ProductList'
import ProductDetails from './Components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes> 
      
       
    </>
  )
}

export default App
