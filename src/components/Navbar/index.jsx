import { NavLink } from "react-router-dom";
import '../Navbar/styles.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='principal'>
            <li>
                    <NavLink className={isActive =>
                        (isActive ? 'link' : 'undefined')
                    } to={'/'}>Portafolio</NavLink>
                </li>
            </ul>
            <ul className='options'>
                <li>
                    <NavLink className={isActive =>
                        (isActive ? 'link' : 'undefined')
                    } to={'/about-me'}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink className={isActive =>
                        (isActive ? 'link' : 'undefined')
                    } to={'/projects'}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink className={isActive =>
                        (isActive ? 'link' : 'undefined')
                    } to={'/tools'}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;