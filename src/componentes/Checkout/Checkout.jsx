import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';
import { useState, useContext } from 'react';
import { db } from "../..";
import { addDoc, collection, doc, updateDoc} from 'firebase/firestore';
import { Tost } from '../tost/tost'
import { useNavigate } from 'react-router-dom';
import TableProducts from '../TableProducts/TableProducts';

const Checkout = () => {
  const {products, removeList, total} = useContext(CartContext);
  const [confirmation, setConfirmation] = useState();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    lastname: "",
    phone: "",
    email:""
  })
  
  const createOrder = (event) =>{
      event.preventDefault();
        const newOrder = {
          buyer: formValue,
          items: products.map((product)=>{
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: product.quantity,
          }}),
          date: new Date(),
          total: total,
          };
      
        const queryDb = collection(db, "orders");
        addDoc(queryDb, newOrder)
        .then((res)=> {
        setConfirmation(res.id);
        setFormValue({name: "", lastname: "", phone: "", email:""})
        setTimeout (() => {navigate('/')}, 5000) 
        updateProductStock();
        removeList();
        }).catch((error)=>{alert("Hubo un error al registar " + error)})
    }
  
  
  const handInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,})
    }

  const validateForm = formValue.name === "" 
  || formValue.lastname === "" 
  || formValue.phone === "" 
  || formValue.email === "" 

  //const validateEmail = (e) => {
  //  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //  regex.test(e) ? setConfirmEmail(true) : setConfirmEmail(false)
  //};

  const updateProductStock = () =>{
    products.forEach((prod) => {
      const queryDb = doc(db, "products", prod.id)
      updateDoc(queryDb, {
        stock: prod.stock - prod.quantity,
      }).then(() => {
        console.log("se actualizo el stock de producto" + prod.title)
      }).catch((err) =>{
        console.log("ocurrio un error " + err + "al actualizar stock producto " + prod.title)
      })
    })
  }
    
  return (
    <>
    <div class="d-flex flex-row align-items-center">
    <Form class='container-fluid d-flex flex-row'>
    <div className='d-flex flex-row m-3'>
    <Form.Group className="mb-3" controlId="ControlInput1">
      <Form.Label>Ingrese su nombre</Form.Label>
      <Form.Control type="text" placeholder="nombre"
      value={formValue.name} onChange={handInput} name="name" required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="ControlInput2">
      <Form.Label>Ingrese su apellido</Form.Label>
      <Form.Control type="text" placeholder="apellido"
      value={formValue.lastname} onChange={handInput} name="lastname" required/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="ControlInput3">
      <Form.Label>Ingrese su telefono</Form.Label>
      <Form.Control type="text" placeholder="ejemplo: 351-2369055"
      value={formValue.phone} onChange={handInput} name="phone" required />
    </Form.Group>
    </div>
    <div>
    <Form.Group className="mb-3" controlId="ControlInput4">
      <Form.Label>Ingrese un e-mail</Form.Label>
      <Form.Control type="email" placeholder="name@example.com"
      value={formValue.email} onChange={handInput} name="email" required/>
    </Form.Group>

    </div>
    <Button variant="outline-danger" onClick={createOrder} type='submit' disabled={validateForm}>
      Confirmar compra</Button>
  </Form>
  </div>
  <TableProducts product={products}></TableProducts>
  {confirmation !== undefined ? <Tost respuesta={confirmation}></Tost> : null }
  </>
 )
}

export default Checkout