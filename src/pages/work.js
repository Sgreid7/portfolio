import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import HamburgerMenu from "../components/hamburgerMenu"
import devices from "../utils/devices"

const Work = () => {
  return (
    <>
      <SEO title="My Work" />
      <HamburgerMenu />
      <ContentWrapper>
        <h1>
          My <span>Work</span>
        </h1>

        <div className="projects">
          <div className="item"></div>
        </div>
        <footer>
          Made by <Link to="/">Sam Greider</Link> &copy; 2020
        </footer>
      </ContentWrapper>
    </>
  )
}

export default Work

const ContentWrapper = styled.section`
  height: 100vh;
  background: rgb(52, 52, 52);
  color: #fff;
  text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;

  h1 {
    font-size: 2.5rem;
  }

  span {
    color: #0e34a0;
    text-shadow: 0.05rem 0.05rem 0.05rem #fff;
  }

  footer {
    text-align: center;
    background: #000;
    border-top: 0.2rem solid #0e34a0;
    padding: 0.5rem;
    width: 100%;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`
