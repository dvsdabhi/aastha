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
function App() {
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
              <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
              </Routes>
            </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
