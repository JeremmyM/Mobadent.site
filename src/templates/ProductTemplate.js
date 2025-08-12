import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import CurrencyFormatter from '../components/CurrencyFormatter';
import products from '../data/products.json';

const ProductTemplate = ({ pageContext }) => {
  const { slug } = pageContext;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div style={{ padding: '2rem' }}>Producto no encontrado.</div>;
  }

  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.alt} style={{ maxWidth: '400px' }} />
        <p><CurrencyFormatter amount={product.price} /></p>
        <p>{product.meta}</p>
        <button onClick={() => navigate('/shop')}>Volver a la tienda</button>
      </div>
    </Layout>
  );
};

export default ProductTemplate;
