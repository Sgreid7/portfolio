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
    font-size: 16px;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }

  .container {
    max-width: 1200px;
    width: 100%;    
  }
`
