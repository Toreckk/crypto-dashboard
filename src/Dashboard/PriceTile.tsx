import "./PriceTile.scss";
import {SelectableTile} from "../Shared/Tile";

interface IPriceTileProps {
    key: number
    price: number,
    symbol: String,
    priceChange: number,
    className: String,
    setCurrentFavorite: (newFavorite: String) => void
}

const numberFormat = (num: number) => {
    return +(num+ '').slice(0,7);
}

const handleClick = (symbol: String, setCurrentFavorite: (newFavorite: String) => void) => {
    setCurrentFavorite(symbol);
    localStorage.setItem('cryptoDash', JSON.stringify({
        ...JSON.parse(localStorage.getItem('cryptoDash') || '{}'),
        currentFavorite: symbol
    }))
}

export const PriceTile = ({key, price, symbol, priceChange, className, setCurrentFavorite}: IPriceTileProps) =>{

    return (
        <SelectableTile className={className} onClick={() => handleClick(symbol, setCurrentFavorite)}>
            <div className={`header-wrapper`}>
                <div>{symbol}</div>
                <div className={`coin-symbol ${priceChange >= 0 ? `positive`: `negative`}`}>{numberFormat(priceChange)} %</div> 
            </div>
            <div className="ticker-price">
                ${numberFormat(price)}
            </div>   
        </SelectableTile>
    );
}