import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ cartItems, onEmptyCart }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MarketThundra</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-100" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/clips">Clips</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia">Historia</Link>
            </li>
          </ul>
          <div className="d-flex">
            <CartWidget itemCount={cartItems} onEmptyCart={onEmptyCart} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
