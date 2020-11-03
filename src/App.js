import React from 'react';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home size={100} color="orange"/>
      <Home size={50} color="navy"/>
      <Home size={125} color="black"/>
      <Home size={75} color="lime"/>
    </div>
  );
}

export default App;
