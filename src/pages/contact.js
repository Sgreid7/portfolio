import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import HamburgerMenu from "../components/hamburgerMenu"
import Layout from "../components/layout"

import devices from "../utils/devices"

const contact = () => {
  return (
    <Layout>
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
              <span className="media">Email:</span> sam.greider7@gmail.com
            </a>
          </div>
          <div className="phone">
            <a href="tel:+1-239-246-1640">
              <span className="media">Phone Number:</span> (239) 246-1640
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/samgreider/">
              <span className="media">LinkedIn:</span>{" "}
              linkedin.com/in/samgreider/
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <h3>Leave a message</h3>
          <input type="hidden" name="bot-field" />

          <div className="textbox">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="text">
            <textarea name="message" placeholder="Message"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </ContactWrapper>
    </Layout>
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
  align-items: center;

  header {
    text-align: center;
    margin-top: 2rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;

    h1 {
      font-size: 2.5rem;
      font-family: "Merriweather", sans-serif;
    }

    h2 {
      font-style: italic;
      padding-bottom: 0.3rem;
      border-bottom: 0.2rem solid #0e34a0;
      font-family: "Merriweather", sans-serif;
    }

    span {
      color: #0e34a0;
      text-shadow: 0.05rem 0.05rem 0.05rem #fff;
    }
  }

  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Merriweather", sans-serif;
    font-size: 1.1rem;

    div {
      border: 3px solid #dfdfdf;
      padding: 1.5rem 2.5rem;
      margin: 1rem;
      transition: 0.3s ease;

      .media {
        color: #fff;
        text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
        font-size: 1.2rem;
      }

      :hover {
        background: #2f3061;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem;
    width: 80vw;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    border: 0.2rem solid #0e34a0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: "Merriweather", sans-serif;

    .textbox {
      position: relative;
      text-align: center;
      padding: 0.5rem 0;
      margin: 0.5rem 0;

      input {
        border: none;
        background: transparent;
        outline: none;
        color: #fff;
        font-size: 1.1rem;
        margin: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 0.1rem solid #fff;

        :focus {
          border-bottom: 0.1rem solid #0e34a0;
        }
      }
    }

    button {
      position: relative;
      margin-top: 0.5rem;
      width: 75%;
      background: transparent;
      border: 0.2rem solid #0e34a0;
      height: 2.5rem;
      color: #fff;
      cursor: pointer;
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      transition: 0.3s ease;
      border-radius: 0.05rem;
      z-index: 1;
      font-family: "Merriweather", sans-serif;

      &:hover {
        color: #fff;
        border: 0.2rem solid #dfdfdf;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0e34a0;
        transition: 0.3s ease;
        z-index: -1;
      }
    }

    .submit-btn::after {
      transform: scaleX(0);
      transform-origin: left;
    }

    .submit-btn:hover::after {
      transform: scaleX(1);
      transform-origin: right;
    }

    .text {
      margin: 1rem 0;

      textarea {
        outline: none;
        resize: none;
        border: none;
        border-bottom: 0.1rem solid #fff;
        border-radius: 0.1rem;
        background: transparent;
        color: #fff;
        padding: 0.5rem;
        font-size: 1.1rem;
        overflow: auto;

        :focus {
          border-bottom: 0.1rem solid #0e34a0;
        }
      }
    }

    h3 {
      font-size: 1.5rem;
      text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
      margin-bottom: 1rem;
      font-family: "Merriweather", sans-serif;
    }
  }

  @media (${devices.tablet}) {
    header {
      h1 {
        font-size: 3rem;
      }
    }

    form {
      h3 {
        font-size: 2rem;
      }
    }
  }

  @media (${devices.laptop}) {
    header {
      h1 {
        font-size: 4rem;
      }
    }

    form {
      display: flex;

      .textbox {
        input {
          margin: 0 2rem;
        }
      }

      textarea {
        width: 50vw;
        height: 30vh;
      }

      button {
        width: 30vw;
      }
    }
  }
`
