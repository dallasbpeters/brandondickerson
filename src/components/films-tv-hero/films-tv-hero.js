import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import "../../components/films-tv-hero/films-tv-hero.scss"

const renderFilms = data => {
  return (
    <div className="films-tv-hero">
      <Img
        className="films-tv-hero--spiral-logo"
        fixed={data.logoSpiral.childImageSharp.fixed}
      />
      <div className="films-tv-hero--posters-container">
        {data.allPrismicFilm.edges.map(({ node }) => (
          <img
            src={node.data.poster.url}
            key={node.uid}
            alt={node.data.poster.alt}
          />
        ))}
      </div>
      <div className="films-tv-hero--provider-logos-container">
        <Img fixed={data.logoNetflix.childImageSharp.fixed} />
        <Img fixed={data.logoPrime.childImageSharp.fixed} />
        <Img fixed={data.logoItunes.childImageSharp.fixed} />
      </div>
    </div>
  )
}

const FilmsTvHero = () => {
  return (
    <>
      <StaticQuery query={query} render={renderFilms} />
    </>
  )
}

export const spiralImage = graphql`
  fragment spiralImage on File {
    childImageSharp {
      fixed(width: 220) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const providerImage = graphql`
  fragment providerImage on File {
    childImageSharp {
      fixed(width: 130) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
const query = graphql`
  {
    logoSpiral: file(relativePath: { eq: "logo-spiral.png" }) {
      ...spiralImage
    }
    logoNetflix: file(relativePath: { eq: "logo-netflix.png" }) {
      ...providerImage
    }
    logoPrime: file(relativePath: { eq: "logo-prime-video.png" }) {
      ...providerImage
    }
    logoItunes: file(relativePath: { eq: "logo-itunes.png" }) {
      ...providerImage
    }
    allPrismicFilm {
      edges {
        node {
          data {
            poster {
              url
            }
            embed_link {
              embed_url
            }
          }
        }
      }
    }
  }
`

export default FilmsTvHero
