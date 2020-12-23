import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import HamburgerMenu from "../components/hamburgerMenu"
import Layout from "../components/layout"

import devices from "../utils/devices"

const contact = () => {
  return (
    <ContactWrapper id="contact">
      <div className="title">
        <h2>Contact</h2>
      </div>
      <div className="underline"></div>
      <p>Have a question or want to work together?</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          required
          autoComplete="off"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
        ></textarea>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
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

  & p {
    color: #04c2c9;
    margin: 1rem 0;
    font-size: 1rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    min-width: 500px;
    margin: 1rem auto 1rem auto;

    & input,
    textarea {
      background: #1e242c;
      border: 0;
      box-sizing: border-box;
      color: #fff;
      display: block;
      font-size: 12pt;
      margin-bottom: 3px;
      outline: none;
      padding: 10px 15px;
      width: 100%;
    }

    & .submit {
      display: flex;
      justify-content: flex-end;

      & button {
        background: transparent;
        color: #fff;
        border: 0.15rem solid #fff;
        outline: none;
        cursor: pointer;
        margin-top: 0.25rem;
        padding: 0.25rem 1rem;
        font-size: 0.9rem;
        letter-spacing: 0.02rem;
        transition: 0.4s ease;

        &:hover {
          background: #04c2c9;
          border-color: #04c2c9;
        }
      }
    }
  }
`
