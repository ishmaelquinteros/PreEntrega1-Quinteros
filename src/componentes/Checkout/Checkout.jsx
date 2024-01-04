import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react";
import { db } from "../..";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Tost } from "../tost/tost";
import { useNavigate } from "react-router-dom";
import TableProducts from "../TableProducts/TableProducts";

const Checkout = () => {
  const { products, removeList, total } = useContext(CartContext);
  const [confirmation, setConfirmation] = useState();
  const [errorMail, SetErrorMail] = useState();
  const [repeatMail, setRepeatMail] = useState();
  const [matchEmail, setMatchEmail] = useState(false);
  const [emailValido, setEmailValido] = useState();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const createOrder = (event) => {
    event.preventDefault();

    const newOrder = {
      buyer: formValue,
      items: products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity,
        };
      }),
      date: new Date(),
      total: total,
    };

    const queryDb = collection(db, "orders");
    addDoc(queryDb, newOrder)
      .then((res) => {
        setConfirmation(res.id);
        setFormValue({ name: "", lastname: "", phone: "", email: "" });
        setTimeout(() => {
          navigate("/");
        }, 5000);
        updateProductStock();
        removeList();
      })
      .catch((error) => {
        alert("Hubo un error al registar " + error);
      });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    SetErrorMail(regex.test(email));
  };

  const handInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "email") {
      validateEmail(event.target.value);
      setEmailValido(event.target.value);
    }
  };

  const handleEmail2Change = (event) => {
    setRepeatMail(event.target.value);
    if (event.target.value === emailValido) {
      setMatchEmail(true);
    }
  };

  const validateForm =
    formValue.name === "" ||
    formValue.lastname === "" ||
    formValue.phone === "" ||
    formValue.email === "" ||
    !errorMail ||
    matchEmail === false;

  const updateProductStock = () => {
    products.forEach((prod) => {
      const queryDb = doc(db, "products", prod.id);
      updateDoc(queryDb, {
        stock: prod.stock - prod.quantity,
      })
        .then(() => {
          console.log("se actualizo el stock de producto" + prod.title);
        })
        .catch((err) => {
          console.log(
            "ocurrio un error " +
              err +
              "al actualizar stock producto " +
              prod.title
          );
        });
    });
  };

  return (
    <>
      <div class="d-flex flex-row align-items-center">
        <Form class="container-fluid d-flex flex-row">
          <div className="d-flex flex-row m-3">
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Ingrese su nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre"
                value={formValue.name}
                onChange={handInput}
                name="name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Ingrese su apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="apellido"
                value={formValue.lastname}
                onChange={handInput}
                name="lastname"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Ingrese su telefono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="ejemplo: 351-2369055"
                pattern=""
                value={formValue.phone}
                onChange={handInput}
                name="phone"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="ControlInput4">
              <Form.Label>Ingrese un e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={formValue.email}
                onChange={handInput}
                name="email"
                required
              />
              {!errorMail && (
                <span style={{ color: "red" }}>ingrese un email válido</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput5">
              <Form.Label>Ingrese repetir email ingresado</Form.Label>
              <Form.Control
                type="repeatmail"
                placeholder="name@example.com"
                value={repeatMail}
                onChange={handleEmail2Change}
                name="repeatemail"
                required
              />
              {!matchEmail && (
                <span style={{ color: "red" }}>
                  Deben coincidir los email ingresados
                </span>
              )}
            </Form.Group>
          </div>
          <Button
            variant="outline-danger"
            onClick={createOrder}
            type="submit"
            disabled={validateForm}
          >
            Confirmar compra
          </Button>
        </Form>
      </div>
      <TableProducts product={products}></TableProducts>
      {confirmation !== undefined ? (
        <Tost respuesta={confirmation}></Tost>
      ) : null}
    </>
  );
};

export default Checkout;
