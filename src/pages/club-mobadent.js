import React from 'react';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';
import Title from '../components/Title';
import * as styles from './club-mobadent.module.css';

const ClubMobadentPage = () => {
  return (
    <Layout>
      <div className={styles.heroContainer}>
        <Title
          name="Club MOBADENT"
          subtitle="Tu lealtad te lleva al siguiente nivel."
          align="center"
          color="black"
        />
      </div>
      <Container size={'medium'}>
        <div className={styles.content}>
          <p className={styles.intro}>
            En **MOBADENT**, valoramos a nuestros clientes y queremos recompensar tu fidelidad. Nuestro programa de lealtad te permite alcanzar diferentes niveles de beneficios según el volumen de tus compras. ¡Entre más compras, mayores son tus recompensas!
          </p>
          <div className={styles.levelsGrid}>
            <div className={styles.levelCard}>
              <h3 className={styles.bronze}>Bronce</h3>
              <p>
                Este es el primer paso en tu viaje con nosotros. Los clientes en este nivel obtienen:
              </p>
              <ul>
                <li>Acceso a promociones exclusivas.</li>
                <li>Envío prioritario.</li>
              </ul>
            </div>
            <div className={styles.levelCard}>
              <h3 className={styles.oro}>Oro</h3>
              <p>
                Al alcanzar el nivel Oro, tus beneficios crecen significativamente:
              </p>
              <ul>
                <li>Todos los beneficios del nivel Bronce.</li>
                <li>**5% de descuento** en todas tus compras.</li>
                <li>Regalos especiales en pedidos seleccionados.</li>
              </ul>
            </div>
            <div className={styles.levelCard}>
              <h3 className={styles.diamante}>Diamante</h3>
              <p>
                El nivel más alto de fidelidad. Los miembros Diamante disfrutan de:
              </p>
              <ul>
                <li>Todos los beneficios de los niveles anteriores.</li>
                <li>**10% de descuento** en todas tus compras.</li>
                <li>Asesoría personalizada con un especialista.</li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaSection}>
            <h2>¿Cómo saber en qué nivel estoy?</h2>
            <p>
              Nuestro equipo se encarga de dar seguimiento a tus compras y te notificará por WhatsApp cuando alcances un nuevo nivel. ¡Nosotros nos encargamos de todo!
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default ClubMobadentPage;