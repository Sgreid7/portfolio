import React from "react"
import Layout from "../components/layout"
import devices from "../utils/devices"
import Headshot from "../images/headshot.jpg"
import { UilTachometerFastAlt } from "@iconscout/react-unicons"
import { UilExpandArrowsAlt } from "@iconscout/react-unicons"
import { UilLightbulbAlt } from "@iconscout/react-unicons"
import { UilRocket } from "@iconscout/react-unicons"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const About = () => {
  return (
    <AboutWrapper>
      <div className="title">
        <h2>About</h2>
      </div>

      <div className="underline"></div>

      <div className="squares">
        <div className="square">
          <UilTachometerFastAlt size="50" color="#05C2C9" />
          <p className="title">Speed</p>
          <p>Fast load speeds are my priority.</p>
        </div>
        <div className="square">
          <UilExpandArrowsAlt size="50" color="#05C2C9" />
          <p className="title">Responsive</p>
          <p>My projects scale on all device sizes.</p>
        </div>
        <div className="square">
          <UilLightbulbAlt size="50" color="#05C2C9" />
          <p className="title">Intuitive</p>
          <p>Designed for user-friendly UI/UX.</p>
        </div>
        <div className="square">
          <UilRocket size="50" color="#05C2C9" />
          <p className="title">Dynamic</p>
          <p>I strive to create websites that come to life.</p>
        </div>
      </div>

      <div className="image">
        <animated.img src={Headshot} alt="My headshot" />
      </div>

      <div className="bio">
        <p>
          In 2020, I graduated from Suncoast Developer's Guild, a 3-month
          intensive code school, where I learned full-stack web development. I
          delivered my thesis project on-time using React for the front-end and
          C# .NET for the back-end, to create a satellite tracker app. I was the
          only person in my cohort who chose to use a framework outside of what
          was being taught (Gatsby JS), which I self-taught alongside the rest
          of the curriculum. I'm a naturally curious person and I’ve found that
          software development is a way for me to continuously learn while also
          solving real-world problems. I believe that preparation is the key to
          creating user-friendly web applications and I bring that attitude to
          every project I take on.
        </p>
      </div>
    </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
  background: #fff;
  color: #000;
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

  & .squares {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    & .square {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      max-width: 15rem;
      min-height: 10rem;
      width: 100%;
      background: #fff;
      padding: 1rem;
      box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      will-change: transform;
      border-radius: 1rem;

      & .icon {
        width: 10rem;
        height: 10rem;
        color: red;
      }

      & p {
        margin: 0;
        text-align: center;
      }

      & .title {
        font-size: 1.05rem;
        font-weight: bold;
        margin: 0.5rem 0;
      }

      &:hover {
        box-shadow: 0px 15px 40px -10px rgba(0, 0, 0, 0.4);
      }
    }
  }

  & .image {
    display: flex;
    justify-content: center;

    & img {
      max-width: 12%;
      border-radius: 50%;
      margin: 0;
      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.5s;
      will-change: transform;
      border: 5px solid white;

      &:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
      }
    }
  }

  & .bio {
    text-align: center;
    width: 40rem;
    margin: 1.5rem 0;

    p {
      margin-bottom: 0;
      font-size: 1.05rem;
    }
  }
`
