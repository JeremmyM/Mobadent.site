import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';
import { toOptimizedImage } from '../../helpers/general';

const ProductCard = (props) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const {
    image,
    imageAlt,
    name,
    originalPrice,
    meta,
    showQuickView,
    height = 580,
    vendor,
  } = props;

  const TEMP_HIDE_ACTIONS = true; // <<< CAMBIA a false cuando quieras volver a mostrar

  const handleRouteToProduct = () => {
    navigate(`/product/${props.slug}`);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    showQuickView();
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct()}
        role="presentation"
      >
        <img style={{ height: `${height}px` }} src={toOptimizedImage(image)} alt={imageAlt} />

        {!TEMP_HIDE_ACTIONS && (
          <div
            className={styles.bagContainer}
            role="presentation"
            onClick={(e) => handleQuickView(e)}
          >
            <Icon symbol="bagPlus" />
          </div>
        )}

        {!TEMP_HIDE_ACTIONS && (
          <div
            className={styles.heartContainer}
            role="presentation"
            onClick={(e) => handleFavorite(e)}
          >
            <Icon symbol="heart" />
            <div
              className={`${styles.heartFillContainer} ${
                isWishlist ? styles.show : styles.hide
              }`}
            >
              <Icon symbol="heartFill" />
            </div>
          </div>
        )}
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.pricesLayout}>
          {/* Muestra el nombre del proveedor en su propia línea */}
          <span>{vendor}</span>
          {/* Muestra originalPrice en la siguiente línea si existe, sin dejar espacio en blanco si no */}
          {originalPrice && (
            <span className={styles.salePrice}>
              {originalPrice}
            </span>
          )}
        </div>
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  );
};

export default ProductCard;