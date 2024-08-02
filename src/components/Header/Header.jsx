import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../assets/img/logo-header.png'
import { Icon } from '@iconify/react'
import hamburgerIcon from '@iconify/icons-ci/hamburger-md'
import closeIcon from '@iconify/icons-ci/close-md'
import './_header.scss'
import Button from '../Button/Button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="header">
        <img src={Logo} alt="Logotipo InovaTech" />
        <button className="hamburger" onClick={toggleMenu}>
          <Icon
            icon={menuOpen ? closeIcon : hamburgerIcon}
            width={32}
            height={32}
          />
        </button>
        <nav className={`navBar ${menuOpen ? 'open' : ''}`}>
          <ul className="header-list">
            <li>
              <Link className="link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about" onClick={toggleMenu}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link className="link" to="/courses" onClick={toggleMenu}>
                Cursos
              </Link>
            </li>
            <li>
              <Link className="link" to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              {menuOpen && (
                <Link className="link" to="/contact" onClick={toggleMenu}>
                  Contato
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <div className="contact-button">
          <Button to="/contact" name="Contato" />
        </div>
        <Outlet />
      </div>
    </>
  )
}
