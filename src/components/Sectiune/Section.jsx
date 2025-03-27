import React from 'react'
import styles from './Section.module.css';
function Section({ title, children }) {
  return (
    <div className={styles.privacy}>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
  )
}

export default Section