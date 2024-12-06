import React from "react";
import styles from './HomiopathyIntro.module.css'
import IntroImg from '../../../Asset/image/5.webp';

const HomiopathyIntro = () => {
    return (
        <>
        <div className={styles.mainintro}>
            <div className={styles.Introimg}>
                <div>
                    <img src={IntroImg} alt="intro"></img>
                </div>
                <div className={styles.IntroimgText}>
                    <p>It might come as a surprise to you that homeopathy is by far the most widely practiced alternative medicine and the 2nd largest system of medicine in the world as per the World Health Organization (WHO). It is being practised in over 80 countries and used by 50 crore people worldwide including Western and Eastern Europe, India, America and many parts of Asia as well. China and Japan have begun programs. The world homeopathic market is valued at over 2.7 billion dollars with France leading the market at approximately 405 million dollars and Germany following second at nearly 270 million dollar and has the current annual growth rate being 25%.. So, rest assured, there are many millions of people throughout the world choosing homeopathy as their choice for good and effective healthcare.</p>
                    <p>In 1796, just over 200 years old, Homeopathy was founded by the great German physician Samuel Hahnemann. Homeopathy is based on the law of similars, according to which, a substance capable of producing certain symptoms in a healthy individual is capable of treating similar symptoms in a diseased person. Thus, the logic is to evoke a healing response from the body itself rather than trying to suppress the disease manifestation.</p>
                    <p>Moreover, Homeopathy believes that each person reacts differently to the same stimulus – this is called ‘individualization’, and it is a unique feature of homeopathy. For example, it is common experiences that while cutting onions the eyes start burning, the nose starts to run and sometimes a person will sneeze. Red chilly powder can have a similar effect – burning, watering eyes, irritated and runny nose, sneezing.</p>
                </div>
            </div>
            <div className={styles.IntroText}>
                <p>However, the effects of the two differ significantly: while onion causes a bland nasal discharge with a burning eye discharge, red chilly there is burning in the eyes and nose but both the discharges are bland. In both the instances the phenomenon is like the common cold but the nature of the discharges varies. So two people with the same common cold need two different drugs based on their specific manifestation. Both onion-Alium cepa and red chilly are homeopathic drugs. There are a number of other substances that give rise to symptoms like the common cold, each with subtle variations, and all of them are useful in the treatment of various “types” of cold.</p>
                <p>Homeopathy is the holistic science where both physical and psychological components of the diseased person are taken in to consideration to select the medicine. This truth has been accepted by modern medicine only now – psycosomatic disease. Also, the fact that diseases are not caused by the mere presence of disease-causing organisms in the internal or external environment, but rather due to the weakening of the body’s defence mechanisms.</p>
            </div>
        </div>
        </>
    );
};

export default HomiopathyIntro;