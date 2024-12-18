import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
          <aside className={styles.sidebar}>
            <h2 className={styles.logo}>Admin Panel</h2>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Dashboard</li>
              <li className={styles.navItem}>Users</li>
              <li className={styles.navItem}>Reports</li>
              <li className={styles.navItem}>Settings</li>
            </ul>
          </aside>
          <div className={styles.main}>
            <header className={styles.header}>
              <h1 className={styles.title}>Welcome, Admin</h1>
              <button className={styles.logout}>Logout</button>
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
        </div>
      );
}

export default Dashboard;