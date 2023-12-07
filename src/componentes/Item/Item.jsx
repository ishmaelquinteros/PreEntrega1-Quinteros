import './ItemStyle.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({id, titulo, precio, imagen}) => {
  return (
    <Card className='card-principal'>
    <Card.Title>{titulo}</Card.Title>
    <Card.Img src={imagen} className='card-imagen'/>
    <Card.Body className='card-body' style={{margin: '1px', padding: '0.5px'}}>
        <Card.Text class="d-flex flex-column justify-content-center" style={{padding: '1px', margin: '1px'}}>
          <h5 class='m-1'>Precio: <strong>${precio}</strong></h5>
        </Card.Text>
        <Link to={'/item/'+ id}>
        <Button variant="outline-danger">Ver mas detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item