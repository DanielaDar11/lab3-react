import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/home';
import Contacte from './pages/contacte';
import Footer from './components/Footer/Footer';
import Rezervari from './pages/rezervari';
import Grecia from './pages/grecia';
import Italia from './pages/italy';
import Spania from './pages/spania';
import Egipt from './pages/egipt';
import Turcia from './pages/turcia';
import Austria from './pages/austria';
import Politica from './pages/politica';
import Termeni from './pages/termeni_conditii';
import Despre from './pages/despre';

function RidicareSus() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar/>
      <RidicareSus />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacte" element={<Contacte/>}/>
        <Route path="/rezervari" element={<Rezervari/>}/>
        <Route path="/despre" element={<Despre/>}/>
        <Route path="/grecia" element={<Grecia/>}/>
        <Route path="/italy" element={<Italia/>}/>
        <Route path="/spania" element={<Spania/>}/>
        <Route path="/egipt" element={<Egipt/>}/>
        <Route path="/turcia" element={<Turcia/>}/>
        <Route path="/austria" element={<Austria/>}/>
        <Route path="/politica" element={<Politica/>}/>
        <Route path="/termeni_conditii" element={<Termeni/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;