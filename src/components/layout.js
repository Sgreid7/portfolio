/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "normalize.css"

import GlobalStyles from "../utils/GlobalStyles"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   padding: 1rem 0;
//   width: 100%;
//   background: transparent;
//   font-family: "Mulish", sans-serif;
//   -webkit-box-shadow: 0 8px 8px -4px #380a70;
//   -moz-box-shadow: 0 8px 4px -4px #380a70;
//   box-shadow: 0 3px 4px -2px #380a70;

//   & ul {
//     display: flex;
//     justify-content: center;
//     list-style-type: none;
//     background: transparent;
//     margin: 0;

//     & a {
//       text-decoration: none;
//       color: #fff;
//       margin: 0 1rem;
//     }

//     & li {
//       cursor: pointer;
//       margin: 0;
//       font-size: 1.25rem;
//       text-shadow: 0.1rem 0.1rem 0.1rem #0e34a0;
//     }
//   }
// `
