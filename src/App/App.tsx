import React from 'react';
import './App.scss';
import AppBar from './AppBar';
import AppProvider from './AppProvider';

function App() {
  return (
    <div className="app-wrapper">
      <AppProvider>
        <AppBar/>
        <p>Hello world!</p>
      </AppProvider> 
    </div>
  );
}

export default App;
