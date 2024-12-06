import React from "react";
import styles from './Contactus.module.css';
import Dropdown from "../DropDown/DropDown";
const ContactusSecond = () => {
    return (
        <>
        <div className={styles.ContactUsSecond}>
            <h2>Common Questions, Clear Answers</h2>
            <p>Have some questions before reaching out? We've got you covered! Check out our frequently asked questions to find quick answers to common queries about our homoeopathic treatments, services, and more. If you don’t see your question here, feel free to use the form to ask us directly. We're here to help!</p>
            <Dropdown />
        </div>
        </>
    );
};

export default ContactusSecond;