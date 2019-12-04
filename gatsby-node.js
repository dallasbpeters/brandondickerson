/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicSama {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/sama-post.jsx")

  pages.data.allPrismicSama.edges.forEach(edge => {
    createPage({
      path: `/sama/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
