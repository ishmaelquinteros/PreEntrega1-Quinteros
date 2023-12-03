import Form from 'react-bootstrap/Form';

const Checkout = () => {
  return (
    <div class="d-flex flex-column align-items-center">
    <Form>
    <Form.Group className="mb-3" controlId="ControlInput1">
      <Form.Label>Ingrese su nombre</Form.Label>
      <Form.Control type="text" placeholder="nombre" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="ControlInput2">
      <Form.Label>Ingrese su apellido</Form.Label>
      <Form.Control type="text" placeholder="apellido"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="ControlInput3">
      <Form.Label>Ingrese su telefono</Form.Label>
      <Form.Control type="text" placeholder="ejemplo: 351-2369055" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="ControlInput4">
      <Form.Label>Ingrese un e-mail</Form.Label>
      <Form.Control type="email" placeholder="name@example.com"/>
      
    </Form.Group>
  </Form>
  </div>
  )
}

export default Checkout