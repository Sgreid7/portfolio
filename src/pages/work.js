import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Project from "../components/project"
import HamburgerMenu from "../components/hamburgerMenu"
import devices from "../utils/devices"
import Spacebook from "../images/spacebook.png"
import ColorPicker from "../images/colorpicker.png"
import Hangman from "../images/hangman.png"
import Spooky from "../images/spooky.png"
import Movies from "../images/movies.png"

const Work = () => {
  return (
    <>
      <SEO title="My Work" />
      <HamburgerMenu />
      <ContentWrapper>
        <header>
          <h1>
            My <span>Work</span>
          </h1>
          <h2>Check out some of my projects...</h2>
        </header>

        <div className="projects">
          {/* <div className="item"> */}
          <Project
            site="https://satellite-spacebook.netlify.app/"
            code="https://github.com/Sgreid7/SpaceBook"
            image={Spacebook}
            alt="Spacebook Project"
          />

          <Project
            site="https://hooks-colorpicker-sam.netlify.app/"
            code="https://github.com/Sgreid7/hooks-colorpicker"
            image={ColorPicker}
            alt="Color Picker Project"
          />

          <Project
            site="https://snowman-sam.netlify.app/"
            code="https://github.com/Sgreid7/snowman"
            image={Hangman}
            alt="Snowman Hangman Project"
          />

          <Project
            site="https://spookyportfolio-sam.netlify.app/"
            code="https://github.com/Sgreid7/spookyportfolio"
            image={Spooky}
            alt="Spooky Portfolio Project"
          />

          <Project
            site="https://1989-movies-sam.netlify.app/"
            code="https://github.com/Sgreid7/1989-movies"
            image={Movies}
            alt="1989 Movies Project"
          />
          {/* </div> */}
        </div>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default Work

const ContentWrapper = styled.section`
  height: 100%;
  background: rgb(52, 52, 52);
  color: #fff;
  text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    text-align: center;
  }

  .projects {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-style: italic;
    padding-bottom: 0.3rem;
    border-bottom: 0.2rem solid #0e34a0;
  }

  span {
    color: #0e34a0;
    text-shadow: 0.05rem 0.05rem 0.05rem #fff;
  }

  @media (${devices.laptop}) {
  }
`
