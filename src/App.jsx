import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
