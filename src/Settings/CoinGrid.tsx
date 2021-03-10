import React from 'react';
import {AppContext} from "../App/AppProvider";
import Tile from "../Shared/Tile";
import "./CoinGrid.scss";

function CoinGrid (){
    return (
        <AppContext.Consumer>
            {({coinList})=>
                <div className="coinList-wrapper">
                        {Object.keys(coinList).map((coinKey, id)=>
                            <Tile key={id}>{coinKey}</Tile>)}
                </div>
            }
        </AppContext.Consumer>
    );
}

export default CoinGrid;