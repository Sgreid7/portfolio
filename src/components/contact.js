import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import HamburgerMenu from "../components/hamburgerMenu"
import Layout from "../components/layout"

import devices from "../utils/devices"

const contact = () => {
  return (
    <ContactWrapper>
      <div className="title">
        <h2>About</h2>
      </div>

      <div className="underline"></div>
    </ContactWrapper>
  )
}

export default contact

const ContactWrapper = styled.section`
  background: #252934;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Mulish", sans-serif;
  padding: 2rem 0;
  position: relative;

  .title {
    display: flex;
    justify-content: center;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }
  }

  & .underline {
    margin: 1rem 0;
    width: 4rem;
    border-radius: 0.25rem;
    border-bottom: 0.25rem solid #fff;
  }
`
