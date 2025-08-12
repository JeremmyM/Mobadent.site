import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Blanqueamientos'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Cementos'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Grabado y adhesion'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Endodoncia'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection5.png'}
        title={'Manejo de Tejidos'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection6.png'}
        title={'Composites'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
