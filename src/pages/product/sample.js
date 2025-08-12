import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import products from '../../data/products.json'; // ✅ Importa tus productos reales
import { navigate } from 'gatsby';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';

import { slugify } from '../../helpers/slugify';


import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
  const { slug } = props.pageContext || {};
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;

  const product = products.find((p) => p.slug === slug); // ✅ Buscar producto por slug

  // 🔧 Hooks deben estar antes del return condicional
  const [qty, setQty] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    product?.colorOptions?.[0] || null
  );
  const [activeSize, setActiveSize] = useState(
    product?.sizeOptions?.[0] || null
  );

  if (!product) {
    return (
      <Layout>
        <Container>
          <h1>Producto no encontrado en MOBADENT</h1>
        </Container>
      </Layout>
    );
  }

  const suggestions = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Inicio' },
              { label: 'Catálogo MOBADENT', link: '/shop' },
              { label: product.name },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>         
              {(() => {
                // Toma 'gallery' si existe; si no, cae a [image]
                const raw = Array.isArray(product.gallery)
                  ? product.gallery
                  : (product.image ? [product.image] : []);

                // Normaliza a objeto con ambas claves (image y src)
                const items = raw.map((it) => {
                  if (typeof it === 'string') {
                    return { image: it, src: it, alt: product.alt || product.name };
                  }
                  const url = it.image || it.src || it.url || it.path || '';
                  return { image: url, src: url, alt: it.alt || product.alt || product.name };
                }).filter(x => x.image || x.src);

                // Si no hay nada, no renderizamos
                if (!items.length) return null;

                // Intenta con objetos (lo más común)
                try {
                  return <Gallery images={items} />;
                } catch (e) {
                  // Si fallara porque espera strings, renderiza directo la primera imagen
                  return (
                    <img
                      src={items[0].src || items[0].image}
                      alt={items[0].alt || product.name}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  );
                }
              })()}              
            </div>
            <div className={styles.details}>
              <h1>{product.name}</h1>
              <span className={styles.vendor}> Marca: {product.vendor}</span>

              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={product.price} />
              </div>

              {product.colorOptions && (
                <SwatchList
                  swatchList={product.colorOptions}
                  activeSwatch={activeSwatch}
                  setActiveSwatch={setActiveSwatch}
                />
              )}

              {product.sizeOptions && (
                <div className={styles.sizeContainer}>
                  <SizeList
                    sizeList={product.sizeOptions}
                    activeSize={activeSize}
                    setActiveSize={setActiveSize}
                  />
                </div>
              )}

              <div className={styles.quantityContainer}>
                <span>Cantidad</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
                    fullWidth
                    level={'primary'}
                  >
                    Añadir al carrito
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role="presentation"
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol="heart" />
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol="heartFill" />
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{product.description}</p>
                <span>Código: {product.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type="plus"
                  customStyle={styles}
                  title="Especificaciones y cuidado"
                >
                  <p className={styles.information}>{product.specs}</p>
                </Accordion>
                <Accordion
                  type="plus"
                  customStyle={styles}
                  title="Envios y Facilidades de Pago"
                >
                  <p className={styles.information}>{product.shipping}</p>
                </Accordion>
                <Accordion
                  type="plus"
                  customStyle={styles}
                  title="Soporte MOBADENT"
                >
                  <p className={styles.information}>{product.support}</p>
                </Accordion>
              </div>
            </div>
          </div>

          <div className={styles.suggestionContainer}>
            <h2>Productos relacionados</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div>
        </Container>

        <div className={styles.attributeContainer}>
          <Split
            image="/cloth.png"
            alt="Calidad y respaldo"
            title="Calidad y respaldo"
            description="Distribuimos materiales odontológicos originales, con garantía y soporte profesional. Priorizamos desempeño clínico y duración."
            ctaText="Ir al blog"
            cta={() => navigate('/blog')}
            bgColor="var(--standard-light-grey)"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
