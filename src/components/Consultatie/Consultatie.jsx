import React from 'react'
import styles from './Consultatie.module.css'
import Imagine1 from '../../assets/reteleSociale/telegram.png';
import Imagine2 from '../../assets/reteleSociale/instagram.png';
import Imagine3 from '../../assets/reteleSociale/viber.png';
import Imagine4 from '../../assets/reteleSociale/facebook.png';
import ImaginiCentrate from './ImaginiCentrate/ImaginiCentrate';

function Consultatie({titlu}) {
  return (
    <>
    <div className={styles.cons}>
    <h2>{titlu}</h2>
    <ImaginiCentrate
        imagine1={Imagine1}
        imagine2={Imagine2}
        imagine3={Imagine3}
        imagine4={Imagine4}
      />
      </div>
    </>
    
  )
}

export default Consultatie