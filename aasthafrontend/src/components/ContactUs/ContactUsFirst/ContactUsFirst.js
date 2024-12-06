import React from "react";
import styles from './ContactUsFirst.module.css';
import { FaMapLocation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const ContactUsFirst = () => {
    return (
        <>
        <div className={styles.ContactUsFirst}>
            <div className={styles.ContactUsFirstLocation}>
                <div className={styles.FaMapLocation}>
                    <FaMapLocation />
                </div>
                <div className={styles.ContactUsFirstLocationText}>
                    <p>
                        <b>Location</b>
                        <br />
                        3080, 3rd Floor, Silver Business Point, Above SBI Bank, Near Atal Bridge, Utran, Surat, Gujarat 394105
                    </p>
                </div>
            </div>
            <div className={styles.ContactUsFirstAppointment}>
                <div className={styles.FaMapLocation}>
                    <FaPhone />
                </div>
                <div className={styles.ContactUsFirstText}>
                    <p>
                        <b>For Appointment</b>
                        <br />
                        <br />
                        (+91) 97374 17666
                    </p>
                </div>
            </div>
            <div className={styles.ContactUsFirstEmail}>
                <div className={styles.FaMapLocation}>
                    <MdMarkEmailRead />
                </div>
                <div className={styles.ContactUsFirstLocationText}>
                    <p>
                        <b>Email</b>
                        <br />
                        test@gmail.com
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactUsFirst;