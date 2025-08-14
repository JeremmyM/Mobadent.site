import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';
import ProductCollection from '../ProductCollection';

// Se crea un array con la información de las categorías.
const collections = [
  // Asegúrate de que los valores de 'categorySlug' coincidan exactamente con los de tu JSON.
  { image: '/collections/collection.png', title: 'Blanqueamientos', categorySlug: 'Blanqueamientos' },
  { image: '/collections/collection2.png', title: 'Cementos', categorySlug: 'Cementos' },
  { image: '/collections/collection3.png', title: 'Grabado y adhesion', categorySlug: 'Grabado y Adhesion' },
  { image: '/collections/collection4.png', title: 'Endodoncia', categorySlug: 'Endodoncia' },
  { image: '/collections/collection5.png', title: 'Manejo de Tejidos', categorySlug: 'Manejo de tejidos' },
  { image: '/collections/collection6.png', title: 'Composites', categorySlug: 'Composites' },
];

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      {collections.map((collection, index) => (
        <ProductCollection
          key={index}
          image={collection.image}
          title={collection.title}
          text={'Cotiza por WhatsApp'}
          categorySlug={collection.categorySlug} // Pasamos el slug
        />
      ))}
    </div>
  );
};

export default ProductCollectionGrid;