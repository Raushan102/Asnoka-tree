import React from 'react';
import Hero from './components/Hero';
import TreeInfo from './components/TreeInfo';
import TreeDetails from './components/TreeDetails';
import Students from './components/Students';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <TreeInfo />
      <TreeDetails />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
