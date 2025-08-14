import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Entregas locales'}
        subtitle={'En Santo Domingo, el mismo dìa'}
      />
      <Attribute
        icon={'question'}
        title={'Soporte tècnico'}
          subtitle={'Respaldo profesional y garantìa'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Facilidades de pago'}
        subtitle={'Opciones de pago flexibles'}
      />
    </div>
  );
};

export default AttributeGrid;
