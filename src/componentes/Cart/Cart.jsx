import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export const Cart = () => {
  const navigate = useNavigate();
  const { products, deleteItem, removeList, productQuantity, total } = useContext(CartContext);

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
          <th>Articulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th></th>              
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.quantity * product.price}</td>
            <td><Button variant="danger" onClick={() => deleteItem(product.id)}>
            <i class="bi bi-trash3-fill" ></i>
            </Button>
            </td>
          </tr>
        ))}
      </tbody>
      </Table>:
      <h2 class="m-3">No hay productos</h2>} 
    
      <h4 class="text-center text-danger">TOTAL COMPRA: {total}</h4>
      <div class="d-flex justify-content-center">
      <Stack direction="horizontal" gap={3}>
      <Button variant="outline-danger" onClick={()=> handleNavigate("continuar")}>Seguir comprando</Button>
      <Button variant="outline-danger" onClick={removeList}>Vaciar carrito</Button>
      <Button variant="outline-danger" onClick={() => handleNavigate("terminar")}>Terminar compra</Button>
      </Stack>
    </div>
    </div>
    );
  };

export default Cart;