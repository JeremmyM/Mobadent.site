import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './Brand.module.css';

const Brand = () => {
  return (
    <div
      className={styles.root}
      role="presentation"
      onClick={() => navigate('/')}
    >
      <img
        src="/logo.png"
        alt="Mobadent"
        className={styles.logo}
      />
    </div>
  );
};

export default Brand;
