import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import Tampa from "../images/tampa.jpg"

import devices from "../utils/devices"
import HamburgerMenu from "../components/hamburgerMenu"
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
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://github.com/Sgreid7">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/SamGreider">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </HomeWrapper>
  </>
)

export default IndexPage

const HomeWrapper = styled.header`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  line-height: 1;
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
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 4rem;
  }

  span {
    color: #2f3061;
    text-shadow: 0.1rem 0.1rem 0.1rem #fff;
  }

  h1,
  h2 {
    margin: 0;
    font-weight: 400;
  }

  h2 {
    font-style: italic;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem;
    background: rgba(52, 52, 52, 0.3);
  }

  .icons {
    margin-top: 10rem;
    padding: 0;
    position: absolute;
    display: flex;

    a {
      position: relative;
      margin: 0 1rem;
      padding: 0.4rem;
      transition: 0.5s ease;
      color: #fff;
      background: #2f3061;
      border-radius: 50%;
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        /* width: 100%; */
        /* height: 100%; */
        border-radius: 50%;
        background: #0e34a0;
        transition: 0.5s ease;
        transform: scale(0.9);
        z-index: -1;
      }

      &:hover::before {
        transform: scale(1.2);
        box-shadow: 0 0 1rem #0e34a0;
        filter: blur(3px);
      }

      &:hover {
        color: #dfdfdf;
        box-shadow: 0 0 1rem #0e34a0;
        text-shadow: 0 0 1rem #0e34a0;
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

  @media (${devices.tablet}) {
    h2 {
      margin-bottom: 0;
    }

    .icons {
      margin-top: 6rem;
    }
  }

  @media (${devices.laptop}) {
    h1 {
      font-size: 6rem;
      margin-top: 10vh;
      text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
      line-height: 1.5;
    }

    h2 {
      margin-bottom: 1rem;
      padding: 0.2rem 1rem;
      background: rgba(52, 52, 52, 0.3);
    }

    .icons {
      margin-top: 9rem;
    }
  }

  @media (${devices.laptopL}) {
    h1 {
      font-size: 8rem;
    }
  }
`
