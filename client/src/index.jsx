import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import Contato from "./components/Contato/Contato"

import {
  Banner, 
  ServicesCard,
  Footer
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Contato />
      <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
