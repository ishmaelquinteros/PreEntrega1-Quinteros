import './Detail.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = () => {  
  const {id} = useParams();

  const [itemSelect, setItemSeleted] = useState([])
  
  const fetchProducto = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resolve) => resolve.json())
      .then((producto) => setItemSeleted(producto))
      .catch((error) => console.log(error));
    };

  useEffect(() => { 
    fetchProducto();
  }, [])

  return (
    <>
    <div class="d-flex flex-column justify-content-center m-2">
        <h2 className="detail-titulo">{itemSelect.title}</h2>
        <img src={itemSelect.image} alt="" className="detail-imagen"></img>
        <h5>{itemSelect.description}</h5>
        <h4>PRECIO: ${itemSelect.price}</h4>
    </div>
    <ItemCount />
    </>
  )
}

export default ItemDetail;
