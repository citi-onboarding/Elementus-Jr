import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"

import {
  Banner, 
  ServicesCard,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <ServicesCard isCenter={false} > </ServicesCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
