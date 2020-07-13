import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar"

import {
  Banner,
  Conteudo,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Conteudo/>      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
