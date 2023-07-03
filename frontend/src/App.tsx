import React from 'react';
import './App.css';
import { toFormatString } from '@my-module/shared/src/date-util.js'

function App() {
  return (
    <div className="App">
      <div>
        {toFormatString(new Date())}
      </div>
    </div>
  );
}

export default App;
