import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';


const NavBar = () => {

    return (
    <div className='NavContainer'>
        <Stack direction="horizontal" className='titulo-container' gap={0}>
            <Link to={"/"}>
            <h1 className='titulo-principal'>Feria articulos</h1>
            </Link>
        </Stack>
        <div className='categorias-container'>
            <ul className='categorias-lista'>

              <li className='categorias-lista-option'>
                <Link to={"/category/calzado"}>
                    <Button variant="outline-danger">Calzado</Button> 
                </Link></li>

              <li className='categorias-lista-option'>
                <Link to={"/category/jugueteria"}>
                <Button variant="outline-danger">Juguetes</Button></Link>
                </li>

              <li className='categorias-lista-option'>
              <Link to={'/category/indumentaria'}>
                <Button variant="outline-danger">Indumentaria</Button></Link>
                </li>                 
            </ul>
        </div>
    <CartWidget />
    </div>
    )
}

export default NavBar;