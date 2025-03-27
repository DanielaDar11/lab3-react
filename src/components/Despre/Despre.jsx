import React from 'react';
import Sectiune from './Sectiune/Sectiune';
import styles from './Despre.module.css';
import compozitie from '../../assets/Despre/compozitie.png';
function Despre() {
  return (
    <div className={styles.container}>
        <div className={styles.primul}>
      <Sectiune 
        titlu="Misiunea noastră" 
        text="La Via Travel, ne dedicăm să oferim vacanțe de neuitat, care se potrivesc perfect cu dorințele și nevoile fiecărui client. Fie că e vorba de o escapadă relaxantă sau o aventură de neuitat, misiunea noastră este să facem fiecare călătorie specială." 
      />
      
      <Sectiune 
        titlu="Valorile fundamentale" 
        text="Suntem ghidați de valori esențiale: încredere, profesionalism și servicii personalizate. Fiecare vacanță pe care o organizăm este bazată pe aceste principii fundamentale pentru a asigura o experiență excelentă." 
      />
      
      <Sectiune 
        titlu="Istoricul companiei" 
        text="Via Travel a fost fondată cu scopul de a transforma fiecare vacanță într-o experiență memorabilă. De-a lungul celor 7 ani, am reușit să ajutăm mii de turiști să-și descopere destinațiile preferate și să creeze amintiri de neuitat. Fiecare călătorie planificată de noi reflectă angajamentul nostru de a oferi servicii de calitate și soluții personalizate, adaptate nevoilor fiecărui client." 
      />
      </div>
      <div className={styles.imagini}><img src={compozitie}></img></div>
    </div>
  );
}

export default Despre;
