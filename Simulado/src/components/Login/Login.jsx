import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png";

export const Login = () => {
  const [pagina, setPagina] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Preencha todos os campos!");
      return;
    } else if (email == "felipe" && password == "1234") {
      navigate("/Incluso");
    } else {
      alert("Usuário ou senha incorretos.");
      setEmail("");
      setPassword("");
    }
    console.log("Login attempted with email:", email, "password:", password);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.divLogin}>
          <img src={Logo} className={styles.logo} />
          <div id="Logo">
            <h1 className={styles.caixa}>Bem-Vindo à PraJaCarros</h1>
            <div id="textoLogin">
              <h1 className={styles.tituloEmail}>Login</h1>
              <div id="Login">
                <input
                  className={styles.campoEmail}
                  type="email"
                  placeholder="E-Mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <h1 className={styles.tituloSenha}>Senha</h1>
              <div id="Senha">
                <input
                  className={styles.campoEmail}
                  type="password"
                  placeholder="Senha..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <p style={{ padding: "20px" }}>
                <input type="checkbox" /> Ao criar uma conta, concordo com
                os Termos de Serviço e a Política de Privacidade da PRAJACARROS
              </p>
              <div id="Entrar">
                <button className={styles.campoEntrar} onClick={handleLogin}>
                  Entrar
                </button>
                <p>
                  Ainda não tem uma conta?
                  <Link to={"../Cadastrar"}>Crie uma! </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
