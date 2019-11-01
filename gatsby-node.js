/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
  switch (stage) {
    case "build-html":
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-bigpicture/,
              use: [loaders.null()],
            },
          ],
        },
      })
      break
  }
}
