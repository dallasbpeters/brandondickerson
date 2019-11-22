import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../components/awards-hero/awards-hero.scss"

const renderAwards = data => {
  return (
    <div className="awards-hero">
      <div className="awards-hero__awards-images">
        {data.allPrismicAward.edges.map(({ node }) => (
          <img
            src={node.data.award_image.url}
            key={node.uid}
            alt={node.data.award_image.alt}
          />
        ))}
      </div>
      <div className="awards-hero__awards-text">
        <h1>
          blah blah the highest awards in advertising including the coveted
          Cannes Gold Lion...
        </h1>
        <p>Then a paragraph to support the headline above it.</p>
      </div>
    </div>
  )
}

const AwardsHero = () => {
  return (
    <>
      <StaticQuery query={query} render={renderAwards} />
    </>
  )
}

const query = graphql`
  {
    allPrismicAward(sort: { fields: last_publication_date, order: DESC }) {
      edges {
        node {
          data {
            award_image {
              alt
              url
            }
          }
          last_publication_date
        }
      }
    }
  }
`

export default AwardsHero
