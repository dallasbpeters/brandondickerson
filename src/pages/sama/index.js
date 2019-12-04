import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SamaIndexPage = props => (
  <Layout>
    <SEO title="Stories About My Ass" />
    {props.data.posts.edges.map(posts => (
      <Link to={`/sama/${posts.node.uid}`}>{posts.node.data.title.text}</Link>
    ))}
  </Layout>
)

export default SamaIndexPage

export const SamaQuery = graphql`
  query Posts {
    posts: allPrismicSama {
      edges {
        node {
          id
          uid
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
