import React from 'react';
import {AppContext} from "../App/AppProvider";
import "./Tile.scss";

interface IProps {
    children: any
}

function Tile({children}: IProps){
    return (
        <div className="tile-selectable">
            <div className="tile">
                {children}
            </div>
        </div>
        
    );
}

export default Tile;