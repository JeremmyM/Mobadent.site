import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`MOBADENT\n Materiales dentales originales en Santo Domingo`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Historia
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Valores
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Compromisos
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              MOBADENT es una empresa familiar ecuatoriana dedicada a la
              distribución de <strong>insumos y materiales dentales 100% originales</strong>.
              Nacimos para resolver algo simple: que clínicas y odontólogos de
              Santo Domingo accedan a productos confiables, con asesoría
              profesional y entregas ágiles.
            </p>
            <br />
            <br />
            <p>
              Tres de nuestros socios son odontólogos y todos participamos en la
              operación diaria: visitas presenciales, logística propia y
              atención cercana. Creemos en relaciones de largo plazo basadas en
              <strong>calidad, honestidad y servicio</strong>.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'equipo MOBADENT'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Nuetros Valores</h3>
            <div ref={valuesRef}>
              <p>
                Nuestra promesa es simple: ofrecer <strong>productos originales</strong> con
                <strong> respaldo técnico</strong> y una experiencia de compra práctica. Para
                clínicas y profesionales, esto significa disponibilidad, precios
                justos y <strong>asesoría real</strong> en el uso de los materiales.
              </p>
              <ol>
                <li>Calidad primero: marcas originales y garantía.</li>
                <li>Servicio cercano: visitas, WhatsApp y atención rápida.</li>
                <li>Confianza: transparencia en precios y entregas.</li>
              </ol>
              <img alt={'equipo y valores'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Sostenibilidad / Compromisos</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Operamos con <strong>logística propia</strong> para optimizar rutas y reducir
                tiempos de entrega. Cuidamos el <strong>almacenamiento adecuado</strong> de los
                insumos para mantener la trazabilidad y condiciones óptimas.
              </p>
              <p>
                Estamos construyendo procesos digitales y avanzamos hacia una web y catálogos
                online que simplifiquen la reposición de materiales.
              </p>
              <p>
                Nuestro compromiso es amplificar el acceso a insumos de calidad
                en Santo Domingo con <strong>honestidad, garantía y soporte</strong>.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'servicio y entregas MOBADENT'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
