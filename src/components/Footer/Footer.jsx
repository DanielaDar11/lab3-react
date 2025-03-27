import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebook from "../../assets/reteleSociale/facebook.png";
import instagram from "../../assets/reteleSociale/instagram.png";
import tiktok from "../../assets/reteleSociale/tiktok.png";
import viber from "../../assets/reteleSociale/viber.png";
import telegram from "../../assets/reteleSociale/telegram.png";
import logo from '../../assets/logo.png';
import visa from "../../assets/reteleSociale/visa.png";
import mastercard from "../../assets/reteleSociale/mastercard.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.contact}>
       <Link to="/"> <img src={logo}/></Link>
          <a href="#">
            +373 60 06 57 86
          </a>
          <a href="#">
            oferte.via@viatravel.md
          </a>
        </div>
        <div className={styles.socials}>
          <a href="#">
            <img src={instagram} alt="Instagram" className={styles.icon} />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" className={styles.icon} />
          </a>
          <a href="#">
            <img src={viber} alt="Viber" className={styles.icon} />
          </a>
          <a href="#">
            <img src={telegram} alt="Telegram" className={styles.icon} />
          </a>
          <a href="#">
            <img src={tiktok} alt="TikTok" className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.links}>
        <Link to="/politica">Politica de confidențialitate</Link>
        <Link to="/termeni_conditii">Termeni și condiții</Link>
      </div>
      <div className={styles.topSection}>
      <p className={styles.copyright}>
        © 2020 - 2024 Via Travel S.R.L. Toate drepturile sunt rezervate.
      </p><div className={styles.carduri}><img src={visa} alt="TikTok" className={styles.icon} />
      <img src={mastercard} alt="TikTok" className={styles.icon} /></div>
       </div>
    </footer>
  );
}

export default Footer;
