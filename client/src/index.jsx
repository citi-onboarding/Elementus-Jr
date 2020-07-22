import React from 'react';
import ReactDOM from 'react-dom';
import {
  Conteudo,
  Banner, 
  Footer,
  Services,
  Contato,
  Navbar,
  Trilha,
  DepoimentsCard, 
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Banner />
      <Services />
      <Trilha />
      <DepoimentsCard/>
      <Conteudo/>
      <Contato />
      <Footer></Footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
