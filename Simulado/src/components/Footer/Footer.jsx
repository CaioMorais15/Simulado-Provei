import SocialLinks from "../SocialLinks/SocialLinks";
import "./Footer.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const Footer = ({ children, link }) => {
  return (
    <footer>
        <div className="informacoes row text-start">
        <ul>Veículos</ul>
        <ul>Como Funciona</ul>
        <ul>O que está incluso</ul>
        </div>
        
        <div className="quadro row text-end md-10">
        <h1>Horário de atendimento:</h1>
        <ul>De Segunda a sexta-feira, das 9h às 18h</ul>
        </div>
            <SocialLinks icon={"logo-github"} href={"https://github.com/CaioMorais15"} />
            <SocialLinks icon={"logo-linkedin"} href={"https://www.linkedin.com/in/caio-francisco-8412ab28a/"} />

    </footer>
  );
};
export default Footer;
