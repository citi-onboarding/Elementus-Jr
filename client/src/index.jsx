import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Contato from "./components/Contato/Contato"
import Banner from "./components/Banner/Banner"

import {
  Banner, 
  ServicesCard,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Banner />
      <Contato />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
