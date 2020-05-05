import React from "react"
import SEO from "../components/seo"
import HamburgerMenu from "../components/hamburgerMenu"
import styled from "styled-components"

const contact = () => {
  return (
    <>
      <SEO title="Contact Me" />
      <HamburgerMenu />
      <ContactWrapper>
        <header>
          <h1>
            Contact <span>Me</span>
          </h1>
          <h2>Here's how you can reach me...</h2>
        </header>
        <div className="boxes">
          <div className="email">
            <a href="mailto:sam.greider7@gmail.com">
              Email: sam.greider7@gmail.com
            </a>
          </div>
          <div className="phone">
            <a href="tel:+1-239-246-1640">(239) 246-1640</a>
          </div>
        </div>
        <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <div>
            <input type="text" name="name" placeholder="Name" autoComplete="off"/>
            <input type="email" name="email" placeholder="Email" autoComplete="off"/>
          </div>
       </form>
      </ContactWrapper>
    </>
  )
}

export default contact

const ContactWrapper = styled.section`
  min-height: 100vh;
  background: rgb(52, 52, 52);
  color: #fff;
  text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  header {
    text-align: center;
    margin-top: 2rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-style: italic;
      padding-bottom: 0.3rem;
      border-bottom: 0.2rem solid #0e34a0;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`
