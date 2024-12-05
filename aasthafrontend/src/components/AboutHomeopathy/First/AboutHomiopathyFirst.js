import React, { useState } from 'react';
import styles from './AboutHomiopathyFirst.module.css';

const AboutHomiopathyFirst = () => {
    // State to manage the active button
    const [activeButton, setActiveButton] = useState(0); // Default to the first button (index 0)

    // Button labels
    const buttonLabels = [
        'Introduction',
        'Principles',
        'Benefits',
        'Myths',
        'Facts',
        'History',
        'Pharmacology',
    ];

    return (
        <>
            <div className={styles.AboutHomiopathyFirst}>
                <div className={styles.AboutHomiopathyFirstintro}>
                    <div className={styles.abouthomioIntro}>
                        {buttonLabels.map((label, index) => (
                            <button
                                key={index}
                                className={activeButton === index ? styles.active : ''}
                                onClick={() => setActiveButton(index)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.AboutHomiopathySecond}>
                    <div>
                        image
                    </div>
                    <div>
                        intro
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHomiopathyFirst;
