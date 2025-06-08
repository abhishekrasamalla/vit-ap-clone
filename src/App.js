import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';
import Schools from './components/Schools';
import Programs from './components/Programs';
import Events from './components/Events';
import Research from './components/Research';
import CampusLife from './components/CampusLife';
import News from './components/News';
import SocialWall from './components/SocialWall';
import NumberAtGlance from './components/NumberAtGlance';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Schools />
      <Programs />
      <Events />
      <Research />
      <CampusLife />
      <News />
      <SocialWall />
      <NumberAtGlance />
      <Footer />
    </div>
  );
}

export default App;
