import fotocarrito from '../../carrito-de-compras.png';
import './Cartwidget.css';

const cartwidget = () => {
    return (
    <div>
        <img src={fotocarrito} alt="carrito" className='carrito'></img>
        <span className='carrito-numero'>3</span>
    </div>
    )
}

export default cartwidget;