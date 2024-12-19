import React from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.removeItem("Auth");
    // navigate("/admin");
    window.location.reload();
  }
    return (
        // <div className={styles.dashboard}>
          <div className={styles.main}>
            <header className={styles.header}>
              <h1 className={styles.title}>Welcome, Admin</h1>
              <button className={styles.logout} onClick={LogOut}>Logout</button>
            </header>
            <section className={styles.content}>
              <div className={styles.card}>
                <h3>Total Users</h3>
                <p>120</p>
              </div>
              <div className={styles.card}>
                <h3>Active Sessions</h3>
                <p>45</p>
              </div>
              <div className={styles.card}>
                <h3>Revenue</h3>
                <p>$12,000</p>
              </div>
            </section>
          </div>
        // </div>
      );
}

export default Dashboard;