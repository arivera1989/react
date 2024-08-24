import React, {useEffect, useState} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {getProductById} from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [idProducto, setIdProducto] = useState()

    const {id} = useParams()

    useEffect(()=>{
      setLoading(true)
      const productoRef = doc(db, 'productos', id)

      getDoc(productoRef)
      .then(snapshot => {
        const dataProducto = snapshot.data()
        const productoComp = {...dataProducto, id: snapshot.id}
        setProducto(productoComp)})
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
