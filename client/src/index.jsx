import React from 'react';
import ReactDOM from 'react-dom';
import {
  Banner, 
  Contato,
  Navbar,
  Trilha,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Banner />
      <Trilha />
      <Contato />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
