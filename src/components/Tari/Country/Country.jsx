import React from 'react';
import styles from './Country.module.css';

function Country({ name, image, lungime, latime, position }) {
  const positionClass = position ? styles[position] : styles.center;
  
  return (
    <div 
      className={styles.card} 
      style={{
        width: latime, 
        height: lungime, 
        backgroundImage: `url(${image})`  
      }}
    >
      <p className={`${styles.name} ${positionClass}`}>{name}</p>
    </div>
  );
}

export default Country;
