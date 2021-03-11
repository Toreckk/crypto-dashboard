import React from 'react';
import {AppContext} from "./AppProvider"
import './AppBar.scss'

function AppBar() {
    return (
        <AppContext.Consumer>
            {({page, setPage})=>
                <div className="Header">
                <div className="Logo"> CryptoDash </div>
                <div/>
                <div className="controlBtn" onClick={()=>setPage("dashboard")}>Dashboard</div>
                <div className="controlBtn" onClick={()=>setPage("settings")}>Settings</div>
            </div>
            }
        </AppContext.Consumer>
    );
}

export default AppBar;