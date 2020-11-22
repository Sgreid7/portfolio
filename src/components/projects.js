import React from "react"
import styled from "styled-components"
import Project from "../components/project"
import devices from "../utils/devices"
import Spacebook from "../images/spacebook.png"
import ColorPicker from "../images/colorpicker.png"
import Hangman from "../images/hangman.png"
import Spooky from "../images/spooky.png"
import Movies from "../images/movies.png"
// import { useSpring, animated } from "react-spring"

const Projects = () => {
  // const [flipped, set] = useState(false)
  // const { transform, opacity } = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  //   config: { mass: 5, tension: 500, friction: 80 }
  // })

  return (
    <ProjectsWrapper>
      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="underline"></div>

      <div className="projects">
        <div className="space">
          <Project
            site="https://satellite-spacebook.netlify.app/"
            code="https://github.com/Sgreid7/SpaceBook"
            image={Spacebook}
            alt="Spacebook"
            desc="React, Gatsby, C#"
          />
        </div>

        <div className="middle">
          <div className="color">
            <Project
              site="https://hooks-colorpicker-sam.netlify.app/"
              code="https://github.com/Sgreid7/hooks-colorpicker"
              image={ColorPicker}
              alt="Color Picker"
              desc="React"
            />
          </div>

          <div className="hangman">
            <Project
              site="https://snowman-sam.netlify.app/"
              code="https://github.com/Sgreid7/snowman"
              image={Hangman}
              alt="Snowman Hangman"
              desc="React"
            />
          </div>
        </div>

        <div className="last">
          <div className="spooky">
            <Project
              site="https://spookyportfolio-sam.netlify.app/"
              code="https://github.com/Sgreid7/spookyportfolio"
              image={Spooky}
              alt="Spooky Portfolio"
              desc="HTML/CSS"
            />
          </div>

          <div className="movies">
            <Project
              site="https://1989-movies-sam.netlify.app/"
              code="https://github.com/Sgreid7/1989-movies"
              image={Movies}
              alt="1989 Movies"
              desc="React"
            />
          </div>
        </div>
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
    display: grid;
    /* grid-gap: 2rem; */
    grid-template-columns: repeat(3, 1fr);

    & .space {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    & .middle {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    & .last {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
`
