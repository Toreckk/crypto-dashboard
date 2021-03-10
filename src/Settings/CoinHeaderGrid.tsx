import "./CoinHeaderGrid.scss";

interface IHeaderGridProps{
    name: String,
    symbol: String
}

function CoinHeaderGrid({name, symbol}:IHeaderGridProps){
    return (
        <div className="header-wrapper">
            <div>{name}</div>
            <div className="coin-symbol">{symbol}</div>
        </div>
    );
}

export default CoinHeaderGrid;