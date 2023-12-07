import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const Tost = ({respuesta}) => {
  return (
    <ToastContainer
        className="p-3"
        position={'middle-end'}
        style={{ zIndex: 1 }}>
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Pedido registrado</strong>
      </Toast.Header>
      <Toast.Body>Se registro el pedido N° : {respuesta} </Toast.Body>
    </Toast>
    </ToastContainer> 
  )
};

export default Tost;