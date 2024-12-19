import React, { useEffect, useState } from 'react';
import styles from './Inquiry.module.css';
import axios from 'axios';

const Inquiry = () => {
  const [inquiries,setInquiries] = useState([]);

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchInquiries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/inquiry");
        console.log(res.data.data);
        if (res) {
          setInquiries(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchInquiries();

    // Optional cleanup function if you need to cancel or clean up requests
    return () => {
      console.log("Cleanup: component unmounted");
    };
  }, []);

  const handleSolve = async (id) => {
    const res = await axios.put(`http://localhost:5000/user/update-status/${id}`);
    if(res) {
        alert(`Inquiry with ID ${id} marked as solved`);
    }
    // You can add logic here to mark the inquiry as solved in the backend
  };

  const solveInquiry = async (id) => {
    try {
        
    } catch (error) {
        
    }
  }

  return (
    <div className={styles.inquiryPage}>
      <h1 className={styles.title}>Inquiry Details</h1>

      <table className={styles.inquiryTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td>{inquiry.name}</td>
              <td>{inquiry.email}</td>
              <td>{inquiry.mobile}</td>
              <td>{inquiry.message}</td>
              <td>{inquiry.createdAt}</td>
              <td>
                <button className={styles.solveButton} onClick={() => handleSolve(inquiry._id)}>
                  Solve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inquiry;
