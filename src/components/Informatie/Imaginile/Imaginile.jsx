import React from 'react';
import styles from './Imaginile.module.css';

function Imaginile({ imagine1, imagine2, imagine3, imagine4, imagine5, imagine6, imagine7 }) {
  return (
    <div className={styles.imag}>
      <div className={styles.section}>
        <div className={styles.douaImg}>
            <img src={imagine1} alt="Imagine 1" />
            <img src={imagine2} alt="Imagine 2" />
      </div>
      <div className={styles.oImg}><img src={imagine3} alt="Imagine 2" /></div>
      </div>
      <div className={styles.patru}>
        <img src={imagine4} alt="Imagine 3" />
        <img src={imagine5} alt="Imagine 4" />
        <img src={imagine6} alt="Imagine 5" />
        <img src={imagine7} alt="Imagine 6" />
      </div>
    </div>
  );
}

export default Imaginile;
