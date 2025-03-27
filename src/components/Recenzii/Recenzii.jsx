import React from 'react';
import styles from './Recenzii.module.css';

function Recenzii({ listaRecenzii }) {
  return (
    <>
    <h1>Recenzii</h1>
    <div className={styles.container}>
      {listaRecenzii.map((recenzie) => (
        <div key={recenzie.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.imageContainer}>
              <img src={recenzie.image} alt={recenzie.name} className={styles.image} />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.stele}>{recenzie.stele}</p>
              <p className={styles.name}>{recenzie.name}</p>
              <p className={styles.oras}>{recenzie.oras}</p>
            </div>
          </div>
          <p className={styles.mesaj}>"{recenzie.mesaj}"</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Recenzii;
