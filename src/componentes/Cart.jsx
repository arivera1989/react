import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import CartItem from './CartItem'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, vaciarCarro } = useContext(CartContext)
    if(cart.length === 0){
        return(
        <div className="carro-vacio">
            <h3>El carrito de compras esta vacío</h3>
            <Link to='/'>
                <button>Ver catálogo</button>
            </Link>
        </div>
        )
    }
  return (
    <>
    {
        cart.length > 0 &&
        cart.map(e=> {
            return(
            <CartItem key={e.id} producto = {e}/>
            )
        })
    }
    <button className="btn-vaciar" onClick={()=>vaciarCarro()}>Vaciar carrito</button>
    </>
  )
}

export default Cart
