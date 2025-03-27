import React from 'react';
import styles from './ImaginiCentrate.module.css';

function ImaginiCentrate({ imagine1, imagine2, imagine3, imagine4 }) {
  return (
    <div className={styles.imaginiContainer}>
      <img src={imagine1} alt="Imagine 1" className={styles.imagine} />
      <img src={imagine2} alt="Imagine 2" className={styles.imagine} />
      <img src={imagine3} alt="Imagine 3" className={styles.imagine} />
      <img src={imagine4} alt="Imagine 4" className={styles.imagine} />
    </div>
  );
}

export default ImaginiCentrate;
