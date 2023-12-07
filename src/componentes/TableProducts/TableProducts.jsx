import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TableProducts = ({product}) => {
    const { deleteItem } = useContext(CartContext);
    
    return (
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
        {product.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.price}</td>
            <td><Button variant="danger" onClick={() => deleteItem(item.id)}>
            <i class="bi bi-trash3-fill" ></i>
            </Button>
            </td>
          </tr>
        ))}
      </tbody>
      </Table>    
  )
}

export default TableProducts;
