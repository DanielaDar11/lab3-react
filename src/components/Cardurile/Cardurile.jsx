import React from 'react'
import styles from './Cardurile.module.css';
import {Link} from  'react-router-dom';

function Cardurile({ image, tip, inclus, data, rezervare, mesaj, pret }) {
    return (
      <div className={styles.card}>
        <div className={styles.cardImage} style={{ backgroundImage: `url(${image})` }}>
          <Link  to="/rezervari" ><button className={styles.cardPriceButton}>{pret}</button></Link>
        </div>
        <div className={styles.cardContent}>
          <p  className={styles.paragraf}><span>Tur: </span>{tip}</p>
          <p className={styles.paragraf}><span>Inclus: </span>{inclus}</p>
          <p className={styles.paragraf}><span>Data: </span>{data}</p>
          <p className={styles.paragraf}><span>{rezervare}</span></p>
          <p className={styles.unid}>{mesaj}</p>
        </div>
      </div>
    );
}

export default Cardurile;
