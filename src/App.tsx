import React from 'react';
import Map from './components/Map';
import Nav from './components/Nav';
import TrackMenu from './components/TrackMenu';

function App() {
  return (
    <div className="app">
      <Nav />
      <Map />
      <TrackMenu />
    </div>
  );
}

export default App;
