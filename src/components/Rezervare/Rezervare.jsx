import React from 'react'
import styles from './Rezervari.module.css';
import Formular from './Formular';
function Rezervari() {
  return (
    <>
    <div className={styles.principal}>
       <div className={styles.secund}> <h2>Explorează și trăiește aventura la maxim cu noi!</h2>
    </div>
    <div className={styles.formular}><Formular/></div>
    </div>
    </>
  )
}

export default Rezervari

