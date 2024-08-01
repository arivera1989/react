import React from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'

export const ItemDetail = ({producto}) => {
    const {nombre,desc,image, precio, id} = producto
  return (
    <div className="item-detail">
      <h3>{nombre}</h3>
      <img className="img-prod" src={image} alt={`imagen del producto ${nombre}`} />
      <p>{desc}</p>
      <p>{precio}</p>
      <button className="btn-comprar">Comprar</button>
    </div>
  )
}