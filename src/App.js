import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HargaBuah from './tugas11/HargaBuah'
import Timer from './tugas12/Timer'
import DaftarHargaBuah from './tugas13/DaftarHargaBuah'

function App() {
  return (
    <div className="App">
      <DaftarHargaBuah />
      <Timer countStart={100}/>
    </div>
  );
}

export default App;
