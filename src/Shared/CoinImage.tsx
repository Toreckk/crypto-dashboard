import React from 'react';
import {ICoinProp} from "../Types/Types";

interface IProp{
    coin: ICoinProp,
    style?: any
}

function CoinImage({coin, style}:IProp){
    return (
        <img
            alt={coin.Symbol.toString()}
            style={style || {height: '50px'}}
            src={`http://cryptocompare.com/${coin.ImageUrl}`}
        />
    );
}

export default CoinImage;