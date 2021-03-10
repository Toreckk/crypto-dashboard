import React from 'react';
import {AppContext} from "../App/AppProvider";
import {ICoinProp} from "../Types/Types";
import CoinTile from "./CoinTile";

import "./CoinGrid.scss";

function getCoins(coinList: [ICoinProp]){
    return Object.keys(coinList).slice(0,100);
}

function CoinGrid (){
    return (
        <AppContext.Consumer>
            {({coinList})=>
                <div className="coinList-wrapper">
                        {getCoins(coinList).map((coinKey, id)=>
                            <CoinTile coinKey={coinKey}/>)}
                </div>
            }
        </AppContext.Consumer>
    );
}

export default CoinGrid;