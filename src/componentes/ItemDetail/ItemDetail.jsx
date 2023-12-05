import './ItemStyle.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { doc, getDoc} from 'firebase/firestore';
import { db } from "../..";

export const ItemDetail = () => {  
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { addItem } = useContext(CartContext);
  const [itemSelect, setItemSeleted] = useState([])
  const [count, setCount] = useState(0);
  
  const handleNavigate = () =>{
    navigate('/Cart');
  }


  useEffect(() => { 
        if (id) {
          const query = doc(db, "products", id)
          getDoc(query).then((snapshot) => {
          if (snapshot.exists()){
            setItemSeleted({ id: snapshot.id, ...snapshot.data() })
          } else
            console.log("no se encontro ningun producto")
          });
        }
  }, [])

  const addToCart = () =>{
    addItem(itemSelect, count);
  }
  return (
    <div className="container">
          <div className='container-imagenes'>
            <img src={itemSelect?.image} alt={itemSelect?.title} className="detail-imagen"></img>
          </div>
        <aside className='contenedor-info'>
        <h3 className="detail-titulo">{itemSelect?.title}</h3>
        <h5>{itemSelect?.description}</h5>
        <h4>PRECIO: ${itemSelect?.price}</h4>
        <h5>Stock disponible: {itemSelect?.stock}</h5>
        <h5>Producto: {itemSelect?.type}</h5>
        <ItemCount stock={itemSelect?.stock} count={count} setCount={setCount} />
          <div>  
            <button onClick={addToCart}>Agregar a carrito</button>
            <button onClick={handleNavigate}>Ver carrito</button>
          </div>
      </aside>
    </div>
  )
}

export default ItemDetail;
