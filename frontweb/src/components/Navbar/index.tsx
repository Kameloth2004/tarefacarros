import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        
        <button className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#carrostop-navbar"
        aria-controls="carrostop-navbar"
        aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-8 main-menu">
            <li>
              <NavLink to="/" className="nav-home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/catalogo" className="nav-catalogo">CATÁLOGO</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
