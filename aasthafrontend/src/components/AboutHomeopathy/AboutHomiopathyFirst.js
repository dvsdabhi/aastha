import React, { useState } from 'react';
import styles from './AboutHomiopathyFirst.module.css';
import { BiSolidQuoteAltLeft } from "react-icons/bi";

import Drimg from '../../Asset/image/9.webp';

import HomiopathyIntro from './HomiopathyIntro/HomiopathyIntro';
import HomiopathyPrinciples from './HomiopathyPrinciples/HomiopathyPrinciples';
import HomiopathyBenefits from './Benefits/HomiopathyBenefits';
import HomiopathyMyths from './HomiopathyMyths/HomiopathyMyths';
import HomiopathyFacts from './HomiopathyFacts/HomiopathyFacts';
import HomiopathyHistory from './HomiopathyHistory/HomiopathyHistory';
import HomiopathyPharmacology from './HomiopathyPharmacology/HomiopathyPharmacology';
const AboutHomiopathyFirst = () => {
    // State to manage the active button
    const [activeButton, setActiveButton] = useState(0); // Default to the first button (index 0)
    const [Intro, setIntro] = useState("Introduction");
    const [Principles, setPrinciples] = useState();
    const [Benefits, setBenefits] = useState();
    const [Myths, setMyths] = useState();
    const [Facts, setFacts] = useState();
    const [History, setHistory] = useState();
    const [Pharmacology, setPharmacology] = useState();

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
                                onClick={() => {
                                    setActiveButton(index);
                                    setIntro(buttonLabels[index]);
                                    setPrinciples(buttonLabels[index]);
                                    setBenefits(buttonLabels[index]);
                                    setMyths(buttonLabels[index]);
                                    setFacts(buttonLabels[index]);
                                    setHistory(buttonLabels[index]);
                                    setPharmacology(buttonLabels[index]);
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.AboutHomiopathySecond}>
                    <div>
                        {Intro === "Introduction" && 
                            <HomiopathyIntro />
                        }
                        {Principles === "Principles" &&
                            <HomiopathyPrinciples />
                        }
                        {Benefits === "Benefits" && 
                            <HomiopathyBenefits />
                        }
                        {Myths === "Myths" && 
                            <HomiopathyMyths />
                        }
                        {Facts === "Facts" && 
                            <HomiopathyFacts />
                        }
                        {History === "History" && 
                            <HomiopathyHistory />
                        }
                        {Pharmacology === "Pharmacology" && 
                            <HomiopathyPharmacology />
                        }

                    </div>
                </div>
                <div className={styles.AboutHomiopathyThird}>
                    <img src={Drimg} />
                    <p>
                        <b>Dr Samuel Hahnemann</b>
                        <br />
                        <br />
                        <BiSolidQuoteAltLeft className={styles.icon}/>
                        <br />
                        "In Communicating to the world this great discovery I am sorry that i must doubt whether my contemporaries will comprehend the logical sequence of these teachings of mine, and follow them carefully and gain therby the infinite benefits for the suffering humanity which must inevitably spring from a faithful and accurate observance of the same."
                    </p>
                </div>
                <div className={styles.AboutHomiopathyThird}>
                    <p>
                        <b>Dr Priyank Shekhaliya</b>
                        <br />
                        <br />
                        <BiSolidQuoteAltLeft className={styles.icon}/>
                        <br />
                        When almost the entire world had discarded homoeopathy, one wonders what drove Dr. Priyank Shekhaliya towards pursuing the field. What drove him was his quest for knowledge, the challenge of revolutionize the practice and self-belief. The founder of homoeopathy was a German man, Dr. Samuel Hahnemann, The God of homoeopathy as he is known. Dr. Priyank Shekhaliya had one belief, that when the Germans create something, it has to be perfect. And if there is perfection, then why is the field struggling? He started investigating into the flaws and the setbacks in the profession.
                    </p>
                    <img src={Drimg} />
                </div>
            </div>
        </>
    );
};

export default AboutHomiopathyFirst;
