import React from 'react';
import * as webpackNumbers from '@library-development/webpack-author-libraries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          webpack-author-libraries: {webpackNumbers.numToWord(2)}
        </p>
      </header>
    </div>
  );
}

export default App;
