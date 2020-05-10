import React from 'react';

import Visualizer from './components/visualizer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <span>Sorting Algorithms Visualized</span>
      </div>
      <Visualizer/>
    </div>
  );
}

export default App;
