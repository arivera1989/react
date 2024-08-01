import React from 'react'
import {Link} from 'react-router-dom';
import './Item.css'

const Item = ({ e }) => {
  return (
    <div className='item-card'> 
        <h2>{e.nombre}</h2>
        <img src={e.image} alt="imagen del producto" />
        <p>{e.desc}</p>
        <p>$ {e.precio}</p>
        <Link to={`/detalle/${e.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item

