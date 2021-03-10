import "./CoinHeaderGrid.scss";
import {DeletableTile} from "../Shared/Tile";

interface IHeaderGridProps{
    name: String,
    symbol: String,
    topSection?: Boolean
}

function CoinHeaderGrid({name, symbol, topSection}:IHeaderGridProps){
    return (
        <div className="header-wrapper">
            <div>{name}</div>
            {
                topSection ?
                    <div className="delete-icon">X</div> : 
                    <div className="coin-symbol">{symbol}</div>
            }
            
        </div>
    );
}

export default CoinHeaderGrid;