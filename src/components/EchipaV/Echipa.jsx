import React from 'react';
import styles from './Echipa.module.css';

function Echipa({ membri }) {
  return (
    <div className={styles.echipaContainer}>
      <h1>Echipa Via Travel</h1>
      <div className={styles.membriContainer}>
        {membri.map((membru) => (
          <div key={membru.id} className={styles.membru}>
            <img src={membru.image} alt={membru.name} className={styles.imagine} />
            <h2 className={styles.nume}>{membru.name}</h2>
            <h2 className={styles.ocupatia}>{membru.ocupatia}</h2>
            <p className={styles.mesaj}>"{membru.mesaj}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Echipa;
