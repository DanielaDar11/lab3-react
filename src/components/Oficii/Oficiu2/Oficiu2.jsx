import React from 'react';
import DetaliiOficiu from '../DetaliiOficiu/DetaliiOficiu';
import Imagine1 from '../../../assets/Oficii/im3.png';
import Imagine2 from '../../../assets/Oficii/im4.png';
import styles from './Oficiu2.module.css';

function Oficiu2() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.details}>
            <DetaliiOficiu
              titlu="OFICIU ÎN MOLDOVA (Botanica)"
              adresa="Moldova, Chișinău,  B-dul. Dacia 45, bloc 3, etaj 2, oficiul 8"
              program={[
                "Luni - Vineri: 09:00 - 19:00",
                "Sâmbătă: 11:00 - 16:00"
              ]}
              telefon={[
                "(+373) 22 555 545",
                "(+373) 78 555 545"
              ]}
            />
            </div>
            <div className={styles.map}>
            <iframe
              title="Locație Oficiu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.0428085079175!2d28.86599069999999!3d46.9804938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97947d4335943%3A0x2eda93970721fdfd!2sBulevardul%20Dacia%2045%2C%20MD-2002%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sro!2s!4v1743067781202!5m2!1sro!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <img src={Imagine1} alt="Oficiu Imagine 1" className={styles.imagine1} />
        <img src={Imagine2} alt="Oficiu Imagine 2" className={styles.imagine2} />
      </div>
    </>
  );
}

export default Oficiu2;
