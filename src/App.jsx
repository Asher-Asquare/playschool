import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Teacher from './components/Teacher';
import Gallery from './components/Gallery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Activities from './components/Activities';
import EnrollNow from './components/SubComponents/EnrollNow';
// import Admissions from './components/SubComponents/Admissions';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Router>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <About />
                        <Education />
                        <Teacher />
                        <Activities />
                        <Gallery />
                        <Contact />
                        <Footer />
                    </>
                } />
                <Route path="/enroll-now" element={<EnrollNow />} />
                {/* <Route path="/admissions" element={<Admissions />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
