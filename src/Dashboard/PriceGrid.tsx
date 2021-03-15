import {AppContext} from "../App/AppProvider";
import {PriceTile} from "./PriceTile";
import "./PriceGrid.scss";


export function PriceGrid(){
    return (
        <AppContext.Consumer>
            {({prices})=>(
                <div className="grid-wrapper">
                    {prices.map((price, i) => <PriceTile key = {i} price={price.PRICE} symbol={price.FROMSYMBOL} priceChange={price.CHANGEPCT24HOUR}/>)}
                </div>
            )}
        </AppContext.Consumer>
    );
}