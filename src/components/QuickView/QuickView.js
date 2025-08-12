import React, { useState, useEffect, useContext, useMemo } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';

// Normaliza un objeto de producto a la forma que necesita el QuickView
const normalizeProduct = (p = {}) => {
  const name = p.name || p.title || 'Producto';
  const price = typeof p.price === 'number' ? p.price : Number(p.price) || 0;
  const image = p.image || p.images?.[0] || p.thumbnail || '';
  const alt = p.imageAlt || p.alt || name;

  // Opciones (si no existen, usa arreglos vacíos)
  const colorOptions = Array.isArray(p.colorOptions) ? p.colorOptions : [];
  const sizeOptions = Array.isArray(p.sizeOptions) ? p.sizeOptions : [];

  return { name, price, image, alt, colorOptions, sizeOptions };
};

const QuickView = (props) => {
  const { close, buttonTitle = 'Add to Bag', product } = props;

  const normalized = useMemo(() => normalizeProduct(product), [product]);
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification?.showNotification || (() => {});

  // Estados controlados por el producto activo
  const [activeSwatch, setActiveSwatch] = useState(
    normalized.colorOptions[0] || null
  );
  const [activeSize, setActiveSize] = useState(
    normalized.sizeOptions[0] || null
  );

  // Si cambia de producto, resetea selección
  useEffect(() => {
    setActiveSwatch(normalized.colorOptions[0] || null);
    setActiveSize(normalized.sizeOptions[0] || null);
  }, [normalized.colorOptions, normalized.sizeOptions]);

  const handleAddToBag = () => {
    // Aquí puedes armar el payload real para tu carrito si lo tienes
    // const payload = { product, color: activeSwatch, size: activeSize, qty: 1 };
    close && close();
    showNotification();
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Selecciona opciones</h4>
      </div>

      <div className={styles.contentContainer}>
        {/* Info del producto */}
        <div className={styles.productContainer}>
          <span className={styles.productName}>{normalized.name}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={normalized.price} />
          </div>
          <div className={styles.productImageContainer}>
            {normalized.image ? (
              <img alt={normalized.alt} src={toOptimizedImage(normalized.image)} />
            ) : (
              <div style={{ padding: 24, textAlign: 'center', opacity: 0.6 }}>
                (Sin imagen)
              </div>
            )}
          </div>
        </div>

        {/* Colores (si hay) */}
        {normalized.colorOptions.length > 0 && (
          <div className={styles.sectionContainer}>
            <SwatchList
              swatchList={normalized.colorOptions}
              activeSwatch={activeSwatch}
              setActiveSwatch={setActiveSwatch}
            />
          </div>
        )}

        {/* Tallas (si hay) */}
        {normalized.sizeOptions.length > 0 && (
          <div className={styles.sectionContainer}>
            <SizeList
              sizeList={normalized.sizeOptions}
              activeSize={activeSize}
              setActiveSize={setActiveSize}
            />
          </div>
        )}

        <Button onClick={handleAddToBag} fullWidth level="primary">
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default QuickView;