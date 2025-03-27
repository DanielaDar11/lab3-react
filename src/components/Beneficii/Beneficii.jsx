import React from 'react';
import styles from './Beneficii.module.css';

function Beneficii({ title, list, image }) {
  return (
    <div className={styles.principal}>
      <div className={styles.primul}>
        <h2>{title}</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.aldoilea}>
        <img src={image} alt="Despre noi" />
      </div>
    </div>
  );
}

export default Beneficii;
