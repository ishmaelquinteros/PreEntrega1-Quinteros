import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
// Import the functions you need from the SDKs you need

function App() {
  return (
  <BrowserRouter>
  <CartProvider>
  <NavBar />
  <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoria" element={<ItemListContainer />}/>
    <Route path="/item/:id" element={<ItemDetailContainer />}/>
    <Route path="/Cart" element={<Cart />}></Route>
    <Route path="/Checkout" element={<Checkout />}></Route>
    <Route path="*" element={<h2>Error ruta no encontrada</h2>}></Route>    
  </Routes>
  </CartProvider>
  </BrowserRouter>
  );
}

export default App;
