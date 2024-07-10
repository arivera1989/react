import { TiShoppingCart } from "react-icons/ti";
import './CartWidget.css'

function CartWidget() {
  return (
    <div className='container-carrito'>
      <span className='badge-carrito'>0</span>
      <TiShoppingCart className='icon-carrito'/>
    </div>
  )
}

export default CartWidget
