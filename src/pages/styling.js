import * as React from 'react';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import * as styles from './styling.module.css';

const StylingPage = () => {
  return (
    <Layout>
      <Container size={'large'}>
        <div className={styles.root}>
          <h1>Guía de Estilos — MOBADENT</h1>
          <div className={styles.grid}>
            <h1>Título 1</h1>
            <h2>Título 2</h2>
            <h3>Título 3</h3>
            <h4>Título 4</h4>
            <div className={'quote'}>Cita / Destacado</div>
          </div>
          <div className={styles.grid}>
            <p className={'b1'}>Cuerpo 1</p>
            <p className={'b2'}>Cuerpo 2</p>
            <p className={'b3'}>Cuerpo 3</p>
            <p className={'b4'}>Cuerpo 4</p>
            <p className={'buttonText'}>Texto de Botón</p>
          </div>
          <h2>Guía de Marca</h2>
          <div className={styles.grid4}>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-black)' }}
            >
              <span className={styles.text}>Negro</span>
              <span className={styles.text}>#000000</span>
            </div>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-gold)' }}
            >
              <span className={styles.text}>Dorado MOBADENT</span>
              <span className={styles.text}>#B59F66</span>
            </div>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-dark-grey)' }}
            >
              <span className={styles.text}>Gris Tarmak</span>
              <span className={styles.text}>#545250</span>
            </div>
            <div
              className={styles.brand}
              style={{ backgroundColor: 'var(--standard-light-grey)' }}
            >
              <span>Marfil</span>
              <span>#FCFAF6</span>
            </div>
          </div>
          <h2>Botones</h2>
          <div className={styles.grid}>
            <Button level={'primary'}>Activo - Primario</Button>
            <Button level={'primary'}>Hover - Primario</Button>
            <Button level={'primary'} disabled>
              Deshabilitado - Primario
            </Button>
            <Button level={'secondary'}>Activo - Secundario</Button>
            <Button level={'secondary'}>Hover - Secundario</Button>
            <Button level={'secondary'} disabled>
              Deshabilitado - Secundario
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default StylingPage;
