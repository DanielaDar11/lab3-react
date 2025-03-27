import React from 'react';
import styles from './Buton.module.css';
function Buton({ text }) {
  return <button className={styles.buton}  type="submit">{text}</button>;
}

export default Buton;
