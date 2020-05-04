import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const footer = () => {
  return (
    <FooterSection>
      Made by <Link to="/">Sam Greider</Link> &copy; 2020
    </FooterSection>
  )
}

export default footer

const FooterSection = styled.footer`
  margin-top: auto;
  text-align: center;
  background: #000;
  border-top: 0.2rem solid #0e34a0;
  padding: 0.5rem;
  width: 100%;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }
`
