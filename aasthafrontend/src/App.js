import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Appointment from './pages/Appointment';
import AboutHomepathic from './pages/AboutHomepathic';
import Contact from './pages/Contact';
import Treatment from './pages/Treatment';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Login from './components/Admin/Login/Login';
import PrivateRoute from './components/Admin/PrivateRoute';
import AdminHeader from './components/Admin/Header/Header';
import { useState, useEffect } from 'react';
import Inquiry from './components/Admin/Inquiry/Inquiry';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    const auth = localStorage.getItem("Auth");
    if (auth) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path="/*" element={
              <>
                <Header />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/appointment' element={<Appointment />} />
                  <Route path='/about-homeopathy' element={<AboutHomepathic />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/treatment/dental' element={<Treatment />} />
                </Routes>
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path='/admin/*' element={
            <>
            <div style={{ display: 'flex' }}>
            {isLoggedIn && <AdminHeader />}
              <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/' element={<PrivateRoute />}>
                  <Route path='/dashboard' element={<Dashboard />}/>
                  <Route path='/inquiry' element={<Inquiry />}/>
                </Route>
              </Routes>
              </div>
            </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
