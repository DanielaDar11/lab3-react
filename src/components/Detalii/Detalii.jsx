import React from 'react';
import styles from './Detalii.module.css';

function Detalii({ titlu, text, culoareTitlu }) {
    return (
        <div className={styles.container}>
          <h2 style={{ color: culoareTitlu }}>{titlu}</h2>
          <p>{text}</p>
        </div>
      );
}

export default Detalii;
