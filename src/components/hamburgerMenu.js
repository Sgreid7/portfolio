import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Portrait from "../images/Portrait.jpg"

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(true)

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
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.95;
  visibility: hidden;

  &.show {
    visibility: visible;
  }

  .menu-branding,
  .menu-nav {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    float: left;
    width: 50%;
    height: 100vh;
  }

  .menu-nav {
    margin: 0;
    padding: 0;
    background: rgb(60, 60, 60);
    list-style: none;
    transform: translate3d(0, -100%, 0);
    transition: 0.5s ease;

    &.show {
      /* slide in from the top */
      transform: translate3d(0, 0, 0);
    }
  }

  .menu-branding {
    background: rgb(47, 48, 97);
    transform: translate3d(0, 100%, 0);
    transition: 0.5s ease;

    &.show {
      transform: translate3d(0, 0, 0);
    }

    .portrait {
      width: 15rem;
      height: 15rem;
      background: url(${Portrait});
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      border: 0.2rem solid #0e34a0;
      z-index: 4;
    }
  }

  .nav-item {
    transform: translate3d(37rem, 0, 0);
    transition: 0.5s ease;
    transition-delay: 0.1s;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  & a {
    color: #fff;
    text-decoration: none;
  }
`
