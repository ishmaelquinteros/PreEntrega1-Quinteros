import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";

function App() {
  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoria" element={<ItemListContainer />}/>
    <Route path="/item/:id" element={<ItemDetail />}/>    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
