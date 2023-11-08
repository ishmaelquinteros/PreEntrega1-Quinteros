import { useState } from 'react';
import { useEffect } from 'react';

export const Itemcount = () => {


    const [msj, setMensaje] = useState("");
    const [count, setCount] = useState(0); 
    const [stock, setStock] = useState(1)

  const AsignarStock = (propStock) => {
        setStock(propStock);
  }

  useEffect (() => {
    AsignarStock(5);
  }, [])

  const checkStock = (pedido, stockunidad) => {
   if (pedido <= stockunidad){
    setStock(stock - pedido);
    setMensaje("Se agrega " + pedido + " unidad/es al carrito");
    return msj;
  } else{
    setMensaje("Lo sentimos no hay stock suficiente");
    return msj;
  }

  }
  return (
    <>
      <div>
        <button onClick={()=> setCount(count+1)}>+</button>
        <label>{count}</label>
        <button onClick={()=> setCount(count-1)}>-</button>
        <button onClick={() => checkStock (count, stock)}>Agregar a carrito</button>
      </div>
      
    </>
  );
}

export default Itemcount;