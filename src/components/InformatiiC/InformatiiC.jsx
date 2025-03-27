import React from 'react'
import styles from './Informatii.module.css';
import Buton from '../Buton/Buton';
import {Link} from 'react-router-dom';
import Detalii from '../Detalii/Detalii';
import im1 from '../../assets/Detalii/im1.png';
import im3 from '../../assets/Detalii/im3.png';


function InformatiiC() {
  return (
    <>
    <div className={styles.principal}>
       <div className={styles.secund}><h2>De ani buni, Via Tur îți deschide porțile către destinații de vis și experiențe de neuitat.</h2>
       <p>La Via Tur, credem că fiecare călătorie este mai mult decât o vacanță – este o oportunitate de a descoperi lumea, de a trăi momente autentice și de a crea amintiri care vor dăinui o viață întreagă. De 7 ani, suntem alături de tine pentru a transforma visurile în realitate, oferind destinații captivante și vacanțe personalizate, perfect adaptate dorințelor și nevoilor tale.</p>
       <Link to="/despre" ><Buton text="Află mai multe despre noi"/></Link>
       </div>
       <div>
        <div className={styles.divul}>
        <div className={styles.primul}>
            <div><Detalii titlu="Experiență" text="De 7 ani, transformăm fiecare călătorie într-o amintire de neuitat." culoareTitlu="red"/></div>
            <div><img src={im1}></img></div>
        </div>
        <div className={styles.altreilea}>
            <div><img src={im3}></img></div>
            <div><Detalii titlu="Siguranță" text="Cu Via Tur, fiecare detaliu al vacanței tale este asigurat cu grijă și profesionalism." culoareTitlu="green"/></div>
        </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default InformatiiC