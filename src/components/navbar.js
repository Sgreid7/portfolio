/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Work</li>
        </a>
        <a href="/">
          <li>Contact</li>
        </a>
      </ul>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 5;
  padding: 1rem 0;
  top: 0;
  width: 100%;
  /* background: #020103; */
  background: #252934;
  font-family: "Mulish", sans-serif;
  border-bottom: 0.125rem solid #0018a8;

  & ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    /* background: #020103; */
    background: #252934;
    margin: 0;

    & a {
      text-decoration: none;
      color: #fff;
      margin: 0 1rem;
      cursor: pointer;
    }

    & li {
      cursor: pointer;
      margin: 0;
      font-size: 0.9rem;
      text-transform: uppercase;
      text-shadow: 0.1rem 0.1rem 0.1rem #000;
    }
  }
`
