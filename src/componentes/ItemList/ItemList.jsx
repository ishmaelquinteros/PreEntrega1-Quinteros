import Item from "../Item/Item";
import './ItemListaStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemList = ({ProductsList}) => {

    return (
        <Container fluid style={{'backgroundColor': "cornsilk"}}>
        <Row>
            {ProductsList.map((producto, index) => (
            <Col key={`${index}`}>
                <Item id={producto.id} 
                titulo={producto.title} 
                precio={producto.price} 
                imagen={producto.image} 
                ></Item>
            </Col>   
            ))}    
        </Row>
        </Container>    
        )
    }