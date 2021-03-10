import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile, DeletableTile, DisabledTile} from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";
import CoinHeaderGrid from "./CoinHeaderGrid";

interface IProps{
    coinKey: any,
    topSection?: Boolean
}

function CoinTile({coinKey, topSection=false}: IProps){
    
    return (
        <AppContext.Consumer>
            {({coinList})=>{
                let coin = coinList[coinKey];
                let TileClass = SelectableTile;
                if(topSection) TileClass = DeletableTile;
                return <TileClass>
                    <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
                    <CoinImage coin={coin} />
                </TileClass>
            }}
        </AppContext.Consumer>
    );
}

export default CoinTile;