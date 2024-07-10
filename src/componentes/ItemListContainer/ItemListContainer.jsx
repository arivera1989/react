import { FaHand } from "react-icons/fa6";
import './ILC.css';

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <div className='saludo'>{greeting}<FaHand /></div>
    </>
  )
}

export default ItemListContainer
