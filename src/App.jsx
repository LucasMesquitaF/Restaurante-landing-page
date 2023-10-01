import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Work from './components/Work';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
