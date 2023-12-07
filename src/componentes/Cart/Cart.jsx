import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import TableProducts from "../TableProducts/TableProducts";

export const Cart = () => {
  const navigate = useNavigate();
  const { products, removeList, productQuantity, total } = useContext(CartContext);

  const handleNavigate  = (param) =>{
    if (param === "terminar")
    navigate('/Checkout');
    else{
    navigate("/");  
    }
  }
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Carrito de compras</h3>
      {productQuantity >= 1 ? <TableProducts product={products}></TableProducts>:<h2 class="m-3">No hay productos</h2>} 
      <h4 class="text-center text-danger">TOTAL COMPRA: ${total}</h4>
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