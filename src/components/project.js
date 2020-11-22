import React, { useState } from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Project = ({ site, code, image, alt, desc }) => {
  return (
    <Card>
      <img src={image} alt={alt} />
      <div className="overlay overlayTop">
        <div className="text">
          <h4 className="title">{alt}</h4>
          <p className="desc">{desc}</p>
          <button>Learn More</button>
        </div>
      </div>
      {/* <a href={site}>
        <button>Project</button>
      </a>
      <a href={code}>
        <button>Code</button>
      </a> */}
    </Card>
  )
}

export default Project

const Card = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25rem;
  max-height: 20rem;
  cursor: pointer;
  margin: 2rem 0;

  img {
    max-width: 100%;
    height: 100%;
    width: 100%;
    margin: 0;
  }

  & .overlay {
    position: absolute;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background: #f5f5f5;
  }

  & .overlayTop {
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
  }

  & .text {
    color: #444649;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    display: none;

    & h4,
    p {
      margin: 0;
    }

    & .desc {
      color: #e31b6d;
    }
  }

  button {
    background: #f5f5f5;
    border: 0.1rem solid #e31b6d;
    outline: none;
    text-transform: uppercase;
    width: 8rem;
    padding: 0.25rem;
    transition: 0.4s ease;
    margin-top: 2rem;
    cursor: pointer;
  }

  &:hover {
    & .overlay {
      opacity: 1;
    }

    & .overlayTop {
      height: 100%;
    }

    & .text {
      display: block;
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
