import React from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'

export const ItemDetail = ({producto}) => {
    const {nombre,desc,image, precio, id} = producto
  return (
    <div className="item-detail">
      <img className="img-prod" src={image} alt={`imagen del producto ${nombre}`} />
      <h2>{nombre}</h2>
      <p>{desc}</p>
      <button className="btn-false">$ {precio}</button>
      <button className="btn-comprar">Agregar al carrito</button>
    </div>
  )
}