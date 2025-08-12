import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>¡Gracias!</h1>
          <p>
            Estamos procesando tu pedido. Si tienes alguna duda, escríbenos a
            {' '}<a href="mailto:contacto@mobadent.ec">contacto@mobadent.ec</a>.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Estado del pedido'}
              icon={'delivery'}
              subtitle={'Revisa el estado de tu pedido'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Tienda'}
              icon={'bag'}
              subtitle={'Seguir comprando'}
              link={'/shop'}
            />

            <ActionCard
              title={'Preguntas frecuentes'}
              icon={'question'}
              subtitle={'Visita la página de FAQs'}
              link={'/faq'}
            />

            <ActionCard
              title={'Contáctanos'}
              icon={'phone'}
              subtitle={'Escríbenos o llámanos'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
