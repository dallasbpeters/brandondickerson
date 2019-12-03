import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SamaIndexPage = props => (
  <Layout>
    <SEO title="Stories About My Ass" />
    {props.data.posts.edges.map(posts => (
      <p>{posts.node.data.title.text}</p>
    ))}
  </Layout>
)

export default SamaIndexPage

export const SamaQuery = graphql`
  query Posts {
    posts: allPrismicSama {
      edges {
        node {
          data {
            title {
              text
            }
            chapter_number
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`
