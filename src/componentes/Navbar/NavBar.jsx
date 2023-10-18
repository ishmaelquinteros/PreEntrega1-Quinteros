import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';

const NavBar = () => {
    return (
    <div className='NavContainer'>
        <div className='titulo-container'>
            <h1 className='titulo-principal'>Feria calzados niños</h1>
        </div>
        <div className='categorias-container'>
            <h2 className='categorias-titulo'>Categorias</h2>
            <ul className='categorias-lista'>
              <li>Zapatillas</li> 
              <li>Zapatos</li>
              <li>Sandalias</li> 
            </ul>;
        </div>
    <CartWidget />
    </div>
    )
}

export default NavBar;