import './ItemStyle.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export const ItemDetail = (product) => {     
  const navigate = useNavigate();
  
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  
  const handleNavigate = () => {
    navigate('/Cart');
  }

  const addToCart = () =>{
    addItem(product.product, count);
  }

  return (
  
    <div className="container">
          <div className='container-imagenes'>
            <img src={product.product.image} alt={product.product.image} className="detail-imagen"></img>
          </div>
        <aside className='contenedor-info'>
        <h4 className="detail-titulo">{product.product.title}</h4>
        <h5>{product.product.description}</h5>
        <h4>PRECIO: {product.product.price}</h4>
        <h5>Stock disponible: {product.product.stock}</h5>
        <h5>Producto: {product.product.type}</h5>
        <ItemCount stock={product.product.stock} count={count} setCount={setCount} />
          <Stack direction="horizontal" gap={3}> 
            <Button variant="outline-danger" onClick={addToCart}>Agregar a carrito</Button>
            <Button variant="outline-danger" onClick={handleNavigate}>Ver carrito</Button>
          </Stack>
      </aside>
    </div>
  )
}

export default ItemDetail;
