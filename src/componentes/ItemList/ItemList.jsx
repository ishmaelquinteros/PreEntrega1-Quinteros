import { useEffect, useState } from "react"
import Item from "../Item/Item"
import './ItemListaStyle.css';

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
        <>
        {ListaProd.map((producto, index) => (
            <div key={`${index}`} class="container-fluid">
                <Item id={producto.id} titulo={producto.title} descripcion={producto.description} precio={producto.price} imagen={producto.image}></Item>
            </div>   
        ))}    
        </>
        )
    }