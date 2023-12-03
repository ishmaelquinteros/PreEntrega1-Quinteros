import './ItemStyle.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = () => {  
  const {id} = useParams();
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [itemSelect, setItemSeleted] = useState([])
  const [count, setCount] = useState(0);
  const stock = 5;
  const handleNavigate = () =>{
    navigate('/Cart');
  }


  useEffect(() => { 
    const fetchProducto = () => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((resolve) => resolve.json())
            .then((producto) => setItemSeleted(producto))
            .catch((error) => console.log(error));
        }
      };  
    fetchProducto();
  }, [])

  const addToCart = () =>{
    addItem(itemSelect, count);
  }
  return (
    <>
    <div class="d-flex flex-column justify-content-center m-2">
        <h2 className="detail-titulo">{itemSelect?.title}</h2>
        <img src={itemSelect?.image} alt={itemSelect?.title} className="detail-imagen"></img>
        <h5>{itemSelect?.description}</h5>
        <h4>PRECIO: ${itemSelect?.price}</h4>
    </div>
    <div class="d-flex flex-columns m-2">
      <ItemCount stock={stock} count={count} setCount={setCount}/>
      <button onClick={addToCart}>Agregar a carrito</button>
      <button onClick={handleNavigate}>Ver carrito</button>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default ItemDetail;
