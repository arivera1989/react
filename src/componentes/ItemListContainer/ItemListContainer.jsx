import React, { useState, useEffect } from 'react';
import { FaHand } from "react-icons/fa6";
import './ILC.css';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
const [ productos, setProductos] = useState([])
const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getProducts()
    .then(res=> setProductos(res))
    .finally(setLoading(false))
  }, [])



  if (loading) {
    return (
      <h2 className="loading">Cargando...</h2>
    )
  }

  return (
    <div>
      {
        productos.length > 0 &&
        <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer
