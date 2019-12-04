import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SamaPost = ({ data: { prismicSama } }) => {
  const { data } = prismicSama
  return (
    <Layout>
      <SEO title={data.title.text} />
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
    </Layout>
  )
}

export default SamaPost

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicSama(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }
  }
`
