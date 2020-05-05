import React from "react"
import { graphql } from "gatsby"

export default function squareImage() {
  return <div></div>
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
