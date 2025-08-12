import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';
import { toOptimizedImage } from '../helpers/general';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#builtby'}>
            ¿Quiénes somos?
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#tools'}>
            Tecnologías compatibles
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>MOBADENT</h3>
            <div id="#builtBy" ref={builtRef}>
              <p>
                Somos una empresa familiar en Santo Domingo, Ecuador, dedicada a la
                distribución de <strong>materiales dentales originales</strong> con respaldo
                profesional. Tres de nuestros socios son odontólogos y todos
                participamos activamente en la operación.
              </p>
              <p>
                Nuestro enfoque es simple: <strong>calidad, honestidad y servicio</strong>.
                Ofrecemos visitas presenciales, logística propia y opciones de pago por
                abonos para facilitar las compras de nuestros clientes.
              </p>
              <p>
                Actualmente estamos fortaleciendo nuestra presencia digital y
                optimizando procesos internos para ofrecer una experiencia ágil a clínicas
                y odontólogos de toda la ciudad.
              </p>
              <Button target={true} href="/contacto">
                Escríbenos / Haz tu pedido
              </Button>
              <img
                alt={'MOBADENT - logística y servicio'}
                src={toOptimizedImage('/how-to-use/jamm-sydney-1upd@2x.png')}
                style={{ display: 'block', height: 'auto' }}
              />
            </div>
            <h3>Herramientas y arquitectura</h3>
            <div id={'#tools'} ref={toolsRef}>
              <p>
                Usamos una arquitectura ligera y componible para poder mejorar rápido sin
                depender de sistemas monolíticos. Esto nos permite integrar lo mejor de
                cada herramienta según crecemos.
              </p>
              <p>
                ¿Por qué este enfoque? Porque la innovación viene de soluciones
                especializadas. Al integrar herramientas líderes, logramos una operación
                más veloz, estable y escalable.
              </p>
              <p>
                A continuación, nuestro stack actual y de roadmap.
              </p>

              <strong>Ventas y ERP ligero:</strong>
              <ul>
                <li>Aronium (inventario y contabilidad)</li>
              </ul>

              <strong>Ecommerce / Web (headless):</strong>
              <ul>
                <li>Gatsby + Netlify</li>
                <li>Integración con pagos locales (roadmap)</li>
              </ul>

              <strong>CMS (gestión de contenido):</strong>
              <ul>
                <li>Contentful / Sanity (roadmap)</li>
                <li>WordPress (alternativa)</li>
              </ul>

              <strong>Búsqueda avanzada (catálogo):</strong>
              <ul>
                <li>Algolia (roadmap)</li>
              </ul>

              <strong>Automatización y marketing:</strong>
              <ul>
                <li>Klaviyo / Omnisend (roadmap)</li>
                <li>WhatsApp Business + catálogos</li>
              </ul>

              <strong>Soporte al cliente:</strong>
              <ul>
                <li>WhatsApp Business</li>
                <li>Gorgias / Zendesk (roadmap)</li>
              </ul>

              <strong>Reseñas y confianza:</strong>
              <ul>
                <li>Google Reviews</li>
                <li>Trustpilot (roadmap)</li>
              </ul>

              <p>
                Si eres proveedor o clínica y deseas integrarte con nuestro flujo digital,
                estaremos encantados de escucharte.
              </p>

              <p>
                <Button
                  target={true}
                  href="/contacto"
                >
                  Contactar a MOBADENT
                </Button>
              </p>
            </div>
          </div>
        </Container>
        <div className={styles.imageContainer}>
          <img
            alt={'Tecnologías compatibles en MOBADENT'}
            src={toOptimizedImage('/how-to-use/logos@2x.png')}
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
