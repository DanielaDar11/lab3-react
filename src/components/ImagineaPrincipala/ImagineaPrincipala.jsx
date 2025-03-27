import React from 'react'
import styles from './ImagineaPrincipala.module.css';
function ImagineaPrincipala({ imagine, name, text }) {
  return (
    <div className={styles.destinatie} style={{ backgroundImage: `url(${imagine})` }}>
    <div className={styles.text}>
      <h2>{name}</h2>
      <p>{text}</p>
    </div>
  </div>
  )
}

export default ImagineaPrincipala