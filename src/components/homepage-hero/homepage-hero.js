import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import "../../components/homepage-hero/homepage-hero.scss"

const renderHomepageHero = data => {
  return (
    <div className="homepage-hero">
      <div className="homepage-hero__content-wrapper">
        <div className="homepage-hero__text-wrapper">
          <h1>This is my headline!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ratione debitis eveniet vero repellat suscipit ab, autem deserunt,
            quod, alias eligendi maxime provident a explicabo distinctio sunt
            dolores similique perferendis.
          </p>
        </div>
        <div className="homepage-hero__image-wrapper">
          <Img
            style={{ display: `block`, maxWidth: `100%` }}
            fixed={data.file.childImageSharp.fixed}
          />
        </div>
      </div>
    </div>
  )
}

const HomepageHero = () => {
  return (
    <>
      <StaticQuery query={query} render={renderHomepageHero} />
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/brandon-hero-low-res.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 448, height: 480) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default HomepageHero
