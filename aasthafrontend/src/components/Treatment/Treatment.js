import React from "react";
import styles from './Treatment.module.css';
import { Link } from "react-router-dom";

const Treatment = () => {
    const AllTreatment = [
        "Mental Diseases",
        "Skin Diseases",
        "Respiratory Diseases",
        "Gastrointestinal Diseases",
        "Joint Diseases",
        "Child Diseases",
        "Male & Female Infertility",
        "Cancer & Genetic Mutation Diseases",
        "Kidney Diseases",
    ]
    return (
        <>
        <div className={styles.treatmentContainerMain}> 
            <div className={styles.treatmentContainer}>
                <div>
                    <h3>All Treatments</h3>
                </div>
                <div>
                    <ul className={styles.treatmentList}>
                        {AllTreatment.map((item,index) => (
                            <li key={index} className={styles.treatmentItem}>
                                <Link to={`/treatment/${item.toLowerCase().replace(/ /g, '-')}`}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.Timing}>
                <h3>Opening Hours</h3>
            </div>
        </div>
        </>
    );
};

export default Treatment;