import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const hamburgerMenu = () => {
  return (
    <>
      <Header>
        <MenuButton>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </MenuButton>
        <Nav>
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">My Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact Me</Link>
            </li>
          </ul>
        </Nav>
      </Header>
    </>
  )
}

export default hamburgerMenu

const Header = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
`

const MenuButton = styled.div``

const Nav = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
  }
`
