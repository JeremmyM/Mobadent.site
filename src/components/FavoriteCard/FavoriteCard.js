import React, { useState } from 'react';

import Drawer from '../Drawer';
import QuickView from '../QuickView';

import * as styles from './FavoriteCard.module.css';
import { toOptimizedImage } from '../../helpers/general';

const FavoriteCard = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const { color, size, img, alt, showConfirmDialog } = props;
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.imageContainer}>
          <img src={toOptimizedImage(img)} alt={alt} />
        </div>
        <div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Tamaño: {size}</span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <span role={'presentation'} onClick={() => setShowQuickView(true)}>
          Editar
        </span>
        <span role={'presentation'} onClick={showConfirmDialog}>
          Quitar
        </span>
      </div>

      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView
          buttonTitle={'actualizar favorito'}
          close={() => setShowQuickView(false)}
        />
      </Drawer>
    </div>
  );
};

export default FavoriteCard;
