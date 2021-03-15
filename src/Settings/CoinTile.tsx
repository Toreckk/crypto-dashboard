import React from 'react';
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";
import CoinHeaderGrid from "./CoinHeaderGrid";

interface IProps {
    coinKey: any,
    topSection?: Boolean
}

interface IClickCoinHandlerProps {
    topSection: Boolean,
    coinKey: String,
    favorites: String[],
    setFavorites: (newFavorites: String[]) => void
}

const MAX_FAVORITES = 5;



const CoinTile = ({ coinKey, topSection = false }: IProps) => {

    function clickCoinHandler({ topSection, coinKey, favorites, setFavorites }: IClickCoinHandlerProps) {
        let newFavorites = favorites;
        if (!topSection) {
            if (favorites.length < MAX_FAVORITES && favorites.indexOf(coinKey) < 0) {
                setFavorites([...favorites, coinKey]);
            }
        } else {
            setFavorites(newFavorites.filter(coin => coin !== coinKey));
        }


    }

    return (
        <AppContext.Consumer>
            {({ coinList, favorites, setFavorites }) => {
                let coin = coinList[coinKey];
                let TileClass = SelectableTile;
                if (topSection) TileClass = DeletableTile;
                else if (favorites.indexOf(coinKey) >= 0) TileClass = DisabledTile;
                return (
                    <TileClass onClick={() => clickCoinHandler({ topSection, coinKey, favorites, setFavorites })}>
                        <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
                        <CoinImage coin={coin} />
                    </TileClass>);
            }}
        </AppContext.Consumer>
    );
}

export default CoinTile;