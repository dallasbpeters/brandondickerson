import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project/project"
import HomepageHero from "../components/homepage-hero/homepage-hero"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="project-group">
      {props.data.projects.edges.map(projects => (
        <Project slug={projects.node.slugs[0]} data={projects.node.data} />
      ))}
    </div>
    <HomepageHero />
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Projects {
    projects: allPrismicProjects {
      edges {
        node {
          slugs
          data {
            project_type {
              document {
                data {
                  name
                }
              }
            }
            title {
              text
            }
            embed_link {
              embed_url
            }
            thumbnail {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 420) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
