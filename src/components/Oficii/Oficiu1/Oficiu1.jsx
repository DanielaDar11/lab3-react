import React from 'react';
import DetaliiOficiu from '../DetaliiOficiu/DetaliiOficiu';
import Imagine1 from '../../../assets/Oficii/im1.png';
import Imagine2 from '../../../assets/Oficii/im2.png';
import styles from './Oficiu1.module.css';

function Oficiu1() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.map}>
            <iframe
              title="Locație Oficiu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.688955821058!2d28.8574293!3d47.0104524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3a8a5e84ff%3A0x3bfe00a3f27d3f6d!2sStrada%20Ismail%2056%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2sro!4v1614612314541!5m2!1sen!2sro"
              width="100%"
              height="300"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className={styles.details}>
            <DetaliiOficiu
              titlu="OFICIU ÎN MOLDOVA (CENTRU)"
              adresa="Moldova, Chișinău, str Ismail 56, bloc 3, etaj 2, oficiul 7"
              program={[
                "Luni - Vineri: 09:00 - 19:00",
                "Sâmbătă: 10:00 - 15:00"
              ]}
              telefon={[
                "(+373) 22 555 555",
                "(+373) 78 555 555"
              ]}
            />
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

export default Oficiu1;
