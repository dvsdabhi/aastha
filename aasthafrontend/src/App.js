import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Appointment from './pages/Appointment';
import AboutHomepathic from './pages/AboutHomepathic';
import Contact from './pages/Contact';
import Service from './pages/Service';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about-homeopathy' element={<AboutHomepathic />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
