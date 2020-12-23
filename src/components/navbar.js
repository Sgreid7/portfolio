/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={0}
            isDynamic={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={0}
            isDynamic={true}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={0}
            isDynamic={true}
          >
            Contact
          </Link>
        </li>
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
  /* border-bottom: 0.125rem solid #0018a8; */
  border-bottom: 0.125rem solid #e31b6d;

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
