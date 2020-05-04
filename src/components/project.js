import React from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Project = ({ site, code, image, alt }) => {
  return (
    <Container>
      <Image src={image} alt={alt} />
      <div className="backside">
        <a href={site}>
          <button>The Project</button>
        </a>
        <a href={code}>
          <button>The Code</button>
        </a>
      </div>
    </Container>
  )
}

export default Project

const Container = styled.section`
  text-align: center;
  position: relative;
  margin: 0;

  .backside {
    text-align: center;
    /* width: 100%;
    height: 100%; */
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .backside:hover {
    opacity: 1;
  }
`

const Image = styled.img`
  margin: 0;
  border: 0.2rem solid #0e34a0;
  width: 25vw;
  height: 10rem;
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  backface-visibility: hidden;

  :hover {
    opacity: 0.3;
  }
`
