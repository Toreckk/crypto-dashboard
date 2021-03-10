import React from 'react';
import './App.scss';
import AppBar from './AppBar';
import AppProvider from './AppProvider';
import Settings from '../Settings/Settings';
import Content from "../Shared/Content";

function App() {
  return (
    <div className="app-wrapper">
      <AppProvider>
        <AppBar/>
        <Content>
          <Settings/>
        </Content>
      </AppProvider> 
    </div>
  );
}

export default App;
