const path = require('path');
const products = require('./src/data/products.json');
const { slugify } = require('./src/helpers/slugify');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  products.forEach((product) => {
    createPage({
      path: `/product/${product.slug}`,
      component: path.resolve(`./src/pages/product/sample.js`),
      context: {
        slug: product.slug,
      },
    });
  });



  const categories = new Set();
  products.forEach(p => {
    if (p.category) categories.add(p.category);
    if (Array.isArray(p.categories)) p.categories.forEach(c => categories.add(c));
  });

  categories.forEach(cat => {
    createPage({
      path: `/categoria/${slugify(cat)}`,
      component: path.resolve(`./src/templates/CategoryPage.js`),
      context: { category: cat }
    });
  });
};



   