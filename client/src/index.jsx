import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Contato from "./components/Contato/Contato"

import {
  Banner, 
  ServicesCard,
  Services
} from '.\\components';

function App() {

  return(
    <section className="app">
     <Services/>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
