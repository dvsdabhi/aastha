import React from "react";
import styles from './HomiopathyBenefits.module.css';
import BenifitImg from '../../../Asset/image/7.webp';

const HomiopathyBenefits = () => {
    return (
        <>
       <div className={styles.mainBenefits}>
            <div className={styles.Benefitsimg}>
                <div>
                    <img src={BenifitImg} alt="intro"></img>
                </div>
                <div className={styles.BenefitsimgText}>
                    <p><b>Advantages of Homeopathy</b></p>                    
                    <p>
                        <b>Avoid surgery</b>
                        <br />
                        Chalazion, tonsillitis, venereal or general warts, corns, ganglion, fistula-in-ano, internal or external piles, renal calculi etc. are some of the conditions treated successfully with Homeopathy, conditions commonly operated on.
                    </p>
                    <p>
                        <b>No side effects, no contraindications</b>
                        <br />
                        Decades of clinical use and trials of the preparations have concluded that Homeopathic medicines are safe with other modes of treatment, effective, non-toxic, and free of any side effects.
                    </p>
                    <p>
                        <b>Cost-effective treatment</b>
                        <br />
                        Homeopathic treatment is extremely cost-effective in the long run especially keeping in mind that treatment is sought for chronic diseases that need long-term treatment. Homeopathy believes in employing a single remedy, in minimum dose and minimal repetition when treating any patient. Homeopathic medicines are therefore inexpensive as compared to medicines from the other medical systems. Moreover, Homeopathy also obviates the need for surgery in a number of conditions such as warts, piles, fissures, tonsillitis, ovarian cysts and kidney stones for which patient may otherwise have to pay up a lot for conventional treatment methods.
                    </p>
                </div>
            </div>
            <div className={styles.BenefitsText}>
                <p>
                    <b>Curative & palliative</b>
                    <br />
                    Homeopathy not only cures cases but also offers relief to conditions progressed to irreversible structural changes such as degenerative arthritis, side effects of chemo or radiotherapy etc.
                </p>
                <p>
                    <b>Pain Relief without side effects</b>
                    <br />
                    Clinically, homeopathic medicines successfully relieve colic, spasms, general or trigeminal neuralgia, migraine headaches, toothache, chronic lumbago, sciatica, pain due to trauma etc.</p>
                <p>
                    <b>Patient-friendly and convenient</b>
                    <br />
                    Homeopathy is a complete system of medicine that assists the natural tendency of the human body to heal itself. Homeopathic medicines being easy to administer, sweet to taste, non-invasive and free of side-effects, are extremely convenient for the patient and therefore command better patient compliance. They are absolutely safe even if taken for prolonged periods of time. The doctor-patient relationship is vital in Homeopathy, where the homeopath becomes a friend, philosopher, and guide to the patient, a healer as well as a preserver of good health.
                </p>
                <p>
                    <b>Anti-allergic, anti-viral, anti-septic</b>
                    <br />
                    Unlike allopathic medicines, homeopathy offers non-drowsy allergy treatment for hay fever, complete cure for viral warts, faster relief for viral cold sores and herpes and anti-bacterial therapy for infectious conditions. These have been verified at our clinics over the past 90 years and by clinicians worldwide.
                </p>
                <p>
                    <b>Human tested safe Medicines</b>
                    <br />
                    The biggest advantage of Homeopathy is that irrespective of the number of organs or systems involved, only a single remedy needs to be given at a time, termed the ‘similimum’ or the constitutional remedy that covers the entire case. Homeopathy is against animal testing as animals do not speak and the exact symptoms are not recorded. Homeopathic remedies are directly tested on healthy human beings through a scientific process called drug proving which enables recording of even mental and emotional symptoms.
                </p>
            </div>
        </div>
        </>
    );
};

export default HomiopathyBenefits;