import React from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Project = ({ site, code, image, alt }) => {
  return (
    <Card>
      <Image src={image} alt={alt} />
      <div className="container">
        <a href={site}>
          <button>The Project</button>
        </a>
        <a href={code}>
          <button>The Code</button>
        </a>
      </div>
    </Card>
  )
}

export default Project

const Card = styled.section`
  text-align: center;
  width: 80%;
  margin: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  :hover {
    animation: 1.5s infinite hover;
    box-shadow: 0 0 1.3rem #dfdfdf;
  }

  .container {
    text-align: center;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
      margin: 0.2rem;
    }

    button {
      background: transparent;
      border: 0.05rem solid #fff;
      color: #fff;
      height: 2rem;
      width: 8rem;
      transition: 0.3s ease;

      :hover {
        background: #0e34a0;
        border: 0.05rem solid #0e34a0;
        transform: translateY(-0.2rem);
        box-shadow: 0 0.3rem 0.3rem #000;
      }
    }
  }

  @keyframes hover {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
  }
`

const Image = styled.img`
  margin: 0;
  border: 0.1rem solid #0e34a0;
  // width: 25vw;
  // width: 100%;
  height: 10rem;

  @media (${devices.tablet}) {

  }
`
