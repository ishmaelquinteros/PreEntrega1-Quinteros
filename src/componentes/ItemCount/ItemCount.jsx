export const ItemCount = ({stock, count, setCount}) => {

  const onAdd = () =>{
    if (count === stock) return;
    setCount(count+1);
  }

  const onSubtract = () => {
    if (count === 0) return;
    setCount(count-1);
  }

  return (
    <>
      <div>
      <button onClick={onSubtract}>-</button>
      <label>Seleccione cantidad: {count}</label>  
      {count === stock ? null :<button onClick={onAdd}>+</button>}  
      </div>
      
    </>
  );
}

export default ItemCount;