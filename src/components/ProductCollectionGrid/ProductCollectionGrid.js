import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Instrumental Dental'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Resinas y Adhesivos'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Ortodoncia'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Endodoncia'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Implantes'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection.png'}
        title={'Equipos y Accesorios'}
        text={'Cotiza por WhatsApp'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
