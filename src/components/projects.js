import React from "react"
import styled from "styled-components"
import Project from "../components/project"
import devices from "../utils/devices"
import Spacebook from "../images/spacebook.png"
import ColorPicker from "../images/colorpicker.png"
import Hangman from "../images/hangman.png"
import Spooky from "../images/spooky.png"
import Movies from "../images/movies.png"
import Fade from "react-reveal/Fade"

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <Fade left>
        <div className="title">
          <h2>Projects</h2>
        </div>

        <div className="underline"></div>
      </Fade>

      <div className="projects">
        <Fade top>
          <Project
            site="https://satellite-spacebook.netlify.app/"
            code="https://github.com/Sgreid7/SpaceBook"
            image={Spacebook}
            alt="Spacebook"
            desc="React, Gatsby, C#"
          />
        </Fade>

        <Fade left>
          <Project
            site="https://hooks-colorpicker-sam.netlify.app/"
            code="https://github.com/Sgreid7/hooks-colorpicker"
            image={ColorPicker}
            alt="Color Picker"
            desc="React"
          />
        </Fade>

        <Fade right>
          <Project
            site="https://snowman-sam.netlify.app/"
            code="https://github.com/Sgreid7/snowman"
            image={Hangman}
            alt="Snowman Hangman"
            desc="React"
          />
        </Fade>

        <Fade left>
          <Project
            site="https://spookyportfolio-sam.netlify.app/"
            code="https://github.com/Sgreid7/spookyportfolio"
            image={Spooky}
            alt="Spooky Portfolio"
            desc="HTML/CSS"
          />
        </Fade>

        <Fade bottom>
          <Project
            site="https://1989-movies-sam.netlify.app/"
            code="https://github.com/Sgreid7/1989-movies"
            image={Movies}
            alt="1989 Movies"
            desc="React"
          />
        </Fade>
      </div>
    </ProjectsWrapper>
  )
}

export default Projects

const ProjectsWrapper = styled.section`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Mulish", sans-serif;
  padding: 2rem 0;
  color: #444649;

  .title {
    display: flex;
    justify-content: center;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #444649;
      margin: 0;
    }
  }

  & .underline {
    margin: 1rem 0;
    width: 4rem;
    border-radius: 0.25rem;
    border-bottom: 0.25rem solid #444649;
  }

  .projects {
    display: flex;
    flex-direction: column;
  }

  @media (${devices.laptop}) {
    .title {
      h2 {
        font-size: 2.25rem;
      }
    }

    & .underline {
      margin: 0.75rem 0;
      width: 3.75rem;
    }
  }

  @media (${devices.tablet}) {
    .title {
      h2 {
        font-size: 2rem;
      }
    }

    & .underline {
      width: 3.5rem;
    }
  }
`
