const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  // Create Gallery Pages based on gallery.js template
  const { createPage } = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allContentfulPortfolio {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPortfolio.edges.map(({ node }) => {
        createPage({
          path: `gallery/${node.slug}`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        });
      });

      resolve();
    });
  });
};
