import { TiShoppingCart } from "react-icons/ti";
import React, {useContext} from 'react';
import './CartWidget.css'
import { CartContext } from '../../context/cartContext'

function CartWidget() {
  const { cart, itemQuantity } = useContext(CartContext)

  return (
    <div className='container-carrito'>
      <span className='badge-carrito'>{itemQuantity() || 0}</span>
      <TiShoppingCart className='icon-carrito'/>
    </div>
  )
}

export default CartWidget
