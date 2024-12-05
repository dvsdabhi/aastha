import React from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
    return (
        <>
        <header className={styles.headmain}>
            <div>
                logo
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/about-homeopathy">About Homeopathy</Link></li>
                        <li><Link to="/appointment">Book Appointment</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </header>
        <hr styles="opacity: 0.5; width:1500px;"></hr>
        </>
    )
}

export default Header;