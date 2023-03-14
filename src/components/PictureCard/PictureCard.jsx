import React from "react";
import styles from "./PictureCard.module.css";

const PictureCard = ({ src, alt, title }) => {




  
  return (
    <div>
      <div className={styles.root}>
        <img className={styles.image} src={src} alt={alt} />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
export default PictureCard;
