import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./spots-logos.scss"

const renderSpotsLogo = data => {
  return (
    <div className="section--logo">
      <h1>I've had the honor of working with these fine companies</h1>
      <div className="logo-grid">
        {data.allFile.edges.map(({ node }) => (
          <div className="logo-grid__container">
            <Img fluid={node.childImageSharp.fluid} alt="Company Logo" />
          </div>
        ))}
      </div>
    </div>
  )
}

const SpotsLogos = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            sourceInstanceName: { eq: "logos" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 100, maxWidth: 130) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={renderSpotsLogo}
  />
)

export default SpotsLogos
