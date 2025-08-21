import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Highlight.module.css';
import { toOptimizedImage } from '../../helpers/general';

const Highlight = (props) => {
  const {
    image,
    altImage,
    miniImage,
    miniImageAlt,
    title,
    description,
    textLink,
    link,
    videoSrc, // <-- Nuevo prop para la ruta del video
  } = props;

  // Función para renderizar el elemento multimedia (imagen o video)
  const renderMedia = () => {
    if (videoSrc) {
      return (
        <video
          src={videoSrc}
          className={styles.highlightImage}
          autoPlay
          muted
          loop
        >
          Tu navegador no soporta el tag de video.
        </video>
      );
    } else {
      return (
        <img alt={altImage} src={toOptimizedImage(image)} className={styles.highlightImage} />
      );
    }
  };

  return (
    <div className={styles.root}>
      {renderMedia()} {/* <-- Renderiza la imagen o el video */}
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>{textLink}</Link>
        <img
          className={styles.miniImage}
          alt={miniImageAlt}
          src={toOptimizedImage(miniImage)}
        ></img>
      </div>
    </div>
  );
};

export default Highlight;
