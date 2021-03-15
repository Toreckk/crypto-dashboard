import "./PriceTile.scss";
import {SelectableTile} from "../Shared/Tile";

interface IPriceTileProps {
    key: number
    price: number,
    symbol: String,
    priceChange: number
}

const numberFormat = (num: number) => {
    return +(num+ '').slice(0,7);
}

export const PriceTile = ({key, price, symbol, priceChange}: IPriceTileProps) =>{
    return (
        <SelectableTile>
            <div className="header-wrapper">
                <div>{symbol}</div>
                <div className={`coin-symbol ${priceChange >= 0 ? `positive`: `negative`}`}>{numberFormat(priceChange)} %</div> 
            </div>
            <div className="ticker-price">
                ${numberFormat(price)}
            </div>   
        </SelectableTile>
    );
}