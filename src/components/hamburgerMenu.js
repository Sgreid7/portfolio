import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <>
      <Header>
        <MenuButton
          className={`menu-btn ${!showMenu ? "close" : "show"}`}
          onClick={toggleMenu}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </MenuButton>
        <Nav className={`menu ${!showMenu ? "show" : "close"}`}>
          <div className={`menu-branding ${!showMenu ? "show" : "close"}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${!showMenu ? "show" : "close"}`}>
            <li className={`nav-item ${!showMenu ? "show" : "close"}`}>
              <Link className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${!showMenu ? "show" : "close"}`}>
              <Link className="nav-link">About Me</Link>
            </li>
            <li className={`nav-item ${!showMenu ? "show" : "close"}`}>
              <Link className="nav-link">My Work</Link>
            </li>
            <li className={`nav-item ${!showMenu ? "show" : "close"}`}>
              <Link className="nav-link">Contact Me</Link>
            </li>
          </ul>
        </Nav>
      </Header>
    </>
  )
}

export default HamburgerMenu

const Header = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
`

const MenuButton = styled.div`
  position: absolute;
  z-index: 3;
  right: 2.1rem;
  top: 2.1rem;
  cursor: pointer;
  transition: 0.5s ease;

  &.close {
    transform: rotate(180deg);

    .btn-line {
      /* line 1 rotate */
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      /* line 2 hide */
      &:nth-child(2) {
        opacity: 0;
      }
      /* line 3 rotate */
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }

  .btn-line {
    width: 1.75rem;
    height: 0.18rem;
    margin: 0 0 5px 0;
    background: #fff;
    transition: 0.5s ease;
  }
`

const Nav = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
