import React from 'react'
import styles from './InformatiiJos.module.css';
import Section from '../Sectiune/Section';
import multiCountry from '../../assets/Despre/multiCountry.png';
import destination from '../../assets/Despre/destination.png';

function InformatiiJos() {
  return (
  <>
  <h2>Contactați-ne acum!</h2>
    <div className={styles.principal}>
        <div className={styles.primul}>
            <div >
            <Section title="✔ Încredere și siguranță">
                    La Via Travel, suntem alături de clienții noștri în orice situație, asigurându-ne că vacanțele lor sunt planificate fără griji.
            </Section>
            <Section title="✔ Parteneriate directe și prețuri avantajoase">
            Lucrăm direct cu hoteluri și companii aeriene de renume, oferindu-vă cele mai bune prețuri și opțiuni de cazare.
            </Section>
            <Section title="✔ Abordare personalizată">
            Oferim recomandări adaptate nevoilor fiecărui client, pentru o vacanță perfectă.
            </Section>
      </div>
      <div ><img src={destination}></img></div>
        </div>
        <div className={styles.aldoilea}>
            <div><img src={multiCountry}></img></div>
            <div>
            <Section title="✔ Oferte speciale">
            Publicăm zilnic cele mai bune oferte, pentru ca vacanța voastră să fie simplă și accesibilă
            </Section>
            <Section title="✔ Experiență vastă în destinații">
            Testăm și evaluăm locațiile pentru a vă garanta o vacanță care depășește așteptările.
            </Section>
            <Section title="✔ Manager personal">
            Un manager dedicat vă va ajuta pe tot parcursul călătoriei, asigurându-se că totul decurge perfect.
            </Section>
      </div>
        </div>
    </div>
    </>
  )
}

export default InformatiiJos