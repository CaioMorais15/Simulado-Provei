import "./Navbar.css";
import logo from "../../assets/logo.png";
import vector from "../../assets/vector.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.JS";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-white"> {/* Adicionei bg-primary para deixar o fundo azul */}
      <div className="container">
        <a className="navbar-brand" href="#">
        </a>

        <img
          className="mt-2"
          src={logo}
          alt="Logo"
          width="90"
          height="90"
        />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/Veiculos" style={{ color:'black',}} >
              Veiculos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Incluso" style={{ color: 'black', }}>
                O que está incluso?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Como Funciona" style={{ color: 'black', }} >

                Como Funciona
              </Link>
            </li>
          </ul>
                </div>
                <div className="text-white" style={{ width: "6em", padding: '2em' }} to={"../Login"}>Login</div> {/* Text-white aqui também */}
                <div style={{ margin: "right" }} className="dropdown">
                    <button className="btn m-3" type="button" aria-expanded="false">
                        <img src={vector} height="24px" alt="Cidade" />
                        <a className="text-white">Cidade</a> {/* Text-white para o link da cidade */}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
