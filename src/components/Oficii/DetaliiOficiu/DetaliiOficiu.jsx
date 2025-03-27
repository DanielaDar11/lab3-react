import React from 'react';
import styles from './DetaliiOficiu.module.css';

function DetaliiOficiu({ titlu, adresa, program, telefon }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.titlu}>{titlu}</h3>
      <p className={styles.adresa}>{adresa}</p>
      <p className={styles.program}><strong>Program de lucru:</strong></p>
      <p>{program[0]}</p>
      <p>{program[1]}</p>
      <p className={styles.telefon}><strong>Telefon:</strong></p>
      <p>{telefon[0]}</p>
      <p>{telefon[1]}</p>
    </div>
  );
}

export default DetaliiOficiu;
