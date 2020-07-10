import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"
import {
  ServicesCard,
} from '.\\components';


import {
  Banner,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Banner/>
      <ServicesCard/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
