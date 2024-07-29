import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/img/logo-header.png";
import "./_header.scss";
import Button from "../Button/Button";

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logotipo InovaTech" />
        <nav className="navBar">
          <ul
            className="header-list
          "
          >
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
          </ul>
        </nav>
        <Button 
            to='/contact'
            name='Contato'
          />
        <Outlet />
      </div>
    </>
  );
}
