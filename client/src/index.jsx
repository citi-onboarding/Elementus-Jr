import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Contato from "./components/Contato/Contato"

import {
  Banner, 
  ServicesCard,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <ServicesCard isCenter={false} > </ServicesCard>
      <Navbar />
      <Contato />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
