import React from 'react';
import {AppContext} from "../App/AppProvider";
import {ICoinProp} from "../Types/Types";
import CoinTile from "./CoinTile";

import "./CoinGrid.scss";

function getCoins(coinList: [ICoinProp], topSection: Boolean, favorites: any) {
    return topSection ? 
        Object.keys(coinList).filter(coinKey => favorites.indexOf(coinKey)>=0) : 
        Object.keys(coinList).slice(0,100);
}

interface ICoinGridProps{
    topSection:Boolean
}

function CoinGrid ({topSection}:ICoinGridProps){
    return (
        <AppContext.Consumer>
            {({coinList, favorites})=>
                <div className="coinList-wrapper">
                        {getCoins(coinList, topSection, favorites).map((coinKey: any, id: any)=>
                            <CoinTile key={id} topSection={topSection } coinKey={coinKey}/>)}
                </div>
            }
        </AppContext.Consumer>
    );
}

export default CoinGrid;