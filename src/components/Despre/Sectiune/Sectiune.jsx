import React from 'react';
import styles from './Sectiune.module.css'; 

function Sectiune({ titlu, text }) {
  return (
    <section className={styles.sectiune}>
      <h2>{titlu}</h2>
      <p>{text}</p>
    </section>
  );
}

export default Sectiune;
