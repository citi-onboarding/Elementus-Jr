import React from 'react';
import ReactDOM from 'react-dom';
import {
  Conteudo,
  Banner, 
  ServicesCard,
  Footer
  Services
  Contato,
  Navbar,
  Trilha,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Banner />
      <Conteudo/>
      <Trilha />
      <Contato />
      <Footer></Footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
