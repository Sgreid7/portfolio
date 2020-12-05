import React, { useState } from "react"
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
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <AboutWrapper>
      <div className="title">
        <h2>About</h2>
      </div>

      <div className="underline"></div>

      <div className="container">
        <div className="squares">
          <div className="square middle" onClick={() => set(state => !state)}>
            <UilTachometerFastAlt size="50" color="#05C2C9" className="icon" />
            <p className="title">Speed</p>
            <p className="text">Fast load speeds are my priority.</p>
          </div>
          <div className="square middle" onClick={() => set(state => !state)}>
            <UilExpandArrowsAlt size="50" color="#05C2C9" className="icon" />
            <p className="title">Responsive</p>
            <p className="text">My projects scale on all device sizes.</p>
          </div>
          <div className="square middle" onClick={() => set(state => !state)}>
            <UilLightbulbAlt size="50" color="#05C2C9" className="icon" />
            <p className="title">Intuitive</p>
            <p className="text">Designed for user-friendly UI/UX.</p>
          </div>
          <div className="square middle" onClick={() => set(state => !state)}>
            <UilRocket size="50" color="#05C2C9" className="icon" />
            <p className="title">Dynamic</p>
            <p className="text">
              I strive to create websites that come to life.
            </p>
          </div>
        </div>

        <div className="bio">
          <img src={Headshot} alt="My headshot" />
          <p>
            In 2020, I graduated from Suncoast Developer's Guild, a 3-month
            intensive code school, where I learned full-stack web development. I
            delivered my thesis project on-time using React for the front-end
            and C# .NET for the back-end to create a satellite tracker app. I
            was the only person in my cohort who chose to use a framework
            outside of what was being taught (Gatsby JS), which I self-taught
            alongside the rest of the curriculum. I'm a naturally curious person
            and I’ve found that software development is a way for me to
            continuously challenge myself while also solving real-world
            problems. I believe that preparation is the key to creating
            user-friendly web applications, and I bring that attitude to every
            project I take on.
          </p>
        </div>
      </div>
    </AboutWrapper>
  )
}

export default About

const AboutWrapper = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Mulish", sans-serif;
  padding: 2rem 0;
  color: #444649;
  position: relative;

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
    margin: 3rem 0;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-evenly;
    /* transform: translate(-50%, -50%); */

    & .square {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* position: absolute; */
      max-width: 13rem;
      min-height: 10rem;
      width: 100%;
      background: #fff;
      margin: 0 0.5rem;
      padding: 1rem;
      box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
      will-change: transform, opacity;
      cursor: pointer;
      border-radius: 1rem;
      border: 3px solid #05c2c9;

      & .icon {
      }

      & p {
        margin: 0;
      }

      & .title {
        font-size: 1.15rem;
        font-weight: bold;
        margin: 0.5rem 0;
      }

      & .text {
        text-align: center;
        /* opacity: 0; */
        /* max-height: 0; */
        /* transition: all 0.3s ease; */
      }

      &:hover {
        box-shadow: 0px 15px 40px -10px rgba(0, 0, 0, 0.4);
        cursor: pointer;

        /* & .text {
          transition: all 0.3s ease;
          opacity: 1;
          max-height: 40px;
        } */
      }
    }
  }

  & .bio {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    p {
      margin: 0 2rem;
      font-size: 1.05rem;
      width: 50%;
      text-align: center;
    }

    & img {
      max-width: 18%;
      border-radius: 50%;
      margin: 0 2rem;
      box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.5s;
      will-change: transform;
    }
  }
`
