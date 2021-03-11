import React from 'react';
import {AppContext} from "../App/AppProvider";
import {ICoinProp} from "../Types/Types";
import CoinTile from "./CoinTile";

import "./CoinGrid.scss";

const lowerSectionCoins = ( coinList: ICoinProp[], filteredCoins: ICoinProp[]) => {

    console.log(filteredCoins.length);

    return (filteredCoins && filteredCoins.length > 0 && filteredCoins.map(coin=>coin.Symbol)) || Object.keys(coinList).slice(0,100);
        
}

function getCoins(coinList: ICoinProp[], topSection: Boolean, favorites: String[], filteredCoins: ICoinProp[]) {

    return topSection ? 
        Object.keys(coinList).filter(coinKey => favorites.indexOf(coinKey)>=0).sort((a,b)=>favorites.indexOf(a)-favorites.indexOf(b)):
        lowerSectionCoins(coinList, filteredCoins);
}

interface ICoinGridProps{
    topSection:Boolean
}

function CoinGrid ({topSection}:ICoinGridProps){
    return (
        <AppContext.Consumer>
            {({coinList, favorites, filteredCoins})=>
                <div className="coinList-wrapper">
                        {getCoins(coinList, topSection, favorites, filteredCoins).map((coinKey: any, id: any)=>
                            <CoinTile key={id} topSection={topSection } coinKey={coinKey}/>)}
                </div>
            }
        </AppContext.Consumer>
    );
}

export default CoinGrid;