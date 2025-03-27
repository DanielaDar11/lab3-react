import React from 'react'
import styles from './Motive.module.css';
import motivele from '../../data/motive.json';
import ButonM from './ButonM/ButonM';
function Motive() {
  return (
    <>
    <div className={styles.principal} >
    <h1>Cunoașteți echipa Via Travel</h1>
         <div className={styles.secundar}>
         {motivele.map((motive, index) => (
          <ButonM 
            key={index} 
            imagine={motive.image}
            titlu={motive.titlu}
          /> ))}
         </div> 
    </div>
    </>
  )
}

export default Motive