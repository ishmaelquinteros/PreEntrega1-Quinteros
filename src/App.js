import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
  <NavBar />
  <ItemListContainer gretting="Tienda de articulos nuevos y usados"/>    
  </div>
  );
}

export default App;
