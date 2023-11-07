import './ItemStyle.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'

export const Item = ({id, titulo, descripcion, precio, imagen}) => {
  return (
    <Card className='card-principal'>
    <Card.Title>{titulo}</Card.Title>
    <Card.Img src={imagen} />
    <Card.Body>
        <Card.Text class="d-flex flex-column justify-content-center">
        <Accordion defaultActiveKey={id}>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>Ver descripcion</Accordion.Header>
        <Accordion.Body>
          {descripcion}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          <h5 class='m-3'>Precio: <strong>${precio}</strong></h5>
        </Card.Text>
        <Button variant="outline-danger">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default Item