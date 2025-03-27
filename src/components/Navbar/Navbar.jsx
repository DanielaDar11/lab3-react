import React from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import Buton from '../Buton/Buton';
function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}><img src={logo}/>ViaTravel</div>
            <div className={styles.navigation}>
                <Link to="/" className={styles.linkuri}>Acasă</Link>
                <Link to="/" className={styles.linkuri}>Destinații</Link>
                <Link to='/' className={styles.linkuri}>Oferte Speciale</Link>
                <Link to="/despre" className={styles.linkuri}>Despre Noi</Link>
                <Link to="/contacte" className={styles.linkuri}>Contacte</Link>
                <Link to="/rezervari" ><Buton text="Rezervă acum"/></Link>
            </div>
        </div>

    )
}
export default Navbar;