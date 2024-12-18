import React, { useState } from "react";
import styles from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({email:'',password:''});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginData({
            ...loginData,
            [name]:value
        })
    }
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/admin/admin-login',{loginData});
        console.log("=-=",res);
        if(res.data.status === 200){
          navigate('/admin/dashboard');
        }
      } catch (error) {
        console.log("not vali email");
      }
    };
  
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input 
                type="email"
                name="email"
                value={loginData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                className={styles.input}
                required 
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input 
                type="password"
                name="password"
                value={loginData.password} 
                onChange={handleChange} 
                placeholder="Enter your password" 
                className={styles.input}
                required 
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>
        </div>
      </div>
    );
}

export default Login;