import fotocarrito from '../../carrito-de-compras.png';
import './Cartwidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { productQuantity } = useContext(CartContext);

    return (
        <div>
        {productQuantity >= 1 ?
        <div>
        <Link to={"/Cart"}>    
        <img src={fotocarrito} alt="carrito" className='carrito'></img>
        </Link>
        <span className='carrito-numero'>{productQuantity}</span>
        </div> : <div></div>}
        </div>  
    )
}

export default CartWidget;