import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Contato from "./components/Contato/Contato"
import Trilha from "./components/Trilha/Trilha"
import Banner from "./components/Banner/Banner"

import {
  Banner, 
  ServicesCard,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Trilha />
      <Banner />
      <Contato />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
