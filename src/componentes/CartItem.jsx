import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import './CartItem.css'
import { CartContext } from '../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'

const CartItem = ({producto}) => {
    const e = producto
    const { eliminarItem, agregarAlCarrito } = useContext(CartContext)
  return (
    <div className="contenedor-tarjetas">
        <div className="item-card2">
            <img src={e.image} alt="imagen del producto" />
            <p>{e.desc}</p> 
            <p>$ {e.precio}</p>
            <p>Cantidad: {e.cantidad} unidades</p>
            <ItemCount handleAgregarAlCarrito={agregarAlCarrito} prod={producto} />
            <button onClick={()=>eliminarItem(e.id)}>Eliminar</button>
            <p>Subtotal: {e.precio * e.cantidad}</p>
        </div>
    </div>
  )
}

export default CartItem
