import React from 'react';
import Descriere from '../Descriere/Descriere';
import styles from './Informatie.module.css';
import Imaginile from '../../components/Informatie/Imaginile/Imaginile';

function Informatie({ nume, imagini, descriere }) {
  return (
    <>
      <h2>Faceți cunoștință cu {nume}</h2>
      <div className={styles.principal}>
        <div className={styles.Info}>
          <Descriere 
            text1={descriere.text1}
            text2={descriere.text2}
            text3={descriere.text3}
            text4={descriere.text4}
            text5={descriere.text5}
          />
        </div>
        <div className={styles.imaginile}>
          <Imaginile 
            imagine1={imagini[0]} 
            imagine2={imagini[1]}
            imagine3={imagini[2]}
            imagine4={imagini[3]}
            imagine5={imagini[4]}
            imagine6={imagini[5]}
            imagine7={imagini[6]}
          />
        </div>
      </div>
    </>
  );
}

export default Informatie;
