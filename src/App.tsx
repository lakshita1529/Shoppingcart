import { useState } from 'react'
import {Routes, Route} from "react-router-dom"

import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Store} from "./pages/Store"
import {About} from "./pages/About"
import{Navbar} from "./Components/shared/Navbar"
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
//import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
   
    </>
  )
}

export default App
