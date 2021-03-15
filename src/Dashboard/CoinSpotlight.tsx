import CoinImage from "../Shared/CoinImage";
import {AppContext} from "../App/AppProvider";
import "./CoinSpotlight.scss";
import "../Shared/Tile.scss";

export const CoinSpotlight = () => {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => {
                if(coinList ){
                    return (
                        <div className="tile">
                            {/* @ts-ignore */}
                            <h2 className="spotlight-name">{coinList[currentFavorite].CoinName}</h2>
                            {/* @ts-ignore */}
                            <CoinImage coin = {coinList[currentFavorite]} spotlight/>
                        </div>
                    );
                }
            }

                
            }
        </AppContext.Consumer>
        
    );
}