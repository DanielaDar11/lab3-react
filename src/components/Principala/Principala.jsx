import React from 'react'
import principala from "../../assets/principala/imagec.png";
import styles from './Principala.module.css';

function Principala() {
  return (
    <>
    <div className={styles.principal}>
       <div className={styles.secund}> <h2>Explorează visurile noi și trăiește aventuri de neuiat</h2>
       <br></br><p>Fiecare destinație îți dezvăluie o poveste unică. Descoperă locuri fascinante și trăiește momente de neuitat cu pachete personalizate și oferte speciale, create pentru a-ți transforma visurile în realitate.</p>
    <button>Tururi în diverse țări</button>
       </div>
       <div>
        <img src={principala} alt="Principala"/>
       </div>
    </div>
    </>
  )
}

export default Principala