import './ItemStyle.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export const ItemDetail = ({product}) => {     
  const navigate = useNavigate();
  
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  
  const handleNavigate = () => {
    navigate('/Cart');
  }

  const addToCart = () =>{
    addItem(product, count);
  }

  return (
  
    <div className="container">
          <div className='container-imagenes'>
            <img src={product.image} alt={product.image} className="detail-imagen"></img>
          </div>
        <aside className='contenedor-info'>
        <h4 className="detail-titulo">{product.title}</h4>
        <h5>{product.description}</h5>
        <h5>Precio: {product.price}</h5>
        <h5>Stock disponible: {product.stock}</h5>
        <h5 style={{marginBottom: '5px'}}>Producto: {product.type}</h5>
        <ItemCount stock={product.stock} count={count} setCount={setCount} />
          <Stack direction="horizontal" gap={3} style={{marginTop: '10px'}}> 
            <Button variant="outline-danger" onClick={addToCart}>Agregar a carrito</Button>
            <Button variant="outline-danger" onClick={handleNavigate}>Ver carrito</Button>
          </Stack>
      </aside>
    </div>
  )
}

export default ItemDetail;
