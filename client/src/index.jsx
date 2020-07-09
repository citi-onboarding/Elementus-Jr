import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
} from '.\\components';

function App() {
  return(
    <div className="app">
      <Banner/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
