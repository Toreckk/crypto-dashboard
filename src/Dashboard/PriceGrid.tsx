import {AppContext} from "../App/AppProvider";
import {PriceTile} from "./PriceTile";
import "./PriceGrid.scss";


export function PriceGrid(){
    return (
        <AppContext.Consumer>
            {({prices, currentFavorite, setCurrentFavorite})=>(
                <div className="grid-wrapper">
                    {prices.map((price, i) => 
                        <PriceTile className={`${currentFavorite === price.FROMSYMBOL ? "favorite": ""}`} 
                            key = {i} price={price.PRICE} symbol={price.FROMSYMBOL} 
                            priceChange={price.CHANGEPCT24HOUR}
                            setCurrentFavorite={setCurrentFavorite}
                        />)}
                </div>
            )}
        </AppContext.Consumer>
    );
}