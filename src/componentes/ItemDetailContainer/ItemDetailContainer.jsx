import React, {useEffect, useState} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {getProductById} from '../../asyncMock';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [idProducto, setIdProducto] = useState()

    const {id} = useParams()

    useEffect(()=>{
      getProductById(id)
      .then(res=>setProducto(res))
      .finally(setLoading(false))
    },[idProducto])

    if(loading){
      return(
        <h1>Cargando...</h1>
      )
    }

  return (
    <div>
      {<ItemDetail producto={producto} />}
    </div>
  )
}
