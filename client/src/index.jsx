import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Background from "./components/Background/Background"

function App() {

  return(
    <div className="app">
      <Navbar />
      <Background />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
