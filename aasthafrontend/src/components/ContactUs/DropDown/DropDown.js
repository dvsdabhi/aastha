import React, { useState } from "react";
import styles from "./DropDown.module.css";

const MultipleDropdowns = () => {
    // State to manage which dropdown is open
    const [openDropdown, setOpenDropdown] = useState(null);

    // Toggle dropdown based on index
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // Data for dropdowns
    const dropdownData = [
        {
            title: "Are homoeopathic treatments safe?",
            content: "Yes, homeopathic treatments are safe and free from side effects. They are suitable for people of all ages, including children, pregnant women, and the elderly.",
        },
        {
            title: "How long does it take to see results with homoeopathy?",
            content: "The time it takes to see results can vary depending on the individual and the condition being treated. Acute conditions may respond quickly, while chronic issues might require more time and consistent treatment.",
        },
        {
            title: "Can homoeopathy be used alongside conventional medicine?",
            content: "Yes, homoeopathy can often be used alongside conventional treatments. However, it's important to consult with your healthcare provider to ensure all treatments work harmoniously.",
        },
        {
            title: "Do I need a prescription for homeopathic treatment?",
            content: "Homeopathic treatment are available for almost all the disease, it’s best to consult with a Dr. Pratik Gorasiya for a personalized treatment plan tailored to your specific needs.",
        },
        {
            title: "Can homoeopathy treat chronic conditions?",
            content: "Yes, homoeopathy is known for its effectiveness in managing and treating chronic conditions by addressing the underlying causes rather than just the symptoms.",
        },
        {
            title: "Is homoeopathy effective for children?",
            content: "Absolutely. Homoeopathy is a gentle and effective option for treating a variety of conditions in children, from colic and teething to behavioral issues and immune support.",
        },
    ];

    return (
        <div className={styles.dropdownContainer}>
            {dropdownData.map((dropdown, index) => (
                <div key={index} className={styles.dropdownItem}>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => toggleDropdown(index)}
                    >
                        {openDropdown === index ? "Hide Details" : dropdown.title}
                    </button>
                    <div
                        className={`${styles.dropdownContent} ${
                            openDropdown === index ? styles.open : ""
                        }`}
                    >
                        <p>{dropdown.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MultipleDropdowns;
