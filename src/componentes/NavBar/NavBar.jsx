import  CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>
        <img className='logo' src={viteLogo} alt="" />
        </Link>
        <Link to='/'>
          <h1>Tienda KISA</h1>
        </Link>
        <ul>
          <li>
            <Link to={'/categoria/calzado'}>Calzado</Link>
          </li>
          <li>
          <Link to={'/categoria/electronica'}>Electrónica</Link>
          </li>
          <li>
            <Link to={'/categoria/hogar'}>Hogar</Link>
          </li>
          <li>
          <Link to={'/categoria/ropa'}>Ropa</Link>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar
