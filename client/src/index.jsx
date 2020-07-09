import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"

function App() {

  return(
    <div className="app">
      <Navbar />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
