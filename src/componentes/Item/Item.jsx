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
        <Card.Text>
        <Accordion defaultActiveKey={id}>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>Ver descripcion...</Accordion.Header>
        <Accordion.Body>
          {descripcion}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          <p>Precio: <strong>${precio}</strong></p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default Item