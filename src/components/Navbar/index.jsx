import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import '../Navbar/styles.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark navbar-transparent'>
            <div className='container-fluid'>
                <NavLink className='navbar-brand fs-4 fw-bold' to='/'>Portafolio</NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'> {/* Cambié justify-content-end por ms-auto para alinear a la derecha */}
                        <li className='nav-item'>
                            <NavLink className='nav-link fs-5 fw-bold' to='/about-me'>Sobre mi</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link fs-5 fw-bold' to='/projects'>Proyectos</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link fs-5 fw-bold' to='/tools'>Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
