import React, { useState } from "react";
import styles from './ContactusThird.module.css';
import axios from 'axios';

const ContactusThird = () => {
    const [inquiry,setInquiry] = useState({name:"",email:"",mobile:"",message:""});

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setInquiry({
            ...inquiry,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/user/create',{inquiry});
            if(res.status == 200){
                console.log(res);
            }
        } catch (error) {
            
        }
    }

    // console.log("inquiry",inquiry);
    return (
        <>
            <div>
                <div className={styles.ContactUsSecond}>
                    <h2>Quick Inquiry</h2>
                    <p>Have questions or need advice? We’re here to help! Fill out the form, and we’ll get back to you with the support you need. Let's connect and start your healing journey.</p>
                    <form onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input type="text" name="name" value={inquiry.name} placeholder="Full Name" onChange={handleChange}  required/>
                        <label>Email</label>
                        <input type="email" name="email" value={inquiry.email} placeholder="Email" onChange={handleChange}  required/>
                        <label>Mobile No </label>
                        <input type="text" name="mobile" value={inquiry.mobile} placeholder="Mobile No " onChange={handleChange}  required/>
                        <label>Message</label>
                        <textarea type="text" name="message" value={inquiry.message} onChange={handleChange} required></textarea>
                        <button>Submit Now</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactusThird;