import React from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'

export const ItemDetail = ({producto}) => {
    const {nombre,desc,image, precio, id} = producto
  return (
    <div>
      <h3>{nombre}</h3>
      <img src={image} alt={`imagen del producto ${nombre}`} />
      <p>{desc}</p>
      <p>{precio}</p>
      <button>Comprar</button>
    </div>
  )
}