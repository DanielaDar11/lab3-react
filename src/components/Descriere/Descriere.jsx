import React from 'react';
import styles from './Descriere.module.css';

function Descriere({ text1, text2, text3, text4, text5 }) {
  return (
    <div className={styles.descriere}>
      <p className={styles.firstParagraph}>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>
      <p className={styles.lastParagraph}>{text5}</p>
    </div>
  );
}

export default Descriere;
