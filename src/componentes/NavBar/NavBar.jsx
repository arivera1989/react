import  CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import viteLogo from '/vite.svg'
import {Link, useParams} from 'react-router-dom';


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
            <Link to={'/categoria/hogar'}>Hogar & Deco</Link>
          </li>
          <li>
          <Link to={'/categoria/tech'}>Tech</Link>
          </li>
          <li>
          <Link to={'/categoria/vestimenta'}>Vestimenta</Link>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar
