import React from 'react';
import Cardurile from '../Cardurile';
import styles from './Oferte.module.css';
function OferteGrecia({ oferte }) {
  return (
    <div className={styles.cardContainer}>
      {oferte.map((oferta) => (
        <Cardurile 
          key={oferta.id} 
          image={oferta.image} 
          tip={oferta.tip} 
          inclus={oferta.inclus} 
          data={oferta.data} 
          rezervare={oferta.rezervare} 
          mesaj={oferta.mesaj} 
          pret={oferta.pret} 
        />
      ))}
    </div>
  );
}

export default OferteGrecia;
