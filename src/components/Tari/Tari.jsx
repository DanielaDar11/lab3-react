import React from 'react'
import Country from './Country/Country';
import {Link} from 'react-router-dom';
import Grecia from '../../assets/Country/Grecia.png';
import Spania from '../../assets/Country/Spania.png';
import Turcia from '../../assets/Country/Turcia.png';
import Egipt from '../../assets/Country/Egipt.png';
import Italia from '../../assets/Country/Italia.png';
import Austria from '../../assets/Country/Austria.png';
import styles from './Tari.module.css';
function Tari() {
  return (
    <div><h1>Țări populare</h1>
   <div className={styles.taraContainer}>
    <div className={styles.tara}><Link to="/grecia"><Country name="Grecia" image={Grecia} lungime="178px" latime="514px" position="top-left"/></Link>
    <Link to="/spania"><Country name="Spania" image={Spania} lungime="178px" latime="691px" position="bottom-left"/></Link>
    </div>
    <div  className={styles.tara}>
    <Link to="/turcia"><Country name="Turcia" image={Turcia} lungime="221px" latime="837px"position="top-right"/></Link>
    <Link to="/egipt"><Country name="Egipt" image={Egipt} lungime="221px" latime="359px" position="top-left"/></Link></div>
    <div className={styles.tara}><Link to="/italy"><Country name="Italia" image={Italia} lungime="193px" latime="598px" position="top-left"/></Link>
    <Link to="/austria"><Country name="Austria" image={Austria} lungime="193px" latime="598px" position="bottom-left"/></Link></div>
   </div>
    </div>

  )
}

export default Tari