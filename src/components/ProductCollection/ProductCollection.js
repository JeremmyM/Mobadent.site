import { navigate } from 'gatsby';
import React from 'react';
import * as styles from './ProductCollection.module.css';
import { toOptimizedImage } from '../../helpers/general';

const ProductCollection = (props) => {
  const { image, title, text, categorySlug } = props;

  const handleNavigation = () => {
    // Usamos 'navigate' para ir a la página de la tienda y pasamos el slug de la categoría
    // en el 'state' de la navegación. Esto es lo que permite que el filtro funcione.
    navigate('/shop', { state: { category: categorySlug } });
  };

  return (
    <div
      role={'presentation'}
      onClick={handleNavigation}
      className={styles.root}
      style={{ backgroundImage: `url(${toOptimizedImage(image)})` }}
    >
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default ProductCollection;