import React from 'react';
import styles from './ButonM.module.css';

function ButonM({ imagine, titlu }) {
  return (
    <div className={styles.butonM}>
      <img src={imagine} alt={titlu} className={styles.imagine} />
      <h3 className={styles.titlu}>{titlu}</h3>
    </div>
  );
}

export default ButonM;
