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
  Widget,
} from '.\\components';

function App() {

  return(
    <div className="app">
      <Navbar />
      <Widget />
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
