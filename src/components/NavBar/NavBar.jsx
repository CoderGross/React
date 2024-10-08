import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {

return (

<nav className="navbar navbar-expand-lg bg-body-tertiary deco">
  <div className="container-fluid deco">
    <a className="navbar-brand" href="#">MarketThundra</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navdeco" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Clips</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Historia</a>
        </li>
      </ul>
    </div>
  </div>
  <div>
  <CartWidget />
  </div>
</nav>

)
}
export default NavBar