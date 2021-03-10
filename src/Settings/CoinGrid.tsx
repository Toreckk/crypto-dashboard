import React from 'react';
import {AppContext} from "../App/AppProvider";
import {ICoinProp} from "../Types/Types";
import CoinTile from "./CoinTile";

import "./CoinGrid.scss";

function getCoins(coinList: [ICoinProp], topSection: Boolean){
    return Object.keys(coinList).slice(0, topSection ? 5 : 100);
}

interface ICoinGridProps{
    topSection:Boolean
}

function CoinGrid ({topSection}:ICoinGridProps){
    console.log("topSection+" +topSection);
    return (
        <AppContext.Consumer>
            {({coinList})=>
                <div className="coinList-wrapper">
                        {getCoins(coinList, topSection).map((coinKey, id)=>
                            <CoinTile key={id} topSection={topSection } coinKey={coinKey}/>)}
                </div>
            }
        </AppContext.Consumer>
    );
}

export default CoinGrid;