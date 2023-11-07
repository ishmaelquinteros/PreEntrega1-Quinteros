import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemListaStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemList = () => {
    const fetchProduct = () =>{

    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => setListaProd(json))
    .catch((error) => console.log(error))
    }

    const [ListaProd, setListaProd] = useState([]);

    useEffect(() =>{
        fetchProduct()
    },[])

    return (
        <Container fluid style={{'background-color': "cornsilk"}}>
        <Row>
            {ListaProd.map((producto, index) => (
            <Col key={`${index}`}>
                <Item id={producto.id} titulo={producto.title} descripcion={producto.description} precio={producto.price} imagen={producto.image}></Item>
            </Col>   
            ))}    
        </Row>
        </Container>    
        )
    }