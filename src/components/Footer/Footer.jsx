import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo-header.png'
import './_footer.scss'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="navigation">
          <img src={Logo} alt="Logotipo InovaTech" className="logo" />

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
        <div className="copyright">
          <p>
            Copyright&copy; 2024 Inovatech - Desenvolvido por Inovatech - DESIGN{' '}
            <a href="https://www.linkedin.com/in/renataslessa" target="_blank">
              RENATA LESSA
            </a>{' '}
            E{' '}
            <a
              href="https://www.linkedin.com/in/mayaragoncalves-santos"
              target="_blank"
            >
              MAYARA GONÇALVES
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
