import React, { useState } from "react";
import styles from "./DropDown.module.css";

const MultipleDropdowns = ({dropdownData}) => {
    // State to manage which dropdown is open
    const [openDropdown, setOpenDropdown] = useState(null);

    // Toggle dropdown based on index
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

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
