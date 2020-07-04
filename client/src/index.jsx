import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/api/banner/Banner';

function App() {
  return(
    <div className="app">
      <Banner />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))