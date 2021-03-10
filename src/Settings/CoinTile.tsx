import React from 'react';
import {AppContext} from "../App/AppProvider";
import Tile from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";
import CoinHeaderGrid from "./CoinHeaderGrid";

interface IProps{
    coinKey: any
}

function CoinTile({coinKey}: IProps){
    
    return (
        <AppContext.Consumer>
            {({coinList})=>{
                let coin = coinList[coinKey];
                return <Tile>
                    <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
                    <CoinImage coin={coin} />
                </Tile>
            }}
        </AppContext.Consumer>
    );
}

export default CoinTile;