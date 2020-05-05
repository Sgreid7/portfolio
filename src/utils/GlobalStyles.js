import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
   box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: rgb(52, 52, 52);
    font-size: 16px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`
