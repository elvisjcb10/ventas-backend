// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="navbar-nav">
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/productos" className="nav-link">Productos</NavLink>
        <NavLink to="/clientes" className="nav-link">Clientes</NavLink>
        <NavLink to="/ventas" className="nav-link">Ventas</NavLink>
        <NavLink to="/" className="nav-link">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
