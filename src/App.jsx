import React from 'react';
import './App.css'; // Optional: We might replace or just delete it, let's keep it clean
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
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
        <Services />
        <Bio />
        <MissionValues />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
