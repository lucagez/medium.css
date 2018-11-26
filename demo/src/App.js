import React from 'react';

import Typo from './components/typo/typo';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Typo>
            <h1>ciao a tutti</h1>
            <p><span className="first-letter">C</span>ime state?</p>
        </Typo>
      </div>
    );
  }
}

export default App;
