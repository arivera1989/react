import React, { useState } from 'react'

const ItemCount = ({handleAgregarAlCarrito, prod}) => {
    const [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={()=>setCount(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>handleAgregarAlCarrito(prod, count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
