import Logo from "../../assets/logo.png"
import styles from "./Cadastro.module.css";
import { useState } from "react";

export const Cadastrar = () => {
  const [pagina, setPagina] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault(); 

    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      setError("Preencha todos os campos!");
      return;
    }

    console.log("Registration attempted with email:", email, "password:", password);
    
  };
return (
  <>
    <div className={styles.container}>
      <div className={styles.divCadastro}>
        <img src={Logo} className={styles.logo} />
        <div id="Logo">
          <h1 className={styles.caixa2}>Bem-Vindo à PRAJACARROS</h1>
          <div id="textoCadastro">
            <h1 className={styles.tituloEmail2}>Cadastrar-se</h1>
            <div id="Cadastro">
              <input
                className={styles.campoEmail2}
                type="email"
                placeholder="E-Mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <h1 className={styles.tituloSenha2}>Senha...</h1>
            <div id="Senha">
              <input
                className={styles.campoEmail2}
                type="password"
                placeholder="Senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h1 className={styles.tituloSenha2}>Confirmar Senha...</h1>
            <div id="Confirmar Senha">
              <input
                className={styles.campoEmail2}
                type="password"
                placeholder="Confirmar Senha..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p style={{ padding: "20px" }}>
              <input type="checkbox" /> Concordo com os Termos de Serviço e
              com a Política de Privacidade da PRAJACARROS
            </p>
            <div id="Cadastrar">
              <button className={styles.campoCadastrar} onClick={handleCadastro}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
};

export default Cadastrar;

