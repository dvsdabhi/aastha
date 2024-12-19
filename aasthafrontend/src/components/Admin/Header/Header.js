import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Header = () => {
    return (
        <>
        <div className={styles.dashboard}>
            <aside className={styles.sidebar}>
                <h2 className={styles.logo}>Admin Panel</h2>
                <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="/admin/dashboard">Dashboard</Link></li>
                <li className={styles.navItem}><Link to="/admin/appointment">Appointment</Link></li>
                <li className={styles.navItem}><Link to="/admin/inquiry">Inquiry</Link></li>
                <li className={styles.navItem}><Link to="/admin/settings">Settings</Link></li>
                </ul>
            </aside>
        </div>
        </>
    )
}

export default Header;