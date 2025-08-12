import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Preguntas Frecuentes`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Tus pedidos</span>
            <div className={styles.subSection}>
              <h3>Entregas</h3>
              <p>
                Para revisar el estado de tu pedido visita la sección "Mis pedidos" de tu cuenta MOBADENT. También recibirás un correo cuando tu paquete sea despachado. Revisa tu bandeja de entrada y la carpeta de spam por si acaso.
              </p>
              <p>
                Despachamos la mayoría de pedidos dentro de 24–48 horas hábiles en Santo Domingo. En temporadas de alta demanda (promociones o campañas) el despacho puede tomar un poco más; considera hasta cinco días hábiles como margen de seguridad.
              </p>
              <p>
                Si necesitas ayuda con tu pedido, contáctanos mediante WhatsApp o desde la sección de Contacto del sitio y con gusto te asistiremos.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Devoluciones y cambios</h3>
              <p>
                Si tu producto llegó con algún problema de fábrica o no corresponde a lo solicitado, por favor repórtalo dentro de las 48 horas posteriores a la entrega para evaluar cambio o nota de crédito.
              </p>
              <p>
                Por razones sanitarias, algunos insumos dentales sellados no aplican para devolución una vez abiertos. Nuestro equipo te guiará en cada caso.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Pago</span>
            <div className={styles.subSection}>
              <h3>Tarifas de envío</h3>
              <p>
                Mostramos el costo de envío antes de confirmar tu compra. En Santo Domingo manejamos tarifas preferenciales y, según el monto del pedido o campañas vigentes, el envío puede ser gratuito.
              </p>
              <p>
                Los pedidos confirmados antes de las 15:00 se programan para entrega en la siguiente ventana disponible. En picos de demanda, por favor considera hasta cinco días hábiles adicionales.
              </p>
              <p>
                ¿Dudas sobre tu envío? Escríbenos por WhatsApp o desde la página de Contacto y te ayudamos de inmediato.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Moneda</h3>
              <p>
                Todos los precios se muestran en Dólares de los Estados Unidos (USD).
              </p>
              <p>
                Las facturas se emiten en USD. Si compras desde fuera de Ecuador, podrían aplicar impuestos o aranceles de tu país al momento de la importación.
              </p>
              <p>
                Cuando corresponda, los precios incluyen impuestos aplicables conforme a la normativa vigente.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>¿Sospecha de fraude?</h3>
              <p>
                Contamos con medidas de seguridad para proteger tus datos. Si detectas un cargo no reconocido, primero contacta a tu emisor de tarjeta para bloquearla y gestionar el reembolso. Luego avísanos desde la sección de Contacto para ayudarnos a investigar y prevenir cualquier inconveniente adicional.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
