import React from 'react';
import DetaliiOficiu from '../DetaliiOficiu/DetaliiOficiu';
import Imagine1 from '../../../assets/Oficii/im5.png';
import Imagine2 from '../../../assets/Oficii/im6.png';
import styles from './Oficiu.module.css';

function Oficiu3() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.map}>
            <iframe
              title="Locație Oficiu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31323.734471470383!2d27.86539033695425!3d47.77318186752813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb60ade959d323%3A0x32a8ae9a4a8e749f!2zU3RyYWRhIERlY2ViYWwsIELEg2zIm2ksIE1vbGRvdmE!5e0!3m2!1sro!2s!4v1743068674657!5m2!1sro!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className={styles.details}>
            <DetaliiOficiu
              titlu="OFICIU ÎN MOLDOVA (Bălți)"
              adresa="Moldova, Bălți, str  Decebal, blocu 5, etaj 2"
              program={[
                "Luni - Vineri: 09:00 - 19:00",
                "Sâmbătă: 10:00 - 15:00"
              ]}
              telefon={[
                "(+373) 22 578 555",
                "(+373) 78 578 555"
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

export default Oficiu3;
