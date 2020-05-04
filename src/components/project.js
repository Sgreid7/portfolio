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
  margin: 0;
  background: #dfdfdf;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .container {
    text-align: center;
    /* width: 100%;
    height: 100%; */
    padding: 0.5rem 1rem;
  }
`

const Image = styled.img`
  margin: 0;
  border: 0.1rem solid #0e34a0;
  width: 25vw;
  height: 10rem;
`
