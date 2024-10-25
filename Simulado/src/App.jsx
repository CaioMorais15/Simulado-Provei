import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Cadastro from "./components/Cadastro/Cadastro";
import Incluso from "./components/Incluso/Incluso";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Incluso" element={<Incluso />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}

export default App;
