import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Tampa from "../images/tampa.jpg"
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons"

import HamburgerMenu from "../components/hamburgerMenu"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Welcome to My Portfolio" />
    <HamburgerMenu />
    <HomeWrapper>
      <h1>
        Sam <span>Greider</span>
      </h1>
      <h2>Web developer, Programmer, Lifelong Learner, Hockey Enthusiast</h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/samgreider/">
          <FontAwesomeIcon icon={faCoffee} size="lg" />
        </a>
        <a href="https://github.com/Sgreid7">
          <FontAwesomeIcon icon={faCoffee} size="lg" />
        </a>
        <a href="https://github.com/Sgreid7">
          <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
        </a>
      </div>
    </HomeWrapper>
  </>
)

export default IndexPage

const HomeWrapper = styled.header`
  box-sizing: border-box;
  line-height: 1.5;
  margin: 0;
  height: 100vh;
  color: #fff;
  /* Photo by Kody Cheyne on Unsplash */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Tampa});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 4rem;
  height: 100vh;
  overflow: hidden;

  span {
    color: #0e34a0;
    text-shadow: 0.15rem 0.15rem 0.15rem #fff;
  }

  h1,
  h2 {
    margin: 0;
    font-weight: 400;
  }

  h1 {
    font-size: 6rem;
    margin-top: 20vh;
    text-shadow: 0.15rem 0.15rem 0.15rem #0e34a0;
  }

  h2 {
    margin-bottom: 2rem;
    padding: 0.2rem 1rem;
    background: rgba(52, 52, 52, 0.3);
  }

  .icons {
    margin-top: 1rem;

    a {
      padding: 0.4rem;
      transition: 0.5s ease;
      color: #fff;

      &:hover {
        color: red;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    background: rgba(52, 52, 52, 0.9);
  }
`
