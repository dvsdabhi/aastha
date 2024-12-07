import React from "react";
import styles from './Contactus.module.css';
import Dropdown from "../../DropDown/DropDown";
const ContactusSecond = () => {
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
        <>
        <div className={styles.ContactUsSecond}>
            <h2>Common Questions, Clear Answers</h2>
            <p>Have some questions before reaching out? We've got you covered! Check out our frequently asked questions to find quick answers to common queries about our homoeopathic treatments, services, and more. If you don’t see your question here, feel free to use the form to ask us directly. We're here to help!</p>
            <Dropdown dropdownData={dropdownData}/>
        </div>
        </>
    );
};

export default ContactusSecond;