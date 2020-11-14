import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import About from "../components/about"
import styled, { keyframes } from "styled-components"

import devices from "../utils/devices"
import Navbar from "../components/navbar"
import Stars from "../components/stars"
import SEO from "../components/seo"
import Layout from "../components/layout"

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
      {/* <div className="icons">
        <a href="https://www.linkedin.com/in/samgreider/">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://github.com/Sgreid7">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div> */}
    </HomeWrapper>
    <About />
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
      /* font-weight: bold; */
      letter-spacing: 0.075rem;
      transition: 0.4s ease;
      -webkit-box-shadow: 0 10px 6px -6px #000;
      -moz-box-shadow: 0 10px 6px -6px #000;
      box-shadow: 0 10px 6px -6px #000;

      & .arrow {
        transition: 0.4s ease;
        transform: rotate(0deg);
      }

      &:hover {
        background: #000;
        border: 0.15rem solid #000;
        /* font-weight: bold; */

        & .arrow {
          transform: rotate(90deg);
          transition: 0.4s ease;
        }
      }
    }
  }

  .icons {
    padding: 0;
    position: absolute;
    display: flex;
    top: 31rem;

    a {
      position: relative;
      margin: 0 1rem;
      padding: 0.5rem;
      transition: 0.5s ease;
      background: transparent;
      color: #fff;
      border: 0.1rem solid #fff;
      border-radius: 50%;
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #0e34a0;
        transition: 0.5s ease;
        transform: scale(0.9);
        z-index: -1;
      }

      &:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 2rem #0e34a0;
      }

      &:hover {
        color: #0e34a0;
        background: #fff;
        border: 0.1rem solid #0e34a0;
        box-shadow: 0 0 1rem #0e34a0;
        text-shadow: 1rem 1rem 1rem #0e34a0;
      }
    }
  }

  /* &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    background: rgba(52, 52, 52, 0.9);
  } */
`
