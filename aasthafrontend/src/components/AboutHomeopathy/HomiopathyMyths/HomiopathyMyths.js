import React from "react";
import styles from './HomiopathyMyths.module.css';
import IntroImg from '../../../Asset/image/7.webp';

const HomiopathyMyths = () => {
    return (
        <>
       <div className={styles.mainMyths}>
            <div className={styles.Mythsimg}>
                <div className={styles.MythsimgText}>
                    <p>Each work has to pass through these stages – Redicule, Opposition & Acceptance What matters at the end is TIME !” so is Homeopathy.</p>                    
                    <p>
                        <b>Homeopathic medicines are placeboes</b>
                        <br />
                        White sugar pills, as such do not have any medicinal value. But these act as vehicles or carriers for the medicines, which are alcohol based. Otherwise the medicine can be taken directly or dissolved in water. Homeopathic medicines have been scientifically studied the world over and found to be effective in a wide range of diseases. The World Health Organization (WHO) has recognized Homeopathy as an accepted system of medicine and the world’s second largest system of medicine. Homeopathy even works on animals in diseases like distemper and fifty percent of veterinary doctors in UK use Homeopathy. It shows effective results in infants even in acute diseases such as abdominal colic. This would not have been possible if homeopathic remedies were placeboes.
                    </p>
                    <p>
                        <b>All homeopathic medicines are the same</b>
                        <br />
                        Although all homeopathic medicines look alike, essentially they are not the same. The basic ingredients of homeopathic medicines come from 3500 different sources that are mainly derived from plants and minerals. Their active principles are extracted into various solvents. For better palatability, the liquid homeopathic medicine is poured into small globules, which are highly porous and therefore absorptive. Although they may look alike, every homeopathic remedy is different from another.
                    </p>
                    <p>
                        <b>Homeopathy is a ‘magic remedy’ that can treat any disorder.</b>
                        <br />
                        Homeopathy like any other field of medicine, has its limitations. For example, it cannot treat cases where surgery is unavoidable or structural irreversible pathologies, many dental cases, etc.
                    </p>
                </div>
                <div>
                    <img src={IntroImg} alt="intro"></img>
                </div>
            </div>
            <div className={styles.MythsText}>
                <p>
                    <b>Homeopathic medicines are slow to act and cannot be used in acute cases</b>
                    <br />
                    Most people take recourse in Homeopathy for chronic problems such as arthritis, allergic asthma or skin conditions, etc., which take a longer time to be treated with any other system of medicine too. However, in acute ailments like fever, diarrhoea, acute cold, cough, etc., homeopathic remedies act as fast as conventional medicines, sometimes even faster.
                </p>
                <p>
                    <b>There are too many dietary restrictions to be followed during homeopathic treatment</b>
                    <br />
                    The only medical restrictions that a homeopath may impose depend upon the disease that the patient suffers from; for example, diabetics should avoid sweets and a high carbohydrate diet. Since homeopathic medicines act through nerve endings, traditional homeopaths do not prefer the use or consumption of any substance with strong odors like toothpaste, garlic, onions, etc., as this could affect the action of homeopathic medicines. Modern homeopaths recommend having the medicines after rinsing the mouth also advocate placing the medicine below the tongue for best results.
                </p>
                <p>
                    <b>Homeopathic doctors are quacks who do not have formal training in the field of Medicine.</b>
                    <br />
                    Qualified doctors practice Homeopathy, in most parts of the world. In India, there are over 200 homeopathy medical colleges and world over the number is close to 500, which offer degree and post-graduate studies in Homeopathy. At present, there are over 2,00,000 trained homeopaths in India and at least half-million across the globe.
                </p>
                <p>
                    <b>Homeopathy cannot be used in diabetic patients.</b>
                    <br />
                    It can be used! The minute amount of sugar globules (the little round pills) taken daily does not matter. Sugar intake in the daily diet is significantly higher than that taken by a few globules. Surprisingly from 1 table spoon of sugar we can prepare pills that can last for 1 month & 1 spoon of sugar taken over a period of 1 month won’t cause any damage to diabetes patients.
                </p>
                <p>
                    <b>Homeopathy and Allopathy cannot be taken together</b>
                    <br />
                    In patients suffering from drug-dependant diseases such as diabetes and high blood pressure, allopathic drugs cannot be suddenly withdrawn; hence, homeopathic medicines may be taken with allopathic medicines. However, allopathic medicine is often palliative or suppressive. For example, if a patient with headache takes a painkiller, his symptoms would get masked and therefore a good prescription by a homeopath could become difficult. Similarly, some medicines in Allopathy tend to suppress rather than cure while homeopathic medicines may expel toxins. In such cases, it is better to take Homeopathy alone.
                </p>
                <p>
                    <b>Homeopathy cannot help surgical cases at all</b>
                    <br />
                    A number of surgical conditions can be treated effectively with Homeopathy, for e.g. recurrent tonsillitis, piles, fissures, fistula, chronic ear discharge, vocal cord nodules, kidney and gall bladder stones, small-sized uterine fibroids, ovarian cysts, warts and corns. However, every medical science has its set of advantages and limitations. Thus, in certain cases where the disease has reached an advanced stage or in emergency cases, surgery is essential and cannot be avoided.
                </p>
            </div>
        </div>
        </>
    );
};

export default HomiopathyMyths;