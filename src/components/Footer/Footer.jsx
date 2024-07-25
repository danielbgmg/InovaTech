import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-header.png";
import "./_footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img src={Logo} alt="Logotipo InovaTech" />
        <nav className="navBar">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link className="link" to="/courses">
                Cursos
              </Link>
            </li>
            <li>
              <Link className="link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
