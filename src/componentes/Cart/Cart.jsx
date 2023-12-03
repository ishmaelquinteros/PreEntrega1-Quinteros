import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const { products, deleteItem, removeList, productQuantity } = useContext(CartContext);

  const handleNavigate  = (param) =>{
    if (param === "terminar")
    navigate('/Checkout');
    else{
    navigate("/");  
    }
  }
  return (
    <div>
      <h3>Carrito de compras</h3>
      

      {productQuantity >= 1 ?
      <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th></th>              
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.quantity * product.price}</td>
            <td><button onClick={() => deleteItem(product.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
      </Table>:
      <h2>No hay productos</h2>} 
    <div>
      <button onClick={()=> handleNavigate("continuar")}>Seguir comprando</button>
      <button onClick={removeList}>Vaciar carrito</button>
      <button onClick={() => handleNavigate("terminar")}>Terminar compra</button>
    </div>
    </div>
    );
  };

export default Cart;