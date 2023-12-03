import './ItemStyle.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({id, titulo, precio, imagen}) => {
  return (
    <Card className='card-principal'>
    <Card.Title>{titulo}</Card.Title>
    <Card.Img src={imagen} />
    <Card.Body>
        <Card.Text class="d-flex flex-column justify-content-center">
          <h5 class='m-3'>Precio: <strong>${precio}</strong></h5>
        </Card.Text>
        <Link to={'/item/'+ id}>
        <Button variant="outline-danger">Ver mas detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item