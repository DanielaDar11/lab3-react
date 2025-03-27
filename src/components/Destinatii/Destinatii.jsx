
import React from 'react';
import styles from './Destinatii.module.css';
import destinatii from '../../data/destinatii.json';

function Destinatii() {
  return (
    <div  className={styles.dest}>
      <h1>Destinații de Vis</h1>
      <div className={styles.destinatiiContainer}>
        {destinatii.map((destinatie) => (
          <div key={destinatie.id} className={styles.destinatie}>
            <img src={destinatie.image} alt={destinatie.name} />
            <h2>{destinatie.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinatii;
