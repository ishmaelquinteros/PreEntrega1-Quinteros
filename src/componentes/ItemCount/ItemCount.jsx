import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
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
      <Stack direction="horizontal" gap={3}>
      <Button variant="danger" onClick={onSubtract}>-</Button>
      <label>Seleccione cantidad: {count}</label>  
      {count === stock ? null : <Button variant="danger" onClick={onAdd}>+</Button>}  
      </Stack>
      
    </>
  );
}

export default ItemCount;