import React from 'react'
import styles from './ImagineaSus.module.css';
function ImagineaSus({ imagine, name}) {
  return (
    <div className={styles.destinatie} style={{ backgroundImage: `url(${imagine})` }}>
    <div className={styles.name}>
      <h2>{name}</h2>
    </div>
  </div>
  )
}

export default ImagineaSus