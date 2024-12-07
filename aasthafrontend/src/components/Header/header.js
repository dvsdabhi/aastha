// import React from "react";
// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';
// const Header = () => {
//     return (
//         <>
//         <header className={styles.headmain}>
//             <div>
//                 logo
//             </div>
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About Us</Link></li>
//                         <li><Link to="/service">Treatment</Link></li>
//                         <li><Link to="/about-homeopathy">About Homeopathy</Link></li>
//                         <li><Link to="/appointment">Book Appointment</Link></li>
//                         <li><Link to="/contact">Contact Us</Link></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div>
//                 <button>Login</button>
//                 <button>SignUp</button>
//             </div>
//         </header>
//         <hr styles="opacity: 0.5; width:1500px;"></hr>
//         </>
//     )
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.headmain}>
                <div className={styles.logo}>
                    Logo
                </div>
                <div>
                    <nav>
                        <ul className={styles.navList}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li className={styles.dropdown}>
                                <Link to="/service">Treatment</Link>
                                <ul className={styles.dropdownMenu}>
                                    <li><Link to="/service/dental">Dental Care</Link></li>
                                    <li><Link to="/service/skincare">Skincare</Link></li>
                                    <li><Link to="/service/general">General Treatment</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about-homeopathy">About Homeopathy</Link></li>
                            <li><Link to="/appointment">Book Appointment</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.authButtons}>
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
            </header>
            <hr style={{ opacity: 0.5, width: "1500px" }} />
        </>
    );
};

export default Header;
