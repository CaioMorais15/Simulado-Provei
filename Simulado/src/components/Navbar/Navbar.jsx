import "./Navbar.css";
import logo from "../../assets/logo.png";
import vector from "../../assets/vector.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.JS";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#"></a>

        <img className="mt-4" src={logo} alt="Logo" width="85" height="85" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              Veiculos
            </a>
            <a className="nav-link" href="#">
              Como Funciona
            </a>
            <a className="nav-link" href="#">
              O que está incluso?
            </a>
          </div>
        </div>
        <Link
          style={{ color: "black", width: "6em", padding: "2em" }}
          to={"../Login"}
        >
          Login
        </Link>
        <div style={{ margin: "right" }} className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle m-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={vector} height="24px"></img>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
