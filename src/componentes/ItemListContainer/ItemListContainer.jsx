import React, { useState, useEffect } from 'react';
import { FaHand } from "react-icons/fa6";
import './ILC.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
const [ productos, setProductos] = useState([])
const [ loading, setLoading ] = useState(true)
const {cat} = useParams()

  useEffect(() => {
    setLoading(true)
    if(cat){
      const prodPorCategoria = query(collection(db, "productos"), where('categoria', '==', cat))
      getDocs(prodPorCategoria).then(snapshot => {
        const dataProductos = snapshot.docs.map(doc => {
          const conId = doc.data()
          return {id: doc.id, ...conId}
        })
        setProductos(dataProductos)
       }).finally(()=>setLoading(false))
    }else{
      const productosRef = collection(db, "productos")
      getDocs(productosRef).then(snapshot => {
        const dataProductos = snapshot.docs.map(doc => {
          const conId = doc.data()
          return {id: doc.id, ...conId}
        })
       setProductos(dataProductos)
      }).finally(()=>setLoading(false))
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
