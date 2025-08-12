import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'odontología'}
              title={'MOBADENT: materiales originales con respaldo profesional'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  MOBADENT es una empresa familiar en Santo Domingo, Ecuador,
                  dedicada a distribuir materiales dentales 100% originales. Nos
                  diferenciamos por el respaldo profesional de tres socios
                  odontólogos, la atención cercana y la honestidad en cada
                  venta.
                </p>
                <p className={styles.blogParagraph}>
                  Trabajamos con marcas de calidad y evitamos copias. Nuestro
                  objetivo es que tu consulta rinda mejor con productos
                  confiables, asesoría real y disponibilidad inmediata según tus
                  preferencias de trabajo.
                </p>
                <p className={styles.blogParagraph}>
                  Contamos con logística propia: entregamos en tu consultorio en
                  Santo Domingo y zonas cercanas. Si necesitas algo urgente,
                  coordinamos para que lo tengas lo antes posible.
                </p>
                <p className={styles.blogParagraph}>
                  Nuestro equipo comercial visita consultorios para entender tus
                  necesidades y sugerirte soluciones concretas: desde
                  restauradores y adhesivos hasta materiales para endodoncia y
                  profilaxis, todo con soporte técnico práctico.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cloth.png')} alt={'Producto destacado MOBADENT'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/collections/collection1.png')} alt={'Colección de materiales dentales'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Cómo trabajamos</h2>
                <p className={styles.blogParagraph}>
                  Ofrecemos compras con pagos por abonos, sin necesidad de pagar
                  al contado. Así puedes planificar mejor tu flujo de caja sin
                  sacrificar la calidad de tus materiales.
                </p>
                <p className={styles.blogParagraph}>
                  Las entregas y cobros los realiza nuestro propio equipo
                  (familia MOBADENT), lo que nos permite mantener cercanía,
                  puntualidad y seguimiento postventa para asegurar que el
                  producto cumpla lo prometido.
                </p>
                <p className={styles.blogParagraph}>
                  Si eres nuevo en MOBADENT, te acompañamos en la selección de
                  productos según tus casos clínicos más frecuentes y armamos
                  contigo un set inicial optimizado para tu consulta.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
