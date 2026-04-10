import React from 'react';
import './App.css'; // Optional: We might replace or just delete it, let's keep it clean
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesNoImage from './components/ServicesNoImage';
import Bio from './components/Bio';
import MissionValues from './components/MissionValues';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <ServicesNoImage />
        <Bio />
        <MissionValues />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
