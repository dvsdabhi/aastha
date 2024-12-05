import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <div className={styles.mainfooter}>
            <div className={styles.mainfooterfirst}>
                <h1>Newsletter</h1>
                <p>want to know</p>
                <div>
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div>
                <div>
                    <h1>Shedule</h1>
                    <p>Monday-Sunday</p>
                    <p>9AM - 9 PM</p>
                </div>
                <div>
                    <h1>Address</h1>
                    <p>Dabholi char rasta</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>Follow us</h1>
                    <p><a href="">Facebook</a></p>
                    <p><a href="">Instagram</a></p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p><span>EMAIL :</span> demo@gmail.com</p>
                    <p><span>Phone :</span> +91 1478523214</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;