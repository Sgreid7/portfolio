import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import styled, { keyframes } from "styled-components"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import Navbar from "../components/navbar"
import Stars from "../components/stars"
import SEO from "../components/seo"
import Layout from "../components/layout"
import devices from "../utils/devices"

const IndexPage = () => (
  <Layout>
    <SEO title="Sam Greider" />
    <HomeWrapper>
      <Navbar />
      <Stars />
      <header>
        <h1>Hi, I'm Sam Greider.</h1>
        <h2>I'm a front-end developer.</h2>
        <button>
          View my work
          <FontAwesomeIcon icon={faArrowRight} size="sm" className="arrow" />
        </button>
      </header>
    </HomeWrapper>
    <About />
    <Projects />
    <Contact />
    <Footer>
      <div className="arrow">
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" className="angle" />
      </div>
      <div className="icons">
        {/* <div className="icon"> */}
        <a href="https://github.com/Sgreid7" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        {/* </div> */}
        {/* <div className="icon"> */}
        <a href="https://www.linkedin.com/in/samgreider/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" />
        </a>
        {/* </div> */}
      </div>
      <p>Sam Greider &#169; 2020</p>
    </Footer>
  </Layout>
)

export default IndexPage

const rotate = keyframes`
  transform: rotate()
`

const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  line-height: 1;
  margin: 0;
  width: 100%;
  color: #fff;
  padding: 4rem;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: "Mulish", sans-serif;

  & nav {
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
  }

  & header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 3;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      text-shadow: 0.125rem 0.125rem 0.125rem #000;
      /* #380a70 */
    }

    h1,
    h2 {
      font-weight: 400;
      font-family: "Mulish", sans-serif;
    }

    h2 {
      font-style: italic;
      font-size: 1.75rem;
      line-height: 1.2;
      margin-bottom: 1.25rem;
      padding: 0.2rem 1rem;
      text-shadow: 0.085rem 0.085rem 0.085rem #000;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: transparent;
      outline: none;
      color: #fff;
      border: 0.15rem solid #fff;
      border-radius: 0.15rem;
      width: 10rem;
      height: 2.75rem;
      font-size: 0.875rem;
      letter-spacing: 0.075rem;
      transition: 0.4s ease;

      & .arrow {
        transition: 0.4s ease;
        transform: rotate(0deg);
      }

      &:hover {
        background: #000;
        border: 0.15rem solid #000;
        box-shadow: 0 8px 4px -4px #fff;

        & .arrow {
          transform: rotate(90deg);
          transition: 0.4s ease;
        }
      }
    }
  }
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1b242f;
  color: #8f9aa7;
  height: 10rem;
  position: relative;
  font-family: "Mulish", sans-serif;

  & .arrow {
    background: #e31b6d;
    color: #fff;
    width: 2.25rem;
    height: 2.25rem;
    position: absolute;
    top: -1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    & .angle {
      margin-top: -0.05rem;
    }
  }

  & .icons {
    display: flex;
    justify-content: center;
    margin: 2rem 0 1rem 0;

    & a {
      color: #fff;
      text-decoration: none;
      margin: 0 1rem;
    }
  }
`
