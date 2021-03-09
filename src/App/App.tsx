import React from 'react';
import './App.scss';
import AppBar from './AppBar';
import AppProvider from './AppProvider';
import Settings from '../Settings/Settings';

function App() {
  return (
    <div className="app-wrapper">
      <AppProvider>
        <AppBar/>
        <Settings/>
      </AppProvider> 
    </div>
  );
}

export default App;
