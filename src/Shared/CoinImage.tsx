import React from 'react';
import {ICoinProp} from "../Types/Types";
import "./CoinImage.scss";

interface IProp{
    coin: ICoinProp,
    style?: any,
    spotlight?: boolean
}

function CoinImage({coin, style, spotlight = false}:IProp){
    return (
        <img
            alt={coin.Symbol.toString()}
            style={style}
            src={`http://cryptocompare.com/${coin.ImageUrl}`}
            className={`${spotlight? "spotlight": "no-spotlight"}`}
        />
    );
}

export default CoinImage;