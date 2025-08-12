import React from 'react';
import products from '../data/products.json';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCardGrid from '../components/ProductCardGrid';

const CategoryPage = ({ pageContext }) => {
  const { category } = pageContext;
  const items = products.filter(p => {
    const cats = p.category ? [p.category] : (Array.isArray(p.categories) ? p.categories : []);
    return cats.includes(category);
  });

  return (
    <Layout>
      <Container size="large" spacing="min">
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Inicio' },
            { link: '/shop', label: 'Catálogo' },
            { label: category }
          ]}
        />
        <h1 style={{ margin: '16px 0' }}>{category}</h1>
        {items.length > 0 ? (
          <ProductCardGrid columns={4} height={400} data={items} />
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </Container>
    </Layout>
  );
};

export default CategoryPage;
