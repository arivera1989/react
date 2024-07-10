import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola estimado cliente!" />
    </>
  )
}

export default App
