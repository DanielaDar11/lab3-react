import React from "react";
import Buton from "../Buton/Buton";
import Input from "./Input";
import styles from "./Formular.module.css";

function Formular() {
  return (
    <>
    <h3>Rezervă turul tău</h3>
    <form className={styles.formular} action="#" method="POST">
      <Input type="text" name="destinatie" placeholder="Destinația" required />
      <Input type="text" name="locPlec" placeholder="Locul de plecare" required />
      <Input type="number" name="numarPersoane" placeholder="Numărul de persoane" required />
      <Input type="number" name="numarNopti" placeholder="Numărul de nopți" required />
      <Input type="date" name="dataPlecarii" required />
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="tel" name="telefon" placeholder="Numărul de telefon" required />

      <div className={styles.optionsGroup}>
        <div className={styles.radioGroup}>
          <span>Modalitatea de plată:</span>
          <label>
            <input type="radio" name="modalitatePlata" value="cash" required />
            Cash
          </label>
          <label>
            <input type="radio" name="modalitatePlata" value="cardCredit" required />
            Card de credit
          </label>
        </div>

        <div className={styles.checkboxGroup}>
          <span>Servicii suplimentare:</span>
          <label>
            <input type="checkbox" name="micDejun" value="Mic dejun inclus" />
            Mic dejun inclus
          </label>
          <label>
            <input type="checkbox" name="transferAeroport" value="Transfer de la aeroport" />
            Transfer de la aeroport
          </label>
          <label>
            <input type="checkbox" name="excursii" value="Excursii opționale" />
            Excursii opționale
          </label>
        </div>
      </div>

      <div>
        <Buton text="Trimite rezervarea" />
      </div>
    </form>
    </>
  );
}

export default Formular;
