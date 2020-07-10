import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Contato from "./components/Contato/Contato"


function App() {

  return(
    <div className="app">
      <Navbar />
      <Contato />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
