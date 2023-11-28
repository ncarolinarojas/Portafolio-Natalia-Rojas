import { NavLink } from "react-router-dom";
import '../Navbar/styles.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='principal'>
                <p>Portafolio</p>
            </ul>
            <ul className='options'>
                <li>
                    <NavLink to={'/about-me'}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to={'/projects'}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to={'/tools'}>Herramientas</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default  Navbar;