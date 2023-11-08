import { useEffect, useState } from "react";
import Item from "../Item/Item";
import './ItemListaStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";


export const ItemList = () => {

    const [ListaProd, setListaProd] = useState([]);
    const {categoria} = useParams();
    
    const fetchProducts = async() =>{
      try{
        const respuesta = await fetch('https://fakestoreapi.com/products')
        const data = await respuesta.json();
        return data;
    } catch(error){
        console.log(error);
        return [];
    } 
    } 

    useEffect(() => {
        const myFunction = async() =>{
            if (categoria) {
                const productList = await fetchProducts();
                const category = categoria.includes('-')
                ? categoria.replace('-', ' ') : categoria;
                const filterItem = productList.filter((product) => {
                    return product.category === category;
                });
                  setListaProd(filterItem);   
                } else {
                    const productList = await fetchProducts();
                    setListaProd(productList);  
                }
            };
            myFunction();
        }, [categoria]);
    
    return (
        <Container fluid style={{'backgroundColor': "cornsilk"}}>
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