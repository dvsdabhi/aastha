import React from "react";
import styles from './Aboutus.module.css';
import { FaCheckCircle } from "react-icons/fa";
import AboutImg from '../../Asset/image/10.webp';
const Aboutus = () => {
    return (
        <>
        <div className={styles.mainAbout}>
            <div>
                <p><b>Best Homeopathy doctor in Surat,</b> Satva Homeopathy provides the finest homoeopathic treatment. 
                Our commitment is to deliver natural and effective healing. We have a team of experienced and licensed homoeopathic doctors. 
                Our doctors understand each patient’s medical history to provide the best treatment plan.</p>
                <p>Are you looking for homoeopathy near Uttran, Surat? Visit Satva Homoeopathy Clinic near Uttran for the best treatment.</p>
            </div>
            <div className={styles.AboutImg}>
                <div>
                    <img src={AboutImg} alt="about" />
                </div>
                <div>
                    <button>Few words about us</button>
                    <h2>Dr. Pratik Gorasiya</h2>
                    <div className={styles.education}>
                        <p><FaCheckCircle className={styles.FaCheckCircle}/><span>BHMS (Consulting Homoeopath)</span></p>
                        <p><FaCheckCircle className={styles.FaCheckCircle}/> <span>SCPH (ICHM United Nation)</span></p>
                        <p><FaCheckCircle className={styles.FaCheckCircle}/> <span>SCPH Plus</span></p>
                    </div>
                    <p><b>Dr. Priyank Shekhaliya</b>is one of the <b>Homeopathy Doctor in Surat.</b> He has been practicing homoeopathy for over 10 years now. He completed his BHMS from a reputed Baroda homeopathy medical college. He also holds specialized certifications in predictive homoeopathy and research.</p>
                    <p>Dr. Gorasiya has gained rich clinical experience. He has worked with several top homoeopathic clinic across Gujarat. He is passionate about providing the best possible care to his patients.</p>
                    <p>Dr. Gorasiya specializes in curing joints, skin, children, kidney stones, cancer, coma, genetic mutation cases and piles. With his thorough case evaluation approach and meticulous follow-ups, Dr. Gorasiya has helped countless patients find relief from even chronic conditions. Colleagues and patients praise his calm demeanour, attention to detail, and dedication.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Aboutus;