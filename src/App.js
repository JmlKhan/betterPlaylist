import React from 'react';
import './App.css';
import Aggregation from './components/Aggregation';
import Filter from './components/Filter';
import Playlist from './components/Playlist';
function App() {
  return (
    <div className="App">
     
     <h1>Playlist</h1>
     <Aggregation />
     <Aggregation />
     <Filter />
     <Playlist />
     <Playlist />
     <Playlist />
     <Playlist />
        
    </div>
  );
}

export default App;
