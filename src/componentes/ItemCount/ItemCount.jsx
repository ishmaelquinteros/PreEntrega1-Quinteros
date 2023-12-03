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
        {count === stock ? null :<button onClick={onAdd}>+</button>}
        <label>{count}</label>
        <button onClick={onSubtract}>-</button>
      </div>
      
    </>
  );
}

export default ItemCount;