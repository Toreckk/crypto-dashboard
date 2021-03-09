import React from 'react';
import './AppBar.scss'
import {AppContext} from './AppProvider';

function AppBar() {
    return (<div className="Header">
        <div className="Logo"> CryptoDash </div>
        <div/>
        <div className="controlBtn">Dashboard</div>
        <div className="controlBtn">Settings</div>
    </div>);
}

export default AppBar;