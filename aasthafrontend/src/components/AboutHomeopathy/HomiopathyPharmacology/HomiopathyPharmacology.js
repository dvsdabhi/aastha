import React from "react";
import styles from './HomiopathyPharmacology.module.css';
import IntroImg from '../../../Asset/image/2.jpeg';

const HomiopathyPharmacology = () => {
    return (
        <>
        <div className={styles.mainPharma}>
            <div className={styles.Pharmaimg}>
                <div className={styles.PharmaimgText}>
                    <p>Medicines are prepared strictly in a standardised manner by combining medicinal dilution with potentisation.</p>
                    <p>Serial dilutions reduces quantity of medicines , while simultaneous potentisation raises its efficacy to unbelievable heights . Extreme dilution renders medicines free of side-effects , whereas potentisation render it with million fold efficacy It is paradoxical that despite reduction in medicinal quantity, its curative powers are multiplied due to potentisation. By repeating the process , it achieves phenomenal powers to cure . With reduction in medicinal material , side-effects are zeroed and only healing powers are left in higher potencies .This is the greatest Hahnemannian gift to the ailing world ,simultaneously , the greatest medical puzzle to modern medicine . Sources of medicine ranges from inorganic salts, minerals, metals , herbs , vegetations, plant juices, biological products, animal products, energies[ x-ray] ,inert materials and many others. It was really a wonder that even sand gave excellent medicine — siliceae . Medicines are prepared with dilution and potentisation in inert vehicles like lactose sugar, alcohol, or water etc.</p>
                    <p>Medicines are named according to its source and method of dilution and potentisation . For example, Arnica 30 means So original 1 ml of arnica plant juice is diluted by a factor of 1/100 every time , for 30 times, with potentisation . So original 1 ml of arnica plant juice is diluted serially with zillions of liters of alcohol for dilution with potentisation . This method of preparation of homeoe medicines seems controversial to Modern Pharmacology or Chemistry because according to Avogadro’s number , no substance can found above trillionth dilution . In other words , even the most sensitive laboratory can hardly detect any drug substance in /above 12 potency. They think medicines cannot work this way. Till today , we have no answer , why it should work at all. Despite this unanswered enigma , it cured millions of patients , all types acute / chronic / serious / injuries /burns/allergies/ psychiatric/ pediatric and what not . So , it works definitely and works still better with higher dilution . Arnica works from zero dilution to cm dilution [ diluted 100,000 times ] Best results are not with undiluted arnica , but 1000 or 10000 or 50000 times diluted arnica . It seems that medicine produces imprints on the vehicle [alcohol or sugar] and with repeated process though medicinal quantity is reduced materially ,but its imprint on vehicle is sharpened for longer life [ homeopathic medicines have no expiries except if heated . Heat destroys medicinal image on the alcohol /sugar. One drop of medicine can cure millions of patients .</p>
                </div>
                <div>
                    <img src={IntroImg} alt="intro"></img>
                </div>
            </div>
            <div className={styles.PharmaText}>
                <p>
                    <b>Dispensing Of Medicines</b>
                    <br />
                    Homoeopathic medicines can be dispensed in alcoholic drops, lactose powders, sucrose pills and many more. The original potencies are kept in alcohol and from it is dispensed further in form of powder, pills, tablets etc. Sugar base may be cane sugar or milk sugar. Its dispensation is non-glamorous as pills may be too small to believe its fabulous curative powers. Medicines are always taken on empty stomach .Avoid any food /liquid before and after half an hour. Take on tongue and let it be dissolved there. Do not swallow it. Alcoholic drops are mixed with plane water and are to be swallowed . WHO has accepted it as an alternative system of medicine. It is practiced in many counties of the world.
                </p>
            </div>
        </div>
        </>
    );
};

export default HomiopathyPharmacology;