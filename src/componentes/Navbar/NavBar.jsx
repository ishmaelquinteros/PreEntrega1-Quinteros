import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';
import fototitulo from '../../foto-calzados-1.jpg';
import fotonene from '../../Zapato-infantil-1024x846.jpg'
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
    <div className='NavContainer'>
        <div className='titulo-container'>
            <img alt='foto nav' src={fototitulo} className='titulo-imagen'></img>
            <h1 className='titulo-principal'>Feria calzados niños</h1>
            <img alt='foto nav' src={fotonene} className='titulo-imagen'></img>
        </div>
        <div className='categorias-container'>
            <h2 className='categorias-titulo'>Categorias</h2>
            <ul className='categorias-lista'>
              <li className='categorias-lista-option'><Button variant="outline-danger">Zapatillas</Button></li> 
              <li className='categorias-lista-option'><Button variant="outline-danger">Botas</Button></li>
              <li className='categorias-lista-option'><Button variant="outline-danger">Zapatos</Button></li> 
            </ul>
        </div>
    <CartWidget />
    </div>
    )
}

export default NavBar;