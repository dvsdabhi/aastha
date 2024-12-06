import React from "react";
import styles from './ContactusThird.module.css';

const ContactusThird = () => {
    return (
        <>
            <div>
                <div className={styles.ContactUsSecond}>
                    <h2>Quick Inquiry</h2>
                    <p>Have questions or need advice? We’re here to help! Fill out the form, and we’ll get back to you with the support you need. Let's connect and start your healing journey.</p>
                    <form>
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" />
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                        <label>Mobile No </label>
                        <input type="text" placeholder="Mobile No " />
                        <label>Message</label>
                        <textarea>Message</textarea>
                        <button>Submit Now</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactusThird;