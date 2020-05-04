import React from "react"
import { Link } from "gatsby"
import devices from "../utils/devices"
import Portrait from "../images/Portrait.jpg"
import SEO from "../components/seo"
import HamburgerMenu from "../components/hamburgerMenu"
import styled from "styled-components"

const About = () => {
  return (
    <>
      <SEO title="About Me" />
      <AboutWrapper>
      <HamburgerMenu />
        <header>
          <h1>
            About <span>Me</span>
          </h1>
          <h2>A little bit about myself...</h2>
        </header>

        <div className="about-info">
          <div className="portrait"></div>
          <div className="bio">
            <h3>BIO</h3>
            <p>
              I just graduated from Suncoast Developer's Guild, a 3 month
              intensive code school, learning full-stack web development. I'm a
              naturally curious person with an affinity for creating
              user-friendly web applications. I enjoy creating and designing
              products with the purpose of solving the user's problems and
              satisfying them as well. I am a firm believer that preparation is
              the key to achieving one's goals and delivering exceptional
              results. I enjoy a good challenge, and I'm not hesitant to start
              learning new technologies that I can start to implement in my
              craft.
            </p>
          </div>
        </div>
      </AboutWrapper>
    </>
  )
}

export default About

const AboutWrapper = styled.section`
  background: rgb(52, 52, 52);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // overflow-x: hidden;

  header {
    text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-style: italic;
      padding-bottom: 0.3rem;
      border-bottom: 0.2rem solid #0e34a0;
    }
  }

  span {
    color: #0e34a0;
    text-shadow: 0.05rem 0.05rem 0.05rem #fff;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
  }

  .portrait {
    width: 8rem;
    height: 8rem;
    background: url(${Portrait});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 0.2rem solid #0e34a0;
  }

  .bio {
    margin-top: 1rem;
    text-align: center;
    width: 80vw;

    h3 {
      text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
      letter-spacing: 0.1rem;
    }

    p {
      padding: 1rem;
      border: 0.2rem solid #0e34a0;
      text-shadow: 0.08rem 0.08rem 0.08rem #0e34a0;
      border-radius: 0.2rem;
      background: rgb(70, 70, 70);
      -moz-box-shadow: inset 0 0 10px #000000;
      -webkit-box-shadow: inset 0 0 10px #000000;
      box-shadow: inset 0 0 10px #000000;
    }
  }

  @media (${devices.tablet}) {
    header {
      margin-top: 1rem;

      h1 {
        font-size: 3rem;
      }
    }

    .portrait {
      height: 10rem;
      width: 10rem;
    }
  }

  @media (${devices.laptop}) {
    height: 100vh;

    header {
      margin-top: 1rem;

      h1 {
        font-size: 4rem;
        text-shadow: 0.15rem 0.15rem 0.15rem #0e34a0;
      }
    }

    .about-info {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
    }

    .portrait {
      height: 15rem;
      width: 15rem;
    }

    .bio {
      width: 50vw;
    }
  }

  @media (${devices.laptopL}) {
    .bio {
      width: 30vw;

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.2rem;
        padding: 1.5rem;
        line-height: 1.8rem;
      }
    }

    .portrait {
      height: 20rem;
      width: 20rem;
    }
  }
`
