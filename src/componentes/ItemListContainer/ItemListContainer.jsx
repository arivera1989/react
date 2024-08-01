import React, { useState, useEffect } from 'react';
import { FaHand } from "react-icons/fa6";
import './ILC.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
const [ productos, setProductos] = useState([])
const [ loading, setLoading ] = useState(true)
const {cat} = useParams()

  useEffect(() => {
    if (cat) {
      getProductsByCategory(cat)
      .then(res=> setProductos(res))
      .finally(setLoading(false))
    }else{
      getProducts()
      .then(res=> setProductos(res))
      .finally(setLoading(false))
    }
   
  }, [cat])



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
