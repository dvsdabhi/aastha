import React from "react";
import styles from './HomiopathyHistory.module.css';
import IntroImg from '../../../Asset/image/8.webp';

const HomiopathyHistory = () => {
    return (
        <>
        <div className={styles.mainHistory}>
            <div className={styles.Historyimg}>
                <div>
                    <img src={IntroImg} alt="intro"></img>
                </div>
                <div className={styles.HistoryimgText}>
                    <p>Homoeopathy uses this opposing effect to bring about cure in a manner somewhat similar to that seen in vaccinations & desensitizing methods employed in modern times.</p>
                    <p>During Hahnemann’s times, very crude methods like blood letting, burning with red hot iron, use of emetics & purgatives etc. were used without any scientific basis. He was frusteted with such practice, stopped practicing & started transleting books in different languages. According to him the cure should be rapid, gentle & permanent & also to be scientific & logical.</p>
                    <p>Once while translating Cullen’s Materia Medica from English to German, he came across the explanation given by Cullen about the curative powers of Peruvian ( Cinchona ) bark in curing cases of Malaria.</p>
                    <p>He read that cinchona bark (quinine) cures ague (malaria) since it was bitter. This explanation did not satisfy him and he decided to try it out for himself. He prepared a fresh decoction of the Peruvian bark and took it every day for a few days. He noticed that after a few days that he developed chills, fever and sweating, the typical symptoms of malaria. When he stopped drinking the decoction, the symptoms disappeared. He repeated the experiment on himself and his family members many times with the same results. He came to the conclusion that what causes, cures. Being a voracious reader he found several such incidents recorded in the medical journals of the past, but the explanations were far from satisfactory.</p>
                </div>
            </div>
            <div className={styles.HistoryText}>
                <p>He took it upon himself, to experiment on his friends and family members with several other substances and recorded his observations. He noticed after some time that the effects were similar to the diseases that were occurring naturally, confirming his earlier conclusion.</p>
                <p>This was the basis of the new & scientific system of medicine called <b>HOMOEOPATHY</b>HOMOEOPATHY & the doctor was its Founder <b>Dr. Hahnemann.</b>.
                    Much before Hahnemann, Hippocrates the father of medicine mentioned the possibility of Similia Similimbus Curentur – Likes cures likes as one of the therapeutic methods. But it was not confirmed until Hahnemann came along. Ayurveda, the ancient Hindu medical system also says something to that effect.</p>
                <p>Though the idea existed much before Hahnemann, it was tenuous as far as the dosages were concerned. More was always considered better. Hahnemann experimented with decreasing quantities i.e. grain doses, ½ grain doses and in the case of herbs – drop doses (of the freshly expressed juices). He noticed that the lower he reduced the dose of the medicine, they were able to still produce disease – like symptoms when given to healthy human beings.</p>
                <p>Hahnemann should be given credit on 2 counts – he was the first to test single medicines and note their effects and attempting to record the effects of the medicines when given in a particular quantities i.e. determining the dosages.</p>
                <p>Basing his conclusions on his experiments, he postulated the homeopathic principles of single, simple and similar medicines. He was the first to coin the word allopathy (different suffering) to differentiate it from Homeopathy (similar suffering). In those times antipathy was in vogue too. That is, medicines were given which produced an opposite state to the one that the patient was suffering with. Patient with constipation was given a drug, which caused diarrhea, for sleeplessness a somnolent was prescribed without going into the cause of the problem. This practice is in vogue even to this day.</p>
                <p>Substances in sub-minimal doses are given to healthy human beings and their effects are recorded. When the drug “matches” the symptomatology of the patient, it is given to effect a positive change.</p>
                <p>For instance it is a common phenomenon that while cutting onions, the eyes tend to water with burning tears and the nose runs- a symptom of the common cold. Alium cepa (the common onion) is given in subminimal doses for cold. There are several substances that produce cold-like symptoms with their individual characteristic nasal and eye discharges. Tobacco when first smoked or chewed causes nausea, dizziness, vomiting, cold perspiration, unconsciousness and occasionally death- symptoms of tobacco poisoning. Anyone with a disease exhibiting the characteristic symptoms of tabacum will be cured by tabacum. The quantity of tobacco used is always minimal.</p>
                <p>
                    <b>Chronic Diseases:</b>
                    <br />
                    Hahnemann first postulated the concept of chronic diseases. He recognized that there is a tendency for every human being to develop diseases that are inherited. This was much before the word Genetics was coined. He called these tendencies Miasms. He affirmed that the host inherits the tendency to develop a disorder. To illustrate – we are constantly being bombarded with allergens, microbes, carcinogens etc. not all of us succumb to the onslaught. Some do, because of the inherited tendencies. Hahnemann believed that the environment is secondary to the tendencies in the host which are primary causes in the development of the disorder (s). Other factors that Hahnemann attributed to the development of diseases are the attitude of the person. People become sensitive to certain diseases because of their mindsets and lifestyles. In effect, Hahnemann was the father of psychosomatic medicine.
                </p>
                <p>Hahnemann believed that disease is caused by imbalance or derangement of the VITAL FORCE which maintains the mental, physical & moral balance of an individual. Homoeopathic medicines help the body help itself in correcting this imbalance & thus while removing the presenting acute symptoms, also helps in preventing similar diseases from recurring in the future by raising the body’s immunity.</p>
            </div>
        </div>
        </>
    );
};

export default HomiopathyHistory;