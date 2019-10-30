import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project/project"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="project-group">
      {props.data.projects.edges.map(projects => (
        <Project slug={projects.node.slugs[0]} data={projects.node.data} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Projects {
    projects: allPrismicProjects {
      edges {
        node {
          slugs
          uid
          data {
            # date(formatString: "MMMMM DD, YYYY")
            title {
              text
            }
            thumbnail {
              alt
              copyright
              url
            }
          }
        }
      }
    }
  }
`
