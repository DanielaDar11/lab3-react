import React from 'react';
import styles from './Oferte.module.css';
import oferteData from "../../data/oferte.json";
import {Link} from 'react-router-dom';
function Oferte() {
  return (
    <div className={styles.oferteContainer}>
      <h1>Oferte Speciale 🔥</h1>
      <div className={styles.oferteList}>
        {oferteData.map((oferta) => (
          <div key={oferta.id} className={styles.ofertaCard}>
            <img src={oferta.image} alt={oferta.name} />
            <h2>{oferta.name}</h2>
            <p>{oferta.data}</p>
            <p>{oferta.nopti}</p>
            <p>{oferta.plecare}</p>
            <p>{oferta.mancare}</p>
            <p>{oferta.transport}</p>
            <p>{oferta.Persoane}</p>
            <Link to="/rezervari" ><button className={styles.pretButton}>{oferta.pret}</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Oferte;
