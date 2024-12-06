import React from "react";
import styles from './ContactUs.module.css';

import ContactUsFirst from "./ContactUsFirst/ContactUsFirst";
import ContactusSecond from "./ContactUsSecond/ContactusSecond";
import ContactusThird from "./ContactUsThird/ContactusThird";

const ContactUs = () => {
    return (
        <>
            <div className={styles.mainContact}>
                <div>
                    <ContactUsFirst />
                </div>
                <div className={styles.mainContactdrop}>
                    <ContactusSecond />
                    <ContactusThird />
                </div>
            </div>
        </>
    );
};

export default ContactUs;