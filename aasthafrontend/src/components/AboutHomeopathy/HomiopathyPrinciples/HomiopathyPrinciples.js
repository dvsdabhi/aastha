import React from "react";
import styles from './HomiopathyPrinciples.module.css'
import IntroImg from '../../../Asset/image/6.webp';

const HomiopathyPrinciples = () => {
    return (
        <>
        <div className={styles.mainPrinciples}>
            <div className={styles.PrinciplesImg}>
                <div className={styles.PrinciplesimgText}>
                    <p>Homeopathy is based on few Hahnemannian principles.</p>
                    <ul>
                        <li><span>Law of similimum — </span>a drug cures those symptoms in diseased person , which it may cause in healthy persons. To find a remedy ,we need to compare symptoms in a patient, to symptoms of remedies in MATERIA MEDICA, which is data bank of symptoms collected by reputed past homoeopaths. It is like applying a key suitable to our lock from a given bunch of keys.</li>
                        <li><span>Law of minimum dose — </span>it says that minimum possible single dose may be used to minimise side-effects of any medicine.</li>
                        <li><span>Medicines are prepared by potentisation. </span></li>
                        <li><span>law of miasms —  </span>if indicated remedy do not work , despite the best possible selection , look for obstruction in cure , which he defined as a miasm.</li>
                        <li><span>Hering’s law of cure —  </span>during perfect cure, symptoms may shift from above downward or from vital organs to less vital structures.</li>
                    </ul>
                </div>
                <div>
                    <img src={IntroImg} alt="intro"></img>
                </div>
            </div>
        </div>
        </>
    );
};

export default HomiopathyPrinciples;