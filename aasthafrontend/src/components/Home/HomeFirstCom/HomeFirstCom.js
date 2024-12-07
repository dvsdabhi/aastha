import React from "react";
import styles from './HomeFirstCom.module.css';
import MainImg from '../../../Asset/image/4.jpg';
import { Link } from 'react-router-dom';

const HomeFirstCom = () => {
    return (
        <>
        <div className={styles.mainhome}>
            <div className={styles.imagecontainer}>
                <img src={MainImg} alt="Beautiful Landscape" />
                <div className={styles.imagetext}>
                    <Link to="/appointment" className={styles.buttonlink}>Book Appointment</Link>
                    <h1>Welcome to Astha homeopathy</h1>
                    <p>Your tagline or description goes here.</p>
                </div>
            </div>
            <div className={styles.textcontainer}>
                <div>
                    <h2>Hello and Welcome</h2>
                </div>
                <div>
                    <p>Thank you for being here. My name is Tom and I’m an experienced and qualified Naturopathic Nutritional Therapist. I trained at the prestigious College of Naturopathic Medicine, which incorporated two years of clinical practice. Since then, I have been practising privately, working with a diverse range of individuals who are looking for support with making meaningful and lasting changes in their physical and emotional health.</p>
                    <p>Many people who come to see me have exhausted many conventional and non-conventional approaches, struggling to get answers in their quest to get well… Many feel like the options are running out.</p>
                    <p>However, I believe that there is so much that can be done to restore health, vitality and energy.</p>
                    <p>This site is designed to provide helpful information and so please look around and also visit my Blog where you will find guidance on a range of health concerns.</p>
                </div>
                <div>
                    <Link to="/contact" className={styles.buttonlink}>Contact me</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default HomeFirstCom;