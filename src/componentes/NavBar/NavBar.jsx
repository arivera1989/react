import  CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import viteLogo from '/vite.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={viteLogo} alt="" />
        <h1>Tienda KISA</h1>
        <CartWidget />
    </div>
  )
}

export default Navbar
