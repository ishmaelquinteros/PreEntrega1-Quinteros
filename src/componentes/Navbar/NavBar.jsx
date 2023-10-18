import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';
import fototitulo from '../../foto-calzados-1.jpg';

const NavBar = () => {
    return (
    <div className='NavContainer'>
        <div className='titulo-container'>
            <img alt='foto nav' src={fototitulo} className='titulo-imagen'></img>
            <h1 className='titulo-principal'>Feria calzados niños</h1>
        </div>
        <div className='categorias-container'>
            <h2 className='categorias-titulo'>Categorias</h2>
            <ul className='categorias-lista'>
              <li className='categorias-lista-option'>Zapatillas</li> 
              <li className='categorias-lista-option'>Zapatos</li>
              <li className='categorias-lista-option'>Sandalias</li> 
            </ul>
        </div>
    <CartWidget />
    </div>
    )
}

export default NavBar;