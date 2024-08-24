import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'

import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from './context/cartContext'
import Cart from './componentes/Cart'


function App() {

  
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:cat' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter >
    </CartContextProvider>
    </>
  )
}

export default App
