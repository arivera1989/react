import React, { useContext } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'

export const ItemDetail = ({producto}) => {
    const { agregarAlCarrito, enElCarro, handleAgregarAlCarrito } = useContext(CartContext)
    const {nombre,desc,image, precio, id} = producto
  return (
    <div className="item-detail">
      <img className="img-prod" src={image} alt={`imagen del producto ${nombre}`} />
      <h2>{nombre}</h2>
      <p>{desc}</p>
      <button className="btn-false">$ {precio}</button>
      {
        enElCarro(producto.id) ?
        <Link to='/cart'>
          <button>Ver mi carrito</button>
        </Link>
        :
        <ItemCount handleAgregarAlCarrito={agregarAlCarrito} prod={producto}/>      
      }
    </div>
  )
}