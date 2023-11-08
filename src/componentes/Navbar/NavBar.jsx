import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';
import fototitulo from '../../foto-calzados-1.jpg';
import fotonene from '../../Zapato-infantil-1024x846.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className='NavContainer'>
        <div className='titulo-container'>
            <img alt='foto nav' src={fototitulo} className='titulo-imagen'></img>
            <h1 className='titulo-principal'>Feria articulos</h1>
            <img alt='foto nav' src={fotonene} className='titulo-imagen'></img>
        </div>
        <div className='categorias-container'>
            <h2 className='categorias-titulo'>Categorias</h2>
            <ul className='categorias-lista'>

              <li className='categorias-lista-option'>
                <Link to={"/category/men's-clothing"}>
                    <Button variant="outline-danger">Hombre</Button> 
                </Link></li>

              <li className='categorias-lista-option'>
                <Link to={"/category/women's-clothing"}>
                <Button variant="outline-danger">Mujer</Button></Link>
                </li>

              <li className='categorias-lista-option'>
              <Link to={'/category/jewelery'}>
                <Button variant="outline-danger">Joyas</Button></Link>
                </li>
              
                <li className='categorias-lista-option'>
                <Link to={'category/electronics'}>
                <Button variant="outline-danger">Electronicos</Button></Link>
                </li> 
            </ul>
        
        </div>
    <CartWidget />
    </div>
    )
}

export default NavBar;