import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, vaciarCarro } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="carro-vacio">
                <h3>El carrito de compras está vacío</h3>
                <Link to='/'>
                    <button>Ver catálogo</button>
                </Link>
            </div>
        );
    }

    return (
        <div className='contenedor-tarjetas2'>
            {
                cart.map(e => (
                    <CartItem key={e.id} producto={e} />
                ))
            }
            <button className="btn-vaciar" onClick={vaciarCarro}>Vaciar carrito</button>
            <Link to='/checkout'>
                <button className="btn-vaciar">Realizar pedido</button>
            </Link>
        </div>
    );
}

export default Cart;
