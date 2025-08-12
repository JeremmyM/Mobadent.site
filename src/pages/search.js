import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import products from '../data/products.json';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';
import ProductCardGrid from '../components/ProductCardGrid';

// Quita tildes y normaliza para búsquedas robustas
const normalize = (s) =>
  (s || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const SearchPage = (props) => {
  const params = new URLSearchParams(props.location.search || '');
  const q = params.get('q') || '';

  const results = useMemo(() => {
    if (!q) return [];
    const nq = normalize(q);
    return products.filter((p) => {
      const haystack = [
        p.name,
        p.slug,
        p.meta,
        p.vendor,
        p.description,
        p.productCode,
      ]
        .map(normalize)
        .join(' ');
      return haystack.includes(nq);
    });
  }, [q]);

  return (
    <Layout>
      <Container size="large" spacing="min">
        <h1 style={{ marginBottom: 8 }}>Resultados de búsqueda — MOBADENT</h1>
        <p style={{ marginTop: 0 }}>
          {q ? (
            <>Buscaste: <strong>{q}</strong></>
          ) : (
            'Escribe algo en la lupa para buscar productos.'
          )}
        </p>

        {q && results.length === 0 && (
          <div style={{ padding: '16px 0' }}>
            <p>No encontramos resultados para <strong>{q}</strong>.</p>
            <p style={{ marginTop: 8 }}>
              <Link to="/shop">Ver todos los productos →</Link>
            </p>
          </div>
        )}

        {results.length > 0 && (
          <ProductCardGrid
            columns={3}
            spacing
            showSlider={false}
            height={400}
            data={results.map((p) => ({
              ...p,
              // Asegura que la tarjeta tenga imagen y slug correctos
              image: p.image || p.gallery?.[0] || '',
              imageAlt: p.alt || p.name,
              meta: p.vendor || p.meta || '',
            }))}
          />
        )}
      </Container>
    </Layout>
  );
};

export default SearchPage;
