import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  // Manteniendo la misma lógica: uso de mocks y navegación
  const newArrivals = generateMockProductData(3, 'kit'); // Adaptado a productos dentales (antes 'shirt')
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'620px'}
        image={'/banner1.png'}
        title={'Suministros dentales de calidad'}
        subtitle={'Distribuidor oficial en Santo Domingo — MOBADENT'}
        ctaText={'ver catálogo'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Somos <span className={styles.gold}>MOBADENT</span>: empresa familiar y joven que
          distribuye <strong>productos originales</strong> con respaldo profesional.
        </p>
        <p>
          Atención cercana, pagos por <span className={styles.gold}>abonos</span> y
          entregas locales con nuestra propia logística.
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Categorías destacadas'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Novedades'} link={'/shop'} textLink={'ver todo'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'imagen de resina y adhesivos'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini imagen de resina'}
            title={'Restauración estética'}
            description={`Resinas, adhesivos y accesorios seleccionados por odontólogos socios de MOBADENT para resultados predecibles.`}
            textLink={'comprar ahora'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`-15% en combos\n Instrumental y descarte`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>ENDODONCIA</Link>
          <Link to={'/shop'}>ODONTOLOGÍA GENERAL</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'lo que creemos'}
        quote={
          '“Calidad y honestidad primero. Si es original y funciona en nuestra práctica, lo ofrecemos a nuestros colegas.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Noticias y Consejos'} subtitle={'Actualizaciones y tips clínicos'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Compromiso con tu práctica'}
          subtitle={'Soporte posventa, capacitación básica de producto y entregas el mismo día en Santo Domingo.'}
          ctaText={'conoce más'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Comparte tus casos'}
          subtitle={'Etiquétanos @mobadent.ec para aparecer.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'caso clínico 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'caso clínico 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'caso clínico 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'caso clínico 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
