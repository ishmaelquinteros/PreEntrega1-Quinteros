import { useState } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);
    const [total, setTotal] = useState(0)

    let listaFiltrada = [];

    const addItem = (product, quantity) =>{
        if (isInCart(product.id)) {
            const newQuantity = products.map((item) => {
                if (item.id === product.id){
                    return{
                        ...item,
                        quantity: item.quantity + quantity,
                    };
                }
                return item;
            });
            setProducts(newQuantity);
            return;
        }
        setProducts([...products, 
            {...product, quantity}
        ]);
    }

    const removeList = () =>{
        setProductQuantity(0);
        setProducts([]);
    }

    const deleteItem = (id) => {
        listaFiltrada = products.filter((product) => {
             return product.id !== id 
        });
        setProducts(listaFiltrada)
    } 

    const isInCart = (productId) =>{
        return products.some((product)=> product.id === productId);
    };

    useEffect(() => {
        setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0),0);
        const suma = products.reduce((acc, current) => acc + current.price * current.quantity, 0);
        setTotal(suma)
    }, [products])
    
    return (
    <CartContext.Provider value={{products, addItem, productQuantity, removeList, deleteItem, total}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider